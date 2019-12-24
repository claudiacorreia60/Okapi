from pymongo import MongoClient, ReturnDocument
from pymongo.errors import ConnectionFailure
from data.definitions import Item, User, ClothList
from starlette.responses import JSONResponse
import json


#client = MongoClient("mongodb+srv://admin:27remb3jZ5FKY31f@okapi-adviser-cluster-vcqku.gcp.mongodb.net/test?retryWrites=true&w=majority")
#db = client.get_database(name='adviser-db')

class Database:
    def __init__(self):
        self.client = MongoClient("mongodb+srv://admin:27remb3jZ5FKY31f@okapi-adviser-cluster-vcqku.gcp.mongodb.net/test?retryWrites=true&w=majority")
        self.db = self.client.get_database(name='adviser-db')

    def add_like(self, user_id: int, new_like: Item):
        users_likes = self.db.get_collection(name='users-likes')
        
        if not users_likes.find_one(filter={'user_id':user_id}):
            new_user = {"user_id":user_id,"user_likes":{"upper_in":[],"upper_out":[],"bottom":[],"feet":[]}}
            users_likes.insert_one(new_user)
        
        users_likes.update_one(filter={'user_id':user_id}, update={'$push':{'user_likes.'+new_like.body_part : json.loads(new_like.json())}})
        return "Inserted!"
    
        
    def rm_like(self, user_id: int, item_id: int, body_part: str):
        users_likes = self.db.get_collection(name='users-likes')
        users_likes.update_one(filter={'user_id':user_id}, update= {'$pull': {'user_likes.'+body_part:{'item_id':item_id}} })
        return "Deleted!"


    def add_likes(self, user_id:int, new_likes: ClothList):
        users_likes = self.db.get_collection(name='users-likes')
        if not users_likes.find_one(filter={'user_id':user_id}):
            new_user = {"user_id":user_id,"user_likes":{"upper_in":[],"upper_out":[],"bottom":[],"feet":[]}}
            users_likes.insert_one(new_user)

        users_likes.update_one(filter={'user_id':user_id}, 
                update={'$push':{'user_likes.upper_in' : {'$each': [ json.loads(like.json()) for like in new_likes.upper_in] }}})
        users_likes.update_one(filter={'user_id':user_id}, 
                update={'$push':{'user_likes.upper_out' : {'$each': [ json.loads(like.json()) for like in new_likes.upper_out] }}})
        users_likes.update_one(filter={'user_id':user_id}, 
                update={'$push':{'user_likes.bottom' : {'$each': [ json.loads(like.json()) for like in new_likes.bottom] }}})
        users_likes.update_one(filter={'user_id':user_id}, 
                update={'$push':{'user_likes.feet' : {'$each': [ json.loads(like.json()) for like in new_likes.feet] }}})
        
        return 'Inserted'
