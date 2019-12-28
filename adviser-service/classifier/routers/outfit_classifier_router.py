from fastapi import APIRouter
from outfit_classifier import OutfitSugestor
from starlette.responses import JSONResponse
from data.definitions import Outfit, ClothList, Item
from data.db_access import Database
import json

router = APIRouter()
outfit_sugestor = OutfitSugestor()
db = Database()

# @router.post('/classify_outfit', response_model = float)
# def classify_outfit(outfit: Outfit):
#    return JSONResponse(outfit_sugestor.classify_outfit(outfit))

@router.get('/sugest_outfit', response_model=Outfit)
async def sugest_outfit(user_id: int) -> Outfit :
    return JSONResponse(outfit_sugestor.sugest_outfit(user_id))

@router.post('/add_like')
async def add_like(user_id: int, user_gender: str,new_like: Item):
    return JSONResponse( db.add_like(user_id, user_gender, new_like))

#@router.post('/add_likes')
#def add_likes(user_id: int, new_likes: ClothList):
#    return JSONResponse(db.add_likes(user_id, new_likes))

@router.post('/rm_like')
async def rm_like(user_id: int, item_id: int, body_part: str):
    return JSONResponse( db.rm_like(user_id, item_id, body_part))


@router.post('/test_route')
async def test(item: Item):
    return JSONResponse( db.add_item(item=item))
