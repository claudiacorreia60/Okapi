from fastapi import FastAPI
from routers import outfit_classifier_router
from starlette.responses import HTMLResponse

app = FastAPI()
app.include_router(outfit_classifier_router.router)
 
@app.get('/livecheck', status_code=200)
async def live_check():
    return "Classifier is running..."