let res =[
    db.auth('root', 'root'),
    db = db.getSiblingDB('adviser'),
    db.createCollection('likes')
]