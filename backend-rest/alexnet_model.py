import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, Input, Dropout, Dense, Lambda, MaxPool2D, Flatten, BatchNormalization
from tensorflow.nn import local_response_normalization

num_classes = 7

alexnet = Sequential([
    Input(shape=(48, 48, 1)),
    Conv2D(filters=96, kernel_size=11, strides=4, padding='same', activation='relu'),
    Lambda(local_response_normalization),
    MaxPool2D(pool_size=3, strides=2, padding='same'),
    BatchNormalization(),

    Conv2D(filters=256, kernel_size=5, strides=1, padding='same', activation='relu'),
    Lambda(local_response_normalization),
    MaxPool2D(pool_size=3, strides=2,  padding='same'),
    BatchNormalization(),

    Conv2D(filters=384, kernel_size=3, strides=1, padding='same', activation='relu'),
    Conv2D(filters=384, kernel_size=3, strides=1, padding='same', activation='relu'),
    Conv2D(filters=256, kernel_size=3, strides=1, padding='same', activation='relu'),
    BatchNormalization(),
    Dropout(0.2),

    Flatten(),
    Dense(units=4096, activation='relu'),
    Dense(units=4096, activation='relu'),
    Dropout(0.2),
    Dense(units=num_classes, activation='softmax')
])