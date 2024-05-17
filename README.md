# FaceEmoApp


A small application which features face emotion recognition, with the option of two models. The frontend is made using React and a RESTAPI is made using FASTAPI in Python. The models are implemented from scratch in Tensorflow 2.16.1 are trained on the following dataset: https://paperswithcode.com/dataset/fer2013
1. Alexnet (val accuracy 53%)
2. VGGNet13 (val accuracy 67%)

A small demo of the app can be seen below:
![Desktop2024 04 22-19 11 44 03-ezgif com-video-to-gif-converter](https://github.com/aryangarg794/FaceEmoApp/assets/72252206/aad53261-5f1d-45c0-baa7-7d245fa27a08)

To run the project run the code below:\
`pip install requirements.txt`\
`cd backend-rest`\
`python handle_requests.py`

**In a separate terminal** 

`cd frontend-emoapp`\
`npm install`\
`npm run dev`

**Unused**


Fine-tuned ResNet101V2 on the dataset (Not available as option)
