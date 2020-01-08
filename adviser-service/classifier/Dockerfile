FROM python:3.7-slim-buster

RUN apt-get update && apt-get install -y python3-dev build-essential && apt-get install -y libglib2.0-0 && apt-get install -y libsm6 libxext6 libxrender-dev

RUN mkdir -p /usr/src/adviser
WORKDIR /usr/src/adviser

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 3335

CMD ["uvicorn", "--host", "0.0.0.0", "--port", "3335", "main:app"]