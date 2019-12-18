from fastapi import FastAPI
from routers import outfit_classifier_router

app = FastAPI()
app.include_router(outfit_classifier_router.router, prefix='/classifier')


@app.get('/healthcheck', status_code=200)
async def healthcheck():
    return 'Iris classifier is all ready to go!'