from fastapi import APIRouter
from outfit_classifier import OutfitSugestor
from starlette.responses import JSONResponse
from data.definitions import Outfit

router = APIRouter()
outfit_sugestor = OutfitSugestor()

@router.post('/classify_outfit', response_model = float)
def classify_outfit(outfit: Outfit):
    return JSONResponse(outfit_sugestor.classify_outfit(outfit))

@router.post('/sugest_outfit', response_model=Outfit)
def sugest_outfit(user_id: int) -> Outfit :
    return JSONResponse(outfit_sugestor.sugest_outfit(user_id))
