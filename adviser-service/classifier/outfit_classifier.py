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


    def sugest_outfit(self, user_id: int, upper:int, cover:int, bottom:int, feet:int):
        
        print("Starting sugestion")
        search_space = self.build_search_space(user_id, upper, cover, bottom, feet)
        if search_space == None:
            return "User not found."
        outfits = self.build_outfits(search_space, 10)
        scores = self.evaluate_outfits(outfits)
        best_outfit = self.choose_best_outfit(outfits, scores)
        best_outfit['score'] = '' + str(best_outfit['score'])
        
        # Fazer download das imagens para visualizar o outfit
        """ self.download_image(best_outfit['upper']['img_url'], 'upper')
        self.download_image(best_outfit['cover']['img_url'], 'cover')
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
        self.download_image(outfit['upper']['img_url'], 'upper')
        self.download_image(outfit['cover']['img_url'], 'cover')
        self.download_image(outfit['bottom']['img_url'], 'bottom')
        self.download_image(outfit['feet']['img_url'], 'feet')

        upper = self.loadImage('upper')
        cover = self.loadImage('cover')
        bottom = self.loadImage('bottom')
        feet = self.loadImage('feet')

        upper = upper / 255
        cover = cover / 255
        bottom = bottom / 255
        feet = feet / 255

        upper = upper.reshape(-1,64,64,3)
        cover = cover.reshape(-1,64,64,3)
        bottom = bottom.reshape(-1,64,64,3)
        feet = feet.reshape(-1,64,64,3)

        # TODO
        # Fazer previsão com o modelo
        score = self.model.predict([upper, cover, bottom, feet]) 

        # score = round(random.random(),2)
        outfit['score'] = score[0][0]

        os.remove('upper')
        os.remove('cover')
        os.remove('bottom')
        os.remove('feet')

        return score[0][0]

    def build_search_space(self, user_id: int, upper:int, cover:int, bottom:int, feet:int) -> ClothList:
        # TODO
        # Procurar peças semelhantes aos gostos do utilizador
        #  e retornar essas peças ao invés do atual        

        likes_num = 1
        catalogue_num = 20
        search_space = {"upper":[],"cover":[],"bottom":[],"feet":[]}

        print(user_id)
        user = self.db.get_user(user_id=user_id)
        if user == None:
            return None
        
        likes_upper = user['likes']['upper']
        likes_cover = user['likes']['cover']
        likes_bottom = user['likes']['bottom']
        likes_feet = user['likes']['feet']
        
        catalogue_upper = list(self.db.get_items(gender=user['user_gender'], body_part='upper'))
        catalogue_cover = list(self.db.get_items(gender=user['user_gender'], body_part='cover'))
        catalogue_bottom = list(self.db.get_items(gender=user['user_gender'], body_part='bottom'))
        catalogue_feet = list(self.db.get_items(gender=user['user_gender'], body_part='feet'))

        if not len(likes_upper) < likes_num :
            search_space['upper'].extend(random.sample(likes_upper, likes_num))
        if not len(likes_cover) < likes_num :
            search_space['cover'].extend(random.sample(likes_cover, likes_num))
        if not len(likes_bottom) < likes_num :
            search_space['bottom'].extend(random.sample(likes_bottom, likes_num))
        if not len(likes_feet) < likes_num :
            search_space['feet'].extend(random.sample(likes_feet, likes_num))
        
        search_space['upper'].extend(random.sample(catalogue_upper, catalogue_num))
        search_space['cover'].extend(random.sample(catalogue_cover, catalogue_num))
        search_space['bottom'].extend(random.sample(catalogue_bottom, catalogue_num))
        search_space['feet'].extend(random.sample(catalogue_feet, catalogue_num))
        
        if upper != None:
            search_space['upper'] = [self.db.get_item(upper)]
        if cover != None:
            search_space['cover'] = [self.db.get_item(cover)]
        if bottom != None:
            search_space['bottom'] = [self.db.get_item(bottom)]
        if feet != None:
            search_space['feet'] = [self.db.get_item(feet)]

        return search_space

    def build_outfits(self, search_space:ClothList, outfit_num: int = 10) -> list:
        outfits = []
        i = 0
        while i < outfit_num:
            upper = random.choice(search_space['upper'])
            cover = random.choice(search_space['cover'])
            bottom = random.choice(search_space['bottom'])
            feet = random.choice(search_space['feet'])
            score = 0.0
            
            outfit = { 'upper': upper, 'cover': cover, 'bottom': bottom,  'feet': feet, 'score': score }
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