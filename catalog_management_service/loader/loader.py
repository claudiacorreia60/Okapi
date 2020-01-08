from lxml import etree
import re
import csv
import mysql.connector
import pymongo
import configparser

config = configparser.ConfigParser()
config.read('config.ini')
db_config = config['Database']

file_config = config['Data']
filename = file_config['filename']
filebrand = file_config['brand']

# Connect to db
mydb = mysql.connector.connect(
  host=db_config['host'],
  port=db_config['port'],
  user=db_config['user'],
  passwd=db_config['password'],
  database=db_config['database'],
  charset='utf8',
  use_unicode=True
)

mongoClient = pymongo.MongoClient('localhost:27016', username='root', password='root')
adviserdb = mongoClient.adviser 

print(mongoClient.list_database_names())

# Open file
csvfile = open('./data.csv', 'w+',)
writer = csv.writer(csvfile)
writer.writerow(['reference', 'title', 'category', 'description', 'category', 'gender', 'color', 'composition','photo'])

typeMap = {
    'Casacos' : 'Casacos',
    'Blusões' : 'Casacos',
    'Casacos e Sobretudos' : 'Casacos',
    'Casacos em pele' : 'Casacos',
    'Coletes' : 'Casacos',
    'Capas' : 'Casacos',
    'Fatos' : 'Fatos',
    'Blazers' : 'Blazers',
    'Denim' : 'Calças e Calções',
    'Calças' : 'Calças e Calções',
    'Calções' : 'Calças e Calções',
    'Macacões' : 'Calças e Calções',
    'Vestidos em tecido': 'Vestidos',
    'Vestidos em malha': 'Vestidos',
    'Saias em tecido' : 'Saias',
    'Saias em tecido' : 'Saias',
    'Camisolas' : 'Camisolas',
    'Pullovers' : 'Camisolas',
    'Polo manga curta' : 'Camisolas',
    'T-shirts' : 'T-shirts',
    'Sweats' : 'Sweats',
    'Camisas Slim Fit': 'Camisas',
    'Camisas Slim Fit': 'Camisas',
    'Camisas Regular Fit': 'Camisas',
    'Túnicas e Tops em tecido' : 'Túnicas e Tops',
    'Túnicas e Tops em malha' : 'Túnicas e Tops',
    'Sapatos' : 'Calçado',
    'Botas' : 'Calçado',
    'Sapatilhas' : 'Calçado',
    'Alpercatas' : 'Calçado',
    'Sandálias' : 'Calçado',
}

genderMap = {
    'man' : 'M',
    'woman': 'W'
}


# Clean gender field
def clean_gender (gender):
    try:
        ret = genderMap[gender.lower()]
    except:
        ret = None 
    return ret

# Clean category field
def clean_category (category):
    try:
        ret = typeMap[category]
    except:
        ret = None 
    return ret

# Clean title field
def clean_title(title):
    title = re.sub(r'\d+$', '', title) # Remove sizes Numbers
    title = re.sub(r'(L|XL|XXL|3XL|S|M|XS|XXS)$', '', title) # remove sizes Letters
    title = re.sub('\'','′',title) # Substitui apostrofos por plicas
    return title

def write_to_csv(file, obj):
    writer.writerow(obj.values())

# Get Colors in Database
def getColors(): 
    colors = {}
    mycursor = mydb.cursor()

    sql = f"SELECT DISTINCT color_id, name FROM color"

    mycursor.execute(sql)
    myresult = mycursor.fetchall()

    for row in myresult:
        colors[row[1]] = row[0] 

    mycursor.close()
    return colors

# Get Types in Database
def getTypes(): 
    categories = {}
    mycursor = mydb.cursor()

    sql = f"SELECT DISTINCT type_id, name FROM type"

    mycursor.execute(sql)
    myresult = mycursor.fetchall()

    for row in myresult:
        categories[row[1]] = row[0] 

    mycursor.close()

    return categories

def getBodyParts():
    bodyParts = {}
    mycursor = mydb.cursor()

    sql = f"SELECT DISTINCT type_id, name, body_part FROM type"

    mycursor.execute(sql)
    myresult = mycursor.fetchall()

    for row in myresult:
        bodyParts[row[1]] = row[2] 

    mycursor.close()

    return bodyParts

# Get brands in database
def getBrands(): 
    brands = {}
    mycursor = mydb.cursor()

    sql = f"SELECT DISTINCT brand_id, name FROM brand"

    mycursor.execute(sql)
    myresult = mycursor.fetchall()

    for row in myresult:
        brands[row[1]] = row[0] 

    mycursor.close()

    return brands

# Get existing body parts 
db_bodyparts = getBodyParts()
print(db_bodyparts)

# Get existing color
db_colors = getColors()
print(db_colors)

# Get existing types
db_types = getTypes()
print(db_types)

# Get existing brands 
db_brands = getBrands()
print(db_brands)

# Load item to adviser database 
def load_to_mongo(item, item_id):
    # id 
    # body_part
    # gender
    # img_url
    # 
    
    if (item['category'] is not None):
    
        new_item = { 
            'item_id': item_id ,
            'body_part': db_bodyparts[item['category']],
            'gender': item['gender'], 
            'img_url': item['photo']
        }
        
        itemsColl = adviserdb['catalog']

        itemsColl.insert_one(new_item)
    else: 
        pass


# Load item to database
def load_item(item):
    mycursor = mydb.cursor()

    color = db_colors.get(item['color'], -1)
    type = db_types.get(item['category'], -1)
    brand = db_brands.get(filebrand, -1)

    title = item['title']
    price = item['price']
    gender = item['gender']
    description = item['description']
    reference = item['reference']
    photo = item['photo']
    composition = item['composition']

    if color != -1 and type != -1:
        sql = f"INSERT INTO item VALUES (NULL, '{title}', '{brand}' , '{color}', '{type}', '{price}', '{gender}', '{description}', 'dummy_url', '{reference}', '{photo}', '{composition}',1)"
        mycursor.execute(sql)

    mydb.commit()

    item_id = mycursor.lastrowid

    mycursor.close()

    load_to_mongo(item, item_id)

# Start parsing
root = etree.parse(filename)

products = root.findall('product')

total_items = 0
total_parents = 0 


for product in products: 
    total_items += 1
    if product.find('parent_id') is None:
        total_parents += 1
        obj = {}

        obj['reference'] = product.find('reference').text
        obj['title'] = clean_title(product.find('title').text)
        obj['category'] = clean_category(product.find('sub_category2').text)
        obj['description'] = product.find('description').text
        obj['price'] = product.find('sale_price_amazon_pt').text
        obj['gender'] = clean_gender(product.find('gender').text)
        obj['color'] = product.find('color').text
        composition = product.find('composition')
        obj['composition'] =  composition.text if composition is not None else ''
        obj['photo'] = product.find('image_url_1').text

        if (obj['gender'] is not None):
            write_to_csv(csvfile, obj)
            load_item(obj)

print('Total items:', total_items)
print('Used items:', total_parents)

# ADD A USER, remove later
def load_user():
    new_like = { 
        'user_id': 1,
        'user_gender': 'M',
        'likes': {
            'upper': [],
            'cover': [],
            'bottom': [],
            'feet': []
        }
    }
        
    likesColl = adviserdb['likes']

    likesColl.insert_one(new_like)

#load_user()








