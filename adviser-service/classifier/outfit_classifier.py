import numpy as np
from data.definitions import Outfit, ClothList


class OutfitSugestor:

    def __init__(self):
        # TODO 
        # Carregar o modelo de classificação previamente treinado 
        # self.trained_model = load_model ...
        pass

    def classify_outfit(self, outfit: Outfit) -> float:
        # TODO
        # Fazer previsão com o modelo
        # img1 = outfit.upper_in_img
        # img2 = outfit.upper_out_img
        # ...
        # self.trained_model.predict(img1, img2, ...)
        # Retorna a classificação do outfit
        pass


    def sugest_outfit(self, user_id: int):
        # TODO
        # Utilizar as funções abaixo para sugerir o outfit
        pass


    def get_user_likes(self, user_id: int) -> ClothList:
        # TODO
        # Interação com a base de dados para ir buscar os likes
        # Retornar um dicionário de listas com ids das peças separadas
        #  por (upper_in, upper_out, bottom, feet)
        # { upper_in: ["like1", "like2", "like3"], upper_out: ["like1", ... ]}
        pass


    def build_search_space(self, likes: ClothList) -> ClothList:
        # TODO
        # Fazer merge de alguns dos likes do utilizador
        # com outras peças catálogo [mais tarde, procurar peças semelhantes aos gostos do utilizador]
        # Formar um novo ClothList (listas com os ids das peças) e retornar o espaço de procura
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

    # TODO 
    # Necessitamos de criar uma base de dados no serviço
    # com acesso a:
    # 1. Users:  id_user e id_peças gostadas
    # 2. Catálogo: id_peça e url da imagem flat