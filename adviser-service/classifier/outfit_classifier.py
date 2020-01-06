import numpy as np
import random
import requests
import json
import os
import cv2
from tensorflow.keras.models import load_model

from data.definitions import Outfit, ClothList
from data.db_access import Database


class OutfitSugestor:

    def __init__(self):
        # TODO 
        # Carregar o modelo de classificação previamente treinado 
        self.model = load_model('prototype_cnn.h5')
        print("Loaded model")

        self.db = Database()


    def sugest_outfit(self, user_id: int):

        print("Starting sugestion")
        search_space = self.build_search_space(user_id)
        outfits = self.build_outfits(search_space, 4)
        scores = self.evaluate_outfits(outfits)
        best_outfit = self.choose_best_outfit(outfits, scores)
        best_outfit['score'] = '' + str(best_outfit['score'])
        
        # Fazer download das imagens para visualizar o outfit
        """ self.download_image(best_outfit['upper_in']['img_url'], 'upper_in')
        self.download_image(best_outfit['upper_out']['img_url'], 'upper_out')
        self.download_image(best_outfit['bottom']['img_url'], 'bottom')
        self.download_image(best_outfit['feet']['img_url'], 'feet') """ 
        print(best_outfit)
        return best_outfit

    def loadImage(self, image_path):
        #print(image_path)
        if image_path != '':
            bgr_img = cv2.imread(image_path)
            bgr_img = cv2.resize(bgr_img, (64,64))
        else:
            bgr_img = np.zeros((64,64, 3), dtype="uint8")
        return bgr_img

    def classify_outfit(self, outfit: Outfit) -> float:
        self.download_image(outfit['upper_in']['img_url'], 'upper_in')
        self.download_image(outfit['upper_out']['img_url'], 'upper_out')
        self.download_image(outfit['bottom']['img_url'], 'bottom')
        self.download_image(outfit['feet']['img_url'], 'feet')

        upper_in = self.loadImage('upper_in')
        upper_out = self.loadImage('upper_out')
        bottom = self.loadImage('bottom')
        feet = self.loadImage('feet')

        upper_in = upper_in / 255
        upper_out = upper_out / 255
        bottom = bottom / 255
        feet = feet / 255

        upper_in = upper_in.reshape(-1,64,64,3)
        upper_out = upper_out.reshape(-1,64,64,3)
        bottom = bottom.reshape(-1,64,64,3)
        feet = feet.reshape(-1,64,64,3)

        # TODO
        # Fazer previsão com o modelo
        score = self.model.predict([upper_in, upper_out, bottom, feet]) 

        # score = round(random.random(),2)
        outfit['score'] = score[0][0]

        os.remove('upper_in')
        os.remove('upper_out')
        os.remove('bottom')
        os.remove('feet')

        return score[0][0]

    def build_search_space(self, user_id: int) -> ClothList:
        # TODO
        # Procurar peças semelhantes aos gostos do utilizador
        #  e retornar essas peças ao invés do atual        

        likes_num = 1
        catalogue_num = 1
        search_space = {"upper_in":[],"upper_out":[],"bottom":[],"feet":[]}

        print(user_id)
        user = self.db.get_user(user_id=user_id)
        
        likes_upper_in = user['likes']['upper_in']
        likes_upper_out = user['likes']['upper_out']
        likes_bottom = user['likes']['bottom']
        likes_feet = user['likes']['feet']
        
        catalogue_upper_in = list(self.db.get_items(gender=user['gender'], body_part='upper_in'))
        catalogue_upper_out = list(self.db.get_items(gender=user['gender'], body_part='upper_out'))
        catalogue_bottom = list(self.db.get_items(gender=user['gender'], body_part='bottom'))
        catalogue_feet = list(self.db.get_items(gender=user['gender'], body_part='feet'))

        search_space['upper_in'].extend(random.sample(likes_upper_in, likes_num))
        search_space['upper_out'].extend(random.sample(likes_upper_out, likes_num))
        search_space['bottom'].extend(random.sample(likes_bottom, likes_num))
        search_space['feet'].extend(random.sample(likes_feet, likes_num))
        
        search_space['upper_in'].extend(random.sample(catalogue_upper_in, catalogue_num))
        search_space['upper_out'].extend(random.sample(catalogue_upper_out, catalogue_num))
        search_space['bottom'].extend(random.sample(catalogue_bottom, catalogue_num))
        search_space['feet'].extend(random.sample(catalogue_feet, catalogue_num))
        
        return search_space

    def build_outfits(self, search_space:ClothList, outfit_num: int = 10) -> list:
        outfits = []
        i = 0
        while i < outfit_num:
            upper_in = random.choice(search_space['upper_in'])
            upper_out = random.choice(search_space['upper_out'])
            bottom = random.choice(search_space['bottom'])
            feet = random.choice(search_space['feet'])
            score = 0.0
            
            outfit = { 'upper_in': upper_in, 'upper_out': upper_out, 'bottom': bottom,  'feet': feet, 'score': score }
            outfits.append(outfit)
            i += 1

        return outfits
        
    def evaluate_outfits (self, outfits: list) -> list:
        scores = []

        for outfit in outfits:
            score = self.classify_outfit(outfit)
            print(score)
            scores.append(score)

        return scores

    def choose_best_outfit (self, outfits:list, scores:list) -> Outfit:
        max_idx = np.argmax(scores)
        best_outfit = outfits[max_idx]

        return best_outfit

    def download_image(self, img_url: str, img_name: str):
        img_data = requests.get(img_url).content
        with open(img_name, 'wb') as handler:
            handler.write(img_data)

        return img_url