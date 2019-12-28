from typing import List
from pydantic import BaseModel


class Item(BaseModel):
    item_id: int
    body_part: str
    gender: str
    img_url: str

class Outfit(BaseModel):
    upper_in: Item
    upper_out: Item
    bottom: Item
    feet: Item
    score: float

class ClothList(BaseModel):
    upper_in: List[Item]
    upper_out: List[Item]
    bottom: List[Item]
    feet: List[Item]

class User(BaseModel):
    id: int
    gender: str
    likes: ClothList

