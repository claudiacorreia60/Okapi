from typing import List
from pydantic import BaseModel

class Outfit(BaseModel):
    upper_in_id: int
    upper_out_id: int
    bottom_id: int
    feet_id: int
    score: float

class Item(BaseModel):
    item_id: int
    body_part: str
    item_img_url: str

class ClothList(BaseModel):
    upper_in: List[Item]
    upper_out: List[Item]
    bottom: List[Item]
    feet: List[Item]

class User(BaseModel):
    user_id: int
    user_likes: ClothList

