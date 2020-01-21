let res =[
    db.auth('root', 'root'),
    db = db.getSiblingDB('adviser'),
    db.createCollection('likes'),
    db.likes.insert({
        user_id: -1, user_gender: 'M',likes:{upper:[],cover:[],bottom:[],feet:[]}
    }),
    db.likes.insert({
        user_id: 0, user_gender: 'W',likes:{upper:[],cover:[],bottom:[],feet:[]}
    })
]