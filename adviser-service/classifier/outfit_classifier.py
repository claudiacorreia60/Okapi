import numpy as np
import random
import requests
from data.definitions import Outfit, ClothList
from data.db_access import Database


class OutfitSugestor:

    def __init__(self):
        # TODO 
        # Carregar o modelo de classificação previamente treinado 
        # self.trained_model = load_model ...
        self.db = Database()



    def sugest_outfit(self, user_id: int):
        # TODO
        # Utilizar as funções abaixo para sugerir o outfit

        space = self.build_search_space(user_id)
        outfits = self.build_outfits(space, 10)
        for outfit in outfits:
            self.classify_outfit(outfit)

        return self.get_user_likes(user_id)
        #return self.download_image(user_id)

    def classify_outfit(self, outfit: Outfit) -> float:
        # TODO
        # Fazer previsão com o modelo
        # img1 = outfit.upper_in_img
        # img2 = outfit.upper_out_img
        # ...
        # self.trained_model.predict(img1, img2, ...)
        # Retorna a classificação do outfit

        return 0.95

    def build_search_space(self, user_id: int) -> ClothList:
        # TODO
        # Fazer merge de alguns dos likes do utilizador
        # com outras peças catálogo [mais tarde, procurar peças semelhantes aos gostos do utilizador]
        # Formar um novo ClothList  (listas com os ids das peças) e retornar o espaço de procura

        user = self.db.get_user(user_id=user_id)
        gender = user['gender']
        
        likes_upper_in = [ item['item_id'] for item in user['likes']['upper_in']]

        #items_gender = self.db.get_items(gender = gender)


        # rand_likes = random.sample(likes, 2)
        # rand_items = random.sample(items_gender, 2)

        #search_space = 
        
        return likes_upper_in


    def build_outfits(self, search_space:ClothList, outfit_num: int = 10) -> list:
        # TODO
        # Contruir outfits (definitions.Outfit)
        # Retornar uma lista de Outfit 
        pass
        
    def evaluate_outfits (self, outfit: Outfit) -> float:
        # TODO
        # Para cada outfit, fazer download das imagens e calcular o score
        # Utiliar o método classify_outfit
        # Retornar uma lista com os scores
        pass

    def choose_best_outfit (self, outfits:list, outfits_scores:list) -> Outfit:
        # TODO
        # Escolher o outfit com o score mais alto e retorná-lo
        pass

    def download_image(self, item_id: int, img_name: str):
        # TODO
        # Ir buscar o url da imagem a partir do item_id
        # Fazer download da imagem do url
        # Retornar a imagem para inserir no modelo
        item = self.db.get_item(item_id=item_id)
        img_url = item['img_url']
        img_data = requests.get(img_url).content
        with open(img_name, 'wb') as handler:
            handler.write(img_data)

        return img_url