import numpy as np
import random
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
        return self.get_user_likes(user_id)


    def get_user_likes(self, user_id: int) -> ClothList:
        return self.db.get_user_likes(user_id)['user_likes']

    def classify_outfit(self, outfit: Outfit) -> float:
        # TODO
        # Fazer previsão com o modelo
        # img1 = outfit.upper_in_img
        # img2 = outfit.upper_out_img
        # ...
        # self.trained_model.predict(img1, img2, ...)
        # Retorna a classificação do outfit
        pass

    def build_search_space(self, likes: ClothList) -> ClothList:
        # TODO
        # Fazer merge de alguns dos likes do utilizador
        # com outras peças catálogo [mais tarde, procurar peças semelhantes aos gostos do utilizador]
        # Formar um novo ClothList  (listas com os ids das peças) e retornar o espaço de procura

        """ items = self.db.get_catalogue_items()

        rand_likes = random.sample(likes, 5)
        rand_items = random.sample(items, 5)

        search_space = rand_likes """

        pass


    def build_outfits(self, search_space:ClothList, outfit_num: int = 10) -> list:
        # TODO
        # Contruir outfits (definitions.Outfit)
        # Retornar uma lista de Outfit 
        pass
        
    def evaluate_outfits (self, outfits: list) -> list:
        # TODO
        # Para cada outfit, fazer download das imagens e calcular o score
        # Utiliar o método classify_outfit
        # Retornar uma lista com os scores
        pass

    def choose_best_outfit (self, outfits:list, outfits_scores:list) -> Outfit:
        # TODO
        # Escolher o outfit com o score mais alto e retorná-lo
        pass

    def download_image(self, item_id: str):
        # TODO
        # Ir buscar o url da imagem a partir do item_id
        # Fazer download da imagem do url
        # Retornar a imagem para inserir no modelo
        pass