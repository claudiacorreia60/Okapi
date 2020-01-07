let res =[
    db.auth('root', '27remb3jZ5FKY31f'),
    db = db.getSiblingDB('adviser'),
    db.createCollection('users-likes')
]