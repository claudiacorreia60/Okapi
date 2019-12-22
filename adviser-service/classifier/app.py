from fastapi import FastAPI
from routers import outfit_classifier_router
from starlette.responses import HTMLResponse

app = FastAPI()
app.include_router(outfit_classifier_router.router)
 
@app.get('/check', status_code=200)
async def home():
    return "Classifier is running..."
