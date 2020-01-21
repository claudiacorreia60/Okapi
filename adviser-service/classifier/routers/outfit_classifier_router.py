from fastapi import APIRouter
from outfit_classifier import OutfitSugestor
from starlette.responses import JSONResponse
from data.definitions import Outfit, ClothList, Item, User
from data.db_access import Database
import json

router = APIRouter()
outfit_sugestor = OutfitSugestor()
db = Database()

@router.get('/sugest_outfit', response_model=Outfit)
async def sugest_outfit(user_id: int, upper:int = None, cover:int = None, bottom:int = None, feet:int = None) -> Outfit :
    return JSONResponse(outfit_sugestor.sugest_outfit(user_id, upper, cover, bottom, feet))

@router.post('/add_user')
async def add_user(user: dict):
    return JSONResponse(db.add_user(user))

@router.post('/add_like')
async def add_like(user_id: int, new_like: int):
    return JSONResponse( db.add_like(user_id, new_like))

@router.delete('/rm_like')
async def rm_like(user_id: int, item_id: int):
    return JSONResponse( db.rm_like(user_id, item_id))

@router.post('/rate')
async def rate_like(outfit: dict):
    return JSONResponse( db.add_rating(outfit))


# @router.post('/classify_outfit', response_model = float)
# def classify_outfit(outfit: Outfit):
#    return JSONResponse(outfit_sugestor.classify_outfit(outfit))

#@router.post('/add_likes')
#def add_likes(user_id: int, new_likes: ClothList):
#    return JSONResponse(db.add_likes(user_id, new_likes))



