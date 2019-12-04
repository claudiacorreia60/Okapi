from lxml import etree
import re
import csv
import mysql.connector
import configparser

config = configparser.ConfigParser()
config.read('config.ini')
db_config = config['Database']

# Connect to db
mydb = mysql.connector.connect(
  host=db_config['host'],
  user=db_config['user'],
  passwd=db_config['password'],
  database=db_config['database']
)

# Open file
csvfile = open('./data.csv', 'w+',)
writer = csv.writer(csvfile)
writer.writerow(['reference', 'title', 'category', 'description', 'category', 'gender', 'color', 'composition','photo'])

typeMap = {
    'Casaco/Blazer' : '',
    'Blusa/Camisa' : '',
    'Jeans'   : '',
    'Vestido': '',
    'Saia': '',
    'Shorts': '',
    'Calças': '',
    'Camisola': '',

}

genderMap = {
    'man' : 'M',
    'woman': 'W'
}

colorMap = {

}

# Clean gender field
def clean_gender (gender):
    try:
        ret = genderMap[gender.lower()]
    except:
        ret = None 
    return ret

# Clean title field
def clean_title(title):
    title = re.sub(r'\d+$', '', title) # Remove sizes Numbers
    title = re.sub(r'(L|XL|XXL|3XL|S|M|XS|XXS)$', '', title) # remove sizes Letters
    return title

# Clean composition field
def clean_composition(composition):
    new_comp = {}
    composition = re.split(r'\s(?=\d)', composition)
    
    for material in composition:
        material = re.split('%', material)
        new_comp[material[1]] = material[0] 

    return new_comp

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

# Get Categories in Database
def getCategories(): 
    categories = {}
    mycursor = mydb.cursor()

    sql = f"SELECT DISTINCT type_id, name FROM type"

    mycursor.execute(sql)
    myresult = mycursor.fetchall()

    for row in myresult:
        categories[row[1]] = row[0] 

    mycursor.close()

    return categories

# Get materials in Database
def getMaterials(): 
    materials = {}
    mycursor = mydb.cursor()

    sql = f"SELECT DISTINCT material_id, name FROM material"

    mycursor.execute(sql)
    myresult = mycursor.fetchall()

    for row in myresult:
        materials[row[1].capitalize()] = row[0] 

    mycursor.close()

    return materials

# Get brands in database
def getBrands(): 
    brands = {}
    mycursor = mydb.cursor()

    sql = f"SELECT DISTINCT brand_id, name FROM brand"

    mycursor.execute(sql)
    myresult = mycursor.fetchall()

    for row in myresult:
        brands[row[1].capitalize()] = row[0] 

    mycursor.close()

    return brands

# Get existing color
db_colors = getColors()
print(db_colors)

# Get exsting types 
db_categories = getCategories()
print(db_categories)

# Get existing materials
db_materials = getMaterials()
print(db_materials)

# Get existing brands 
db_brands = getBrands()
print(db_brands)

# Load item to database
def load_item(item):
    mycursor = mydb.cursor()

    color = db_colors.get(item['color'].capitalize(), -1)
    category = db_categories.get(item['subcategory'].capitalize(), -1)
    
    price = item['price']
    gender = item['gender']
    description = item['description']
    reference = item['reference']
    photo = item['photo']

    if color != -1 and category != -1:
        sql = f"INSERT INTO item VALUES (NULL, 1, '{color}', '{category}', '{price}', '{gender}', '{description}', 'dummy_url', '{reference}', '{photo}', 1)"
        mycursor.execute(sql)

    mydb.commit()

    mycursor.close()

# Start parsing
root = etree.parse("./feed.xml")

products = root.findall('product')

sum = 0

for product in products: 
    if product.find('parent_id') is None:

        obj = {}
        sum += 1

        obj['reference'] = product.find('reference').text
        obj['title'] = clean_title(product.find('title').text)
        obj['category'] = product.find('category').text
        obj['description'] = product.find('description').text
        obj['price'] = product.find('sale_price_amazon_pt').text
        obj['subcategory'] = product.find('sub_category2').text
        obj['gender'] = clean_gender(product.find('gender').text)
        obj['color'] = product.find('color').text
        composition = product.find('composition')
        obj['composition'] =  clean_composition(composition.text) if  composition is not None else composition
        obj['photo'] = product.find('image_url_1').text

        if (obj['gender'] is not None):
            write_to_csv(csvfile, obj)
            load_item(obj)

print(sum)







