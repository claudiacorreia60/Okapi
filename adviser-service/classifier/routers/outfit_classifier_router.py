
from fastapi import APIRouter
from outfit_classifier import OutfitClassifier
from starlette.responses import JSONResponse

router = APIRouter()


@router.post('/classify_outfit')
def classify_outfit(iris_features: dict):
    outfit_classifier = OutfitClassifier()
    return JSONResponse(outfit_classifier.classify_outfit(iris_features))