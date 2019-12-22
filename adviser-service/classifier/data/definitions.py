from pydantic import BaseModel

class Outfit(BaseModel):
    upper_in_id: int
    upper_out_id: int
    bottom_id: int
    feet_id: int
    score: float

class ClothList(BaseModel):
    upper_in: list
    upper_out: list
    bottom: list
    feet: list