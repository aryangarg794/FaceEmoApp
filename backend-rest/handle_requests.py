from alexnet_model import alexnet


import cv2
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from io import BytesIO
import numpy as np
from PIL import Image
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Rescaling
import uvicorn


app = FastAPI()

IMAGE_DIR = "preds/"
classes = ['angry', 'disgust', 'fear', 'happy', 'neutral', 'sad', 'surprise']
image_size = (48, 48)

rescaling = Sequential([
    Rescaling(1./255)
])

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

vggnet_model = tf.keras.models.load_model('../models/vggnet.keras')
alexnet.load_weights("../weights/alexnet.weights.h5")
# repurposed_resnet = tf.keras.models.load_model('../models/resnetfinedtunedv2.keras')



@app.get("/")
def read_root():
    return {"Test": "Working"}


def get_prediction(contents, model):

    img = np.asarray(Image.open(BytesIO(contents)).convert('L'))
    img = cv2.resize(img, image_size, interpolation=cv2.INTER_LINEAR)
    img = rescaling(img)
    img = img[np.newaxis, :, :]
    y_pred = model.predict(img)
    pred = np.argmax(y_pred)


    return {"prediction": classes[pred]}

@app.post("/vggnet")
def get_vggnet_prediction(object: UploadFile):

    contents = object.file.read()

    return get_prediction(contents, vggnet_model)

@app.post("/alexnet")
def get_alexnet_prediction(object: UploadFile):

    contents = object.file.read()
    
    return get_prediction(contents, alexnet)




if __name__ == "__main__":
    uvicorn.run("handle_requests:app", port=8000)