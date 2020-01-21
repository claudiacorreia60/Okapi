'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/* User routes */
Route.group(() => {
  Route.get('/', 'User/UserController.index')
  /**
   * @api {get} /users/:user_id Get user data 
   * @apiName GetUser 
   * @apiGroup Users 
   * 
   * @apiDescription Returns user's data 
   * 
   * @apiParam {Integer} user_id The users ID 
   * 
   * @apiExample Example usage: 
   * curl -i http://localhost/users/243
   * 
   * @apiSuccess {String} user_id User's ID
   * @apiSuccess {String} name User's name
   * @apiSuccess {String} email User's email 
   * @apiSuccess {String} name User's name 
   * @apiSuccess {String} gender User's gender 
   * @apiSuccess {Date} birthday User's birth date 
   * @apiSuccess {String} photo User's photograph 
   * 
   * 
   * @apiError UserNotFound Requested user not found.
   * @apiError PermissionDenied User doesn't have permissions to access the request resource.
   * 
   * @apiErrorExample UserNotFound example response
   *     404 UserNotFound
   *     {
   *        "message": "User not found.",
   *        "id": "40"
   *     }
   * 
   * @apiErrorExample PermissionDenied example response
   *     401 PermissionDenied 
   *     {
   *         "message": "Not enough permissions."
   *     }
   * 
   * @apiSuccessExample Example success response:
   *    {
   *      "user_id": 1,
   *      "name": "Rui",
   *      "username": "rc133",
   *      "gender": "M",
   *      "birthday": "1990-06-15 00:00:00",
   *      "photo": null
   *    }
   */
  Route.get('/:user_id', 'User/UserController.show')//.middleware('userVerify')

  /**
   * @api {post} /users/ Create a new user 
   * @apiName CreateUser 
   * @apiGroup Users 
   * 
   * @apiDescription Creates a new user given his/hers related data
   * 
   * @apiParam {String} name User's name
   * @apiParam {String} email User's email 
   * @apiParam {String} name User's name 
   * @apiParam {String} gender User's gender 
   * @apiParam {Date} birthday User's birth date 
   * @apiParam {String} photo User's photograph 
   * 
   * @apiError UserNotFound Requested user not found.
   * 
   * @apiErrorExample UserNotFound example response
   *     404 UserNotFound
   *     {
   *        "message": "User not found.",
   *        "id": "40"
   *     }
   * 
   * @apiSuccessExample Example success response: 
   *    {
   *      "message": "User successfully created."
   *    }
   */
  Route.post('/', 'User/UserController.store')

  /**
   * @api {put} /users/:user_id Update an existing user 
   * @apiName UpdateUser 
   * @apiGroup Users 
   * 
   * @apiDescription Updates a new user given new related data.
   * 
   * @apiParam {Integer} user_id User's ID (on path)
   * 
   * @apiParam {String} [name] User's name
   * @apiParam {String} [email] User's email 
   * @apiParam {String} [gender] User's gender 
   * @apiParam {Date} [birthday] User's birth date 
   * @apiParam {String} [photo] User's photograph 
   * 
   * @apiError UserNotFound Requested user not found.
   * @apiError PermissionDenied User doesn't have permissions to access the request resource.
   * 
   * @apiErrorExample UserNotFound example response:
   *     404 UserNotFound
   *     {
   *        "message": "User not found."
   *        "id": "40"
   *     }
   * 
   * @apiErrorExample PermissionDenied example response:
   *     401 PermissionDenied 
   *     {
   *         "message": "Not enough permissions."
   *     }
   * 
   * @apiSuccessExample Example success response: 
   *    {
   *      "message": "User successfully updated."
   *    }
   */

  Route.put('/:user_id', 'User/UserController.update')//.middleware('userVerify')

  /**
   * @api {delete} /users/:user_id Delete an existing user 
   * @apiName DeleteUser
   * @apiGroup Users 
   * 
   * @apiDescription Deletes a user
   * 
   * @apiParam {Integer} user_id User's ID (on path)
   * 
   * @apiError UserNotFound Requested user not found.
   * @apiError PermissionDenied User doesn't have permissions to access the request resource.
   * 
   * @apiErrorExample UserNotFound example response:
   *     404 UserNotFound
   *     {
   *        "message": "User not found.",
   *        "id": "40"
   *     }
   * 
   * @apiErrorExample PermissionDenied example response:
   *     401 PermissionDenied 
   *     {
   *         "message": "Not enough permissions."
   *     }
   * 
   * @apiSuccessExample Example success response: 
   *    {
   *      "message": "User successfully updated."
   *    }
   */
  Route.delete('/:user_id', 'User/UserController.delete')
}).prefix('users')
  //.middleware('tokenVerify')

/* Body Measurement routes */
Route.group(() => {
  /**
   * @api {get} /bodymeasurement/:user_id Get user's body measurements
   * @apiName GetBodyMeasurement 
   * @apiGroup BodyMeasurement
   * 
   * @apiDescription Returns user's body measurements data 
   * 
   * @apiParam {Integer} user_id The users ID 
   * 
   * @apiExample Example usage: 
   * curl -i http://localhost/bodymeasurement/1
   * 
   * @apiSuccess {String} user_id User's ID
   * @apiSuccess {String} chest User's chest measurement in centimeters 
   * @apiSuccess {String} waist User's waist measurement in centimeters 
   * @apiSuccess {String} hips User's hips measurement in centimeters 
   * @apiSuccess {String} foot_size User's foot size in european scale
   * 
   * @apiError UserNotFound Requested user not found.
   * @apiError PermissionDenied User doesn't have permissions to access the request resource.
   * 
   * @apiErrorExample UserNotFound example response
   *     404 UserNotFound
   *     {
   *        "message": "User not found.",
   *        "user_id": "40"
   *     }
   * 
   * @apiErrorExample PermissionDenied example response
   *     401 PermissionDenied 
   *     {
   *         "message": "Not enough permissions."
   *     }
   * 
   * @apiSuccessExample Example success response:
   *    {
            "id": 1,
            "user_id": 1,
            "chest": 86,
            "waist": 71,
            "hips": 89,
            "foot_size": 41
   *    }
   */
  Route.get('/:user_id', 'User/BodyMeasurementController.showByUser')

  /**
   * @api {post} /bodymeasurement/:user_id Creates user's body measurements 
   * @apiName CreateBodyMeasurement
   * @apiGroup BodyMeasurement 
   * 
   * @apiDescription Creates user's body measurements given his/hers related data
   * 
   * @apiParam {String} user_id User's ID (on path)
   * @apiParam {String} chest User's chest measurement in centimeters 
   * @apiParam {String} waist User's waist measurement in centimeters 
   * @apiParam {String} hips User's hips measurement in centimeters 
   * @apiParam {String} foot_size User's foot size in european scale
   * 
   * @apiError UserNotFound Requested user not found.
   * @apiError DuplicatedBodyMeasurement Duplicated body measurements for the requested user.
   * 
   * @apiErrorExample UserNotFound example response
   *     404 UserNotFound
   *     {
   *        "message": "User not found.",
   *        "user_id": "40"
   *     }
   * 
   * @apiErrorExample DuplicatedBodyMeasurement example response
   *     500 DuplicatedBodyMeasurement
   *     {
   *        "message": "Duplicated body measurements for the requested user.",
   *        "user_id": "3"
   *     }
   * 
   * @apiSuccess {String} user_id User's ID
   * @apiSuccess {String} chest User's chest measurement in centimeters 
   * @apiSuccess {String} waist User's waist measurement in centimeters 
   * @apiSuccess {String} hips User's hips measurement in centimeters 
   * @apiSuccess {String} foot_size User's foot size in european scale
   * 
   * @apiSuccessExample Example success response: 
   *    {
   *      "message": "Successfully inserted new user's body measurements."
   *    }
   */
  Route.post('/:user_id', 'User/BodyMeasurementController.store')

  /**
   * @api {put} /bodymeasurement/:user_id Update user's body measurements 
   * @apiName UpdateBodyMeasurement
   * @apiGroup BodyMeasurement 
   * 
   * @apiDescription Updates user's body measurements given new related data
   * 
   * @apiParam {String} user_id User's ID (path)
   * @apiParam {String} [chest] User's chest measurement in centimeters 
   * @apiParam {String} [waist] User's waist measurement in centimeters 
   * @apiParam {String} [hips] User's hips measurement in centimeters 
   * @apiParam {String} [foot_size] User's foot size in european scale
   * 
   * @apiError UserNotFound Requested user not found.
   * @apiError BodyMeasurementNotFound Requested body measurements not found.
   * 
   * @apiErrorExample UserNotFound example response
   *     404 UserNotFound
   *     {
   *        "message": "User not found.",
   *        "user_id": "40"
   *     }
   * 
   * @apiErrorExample BodyMeasurementsNotFounf example response
   *     404 BodyMeasurementsNotFound
   *     {
   *        "message": "Body measurements for the requested user not found.",
   *        "user_id" : "3"
   *     }
   * 
   * @apiSuccessExample Example success response: 
   *    {
   *      "message": "Successfully updated body measurements."
   *    }
   */
  Route.put('/:user_id', 'User/BodyMeasurementController.updateByUser')

  /**
   * @api {delete} /bodymeasurement/:user_id Delete user's body measurements 
   * @apiName DeleteBodyMeasurement
   * @apiGroup BodyMeasurement 
   * 
   * @apiDescription Deletes user's body measurements
   * 
   * @apiParam {String} user_id User's ID
   * 
   * @apiError UserNotFound Requested user not found.
   * @apiError BodyMeasurementNotFound Requested body measurements not found.
   * 
   * @apiErrorExample UserNotFound example response
   *     404 UserNotFound
   *     {
   *        "message": "User not found.",
   *        "user_id": "40"
   *     }
   * 
   * @apiErrorExample BodyMeasurementsNotFounf example response
   *     404 BodyMeasurementsNotFound
   *     {
   *        "message": "Body measurements for the requested user not found.",
   *        "user_id" : "3"
   *     }
   * 
   * @apiSuccessExample Example success response: 
   *    {
   *      "message": "Successufully removed body measurements."
   *    }
   */
  Route.delete('/:user_id', 'User/BodyMeasurementController.delete')
}).prefix('bodymeasurement')
  //.middleware(['tokenVerify', 'userVerify'])

/* Like routes */
Route.group(() => {
  /**
   * @api {get} /likes/:user_id Get user's likes
   * @apiName GetLikes
   * @apiGroup Likes
   * 
   * @apiDescription Returns user's liked items
   * 
   * @apiParam {Integer} user_id The user's ID 
   * 
   * @apiExample Example usage: 
   * curl -i http://localhost/likes/1
   * 
   * @apiSuccess {String} user_id User's ID
   * @apiSuccess {Item[]} likes User's liked items
   *
   * @apiError UserNotFound Requested user not found.
   * 
   * @apiErrorExample UserNotFound example response
   *     404 UserNotFound
   *     {
   *        "message": "User not found.",
   *        "user_id": "40"
   *     }
   * 
   * @apiSuccessExample Example success response:
   *    [
            Item
        ]
   */
  Route.get('/:user_id', 'User/LikeController.showByUser')

  /**
   * @api {post} /likes/:user_id/:item_id Create new like
   * @apiName CreateLike
   * @apiGroup Likes
   * 
   * @apiDescription Creates new like given related data
   * 
   * @apiParam {String} user_id User's ID
   * @apiParam {String} item_id Item's ID 
   * 
   * @apiError UserNotFound Requested user not found.
   * @apiError DuplicatedLike Duplicated like.
   * 
   * @apiErrorExample UserNotFound example response
   *     404 UserNotFound
   *     {
   *        "message": "User not found.",
   *        "user_id": "40"
   *     }
   * 
   * @apiErrorExample DuplicatedLike example response
   *     500 DuplicatedLike
   *     {
   *        "message": "Duplicated like."
   *     }
   * 
   * @apiSuccess {Object} like Like information
   * @apiSuccess {String} like.user_id User's ID
   * @apiSuccess {String} like.item_id Item's ID
   * 
   * @apiSuccessExample Example success response: 
   *    {
   *          "message": "Successfully inserted new like.",
              "like": {
                  "user_id": "2",
                  "item_id": "6"
              }
   *    }
   */    
  Route.post('/:user_id/:item_id','User/LikeController.likeItem').middleware(['itemExists'])

    /**
   * @api {delete} /likes/:user_id/:item_id Delete user like
   * @apiName DeleteLike
   * @apiGroup Likes
   * 
   * @apiDescription Deletes user like
   * 
   * @apiParam {String} user_id User's ID
   * @apiParam {String} item_id Item's ID
   * 
   * @apiError UserNotFound Requested user not found.
   * @apiError LikeNotFound Requested like not found.
   * 
   * @apiErrorExample UserNotFound example response
   *     404 UserNotFound
   *     {
   *        "message": "User not found.",
   *        "user_id": "40"
   *     }
   * 
   * @apiErrorExample LikeNotFound example response
   *     404 LikeNotFound
   *     {
   *        "message": "Like not found."
   *     }
   * 
   * @apiSuccessExample Example success response: 
   *    {
   *      "message": "Successufully disliked item."
   *    }
   */
  Route.delete('/:user_id/:item_id', 'User/LikeController.dislikeItem')
}).prefix('likes')
  //.middleware(['tokenVerify', 'userVerify'])

/* Catalog routes */
Route.group(() => {
  /**
   * @api {get} /catalog/man Show men's catalog 
   * @apiName GetManCatalog
   * @apiGroup Catalog
   * 
   * @apiDescription Returns a list of the current items in the men's catalog. Supports filters and pagination.
   * 
   * @apiParam {Integer} page=1 Color filter (queryString)
   * @apiParam {Integer} perpage=20 Items per page (queryString)
   * @apiParam {String} [type] Item type filter (queryString)
   * @apiParam {String} [color] Color filter (queryString)
   * 
   * @apiSuccessExample Example success response: 
      {
        "item_id": 2,
        "brand_id": 1,
        "color_id": 1,
        "type_id": 3,
        "price": 39.99,
        "gender": "M",
        "description": "Calça chino com elastano para um conforto extra. Corte Slim fit.",
        "url": "dummy_url",
        "reference": "5604205842868",
        "photo": "https://lionofporches.vteximg.com.br/arquivos/ids/1461393/Calca-chino.jpg?v=637032211526570000",
        "catalog": 1,
        "color": {
            "color_id": 1,
            "name": "Azul",
            "rgb_red": 0,
            "rgb_green": 0,
            "rgb_blue": 255,
            "hexadecimal": "#0000FF"
        },
        "type": {
            "type_id": 3,
            "name": "Calças",
            "body_part": "Lower body"
        },
        "brand": {
            "brand_id": 1,
            "name": "Lion of Porches",
            "website": "https://www.lionofporches.pt/"
        },
            "materials": [
                {
                    "material_id": 1,
                    "name": "Viscose",
                    "pivot": {
                        "material_id": 1,
                        "item_id": 1,
                        "weight": 70
                    }
                },
                {
                    "material_id": 2,
                    "name": "Nylon",
                    "pivot": {
                        "material_id": 2,
                        "item_id": 1,
                        "weight": 25
                    }
                }]
      }
   */
  Route.get('/man', 'Catalog/ItemController.indexMan')

/**
   * @api {get} /catalog/woman Show women's catalog 
   * @apiName GetWomanCatalog
   * @apiGroup Catalog
   * 
   * @apiDescription Returns a list of the current items in the women's catalog. Supports filters and pagination.
   * 
   * @apiParam {Integer} page=1 Page number (queryString)
   * @apiParam {Integer} perpage=20 Items per page (queryString)
   * @apiParam {String} [type] Item type filter (queryString)
   * @apiParam {String} [color] Color filter (queryString)
   * 
   * 
   * @apiSuccessExample Example success response: 
        {
            "item_id": 7,
            "brand_id": 1,
            "color_id": 1,
            "type_id": 3,
            "price": 0,
            "gender": "W",
            "description": "Calça paper bag, com riscas verticais e pregas nas frentes. Dois bolsos retos atrás.",
            "url": "dummy_url",
            "reference": "5604205770383",
            "photo": "https://lionofporches.vteximg.com.br/arquivos/ids/1292199/CALCAS-RISCAS-COM-CINTO.jpg?v=636854917745500000",
            "catalog": 1,
            "color": {
                "color_id": 1,
                "name": "Azul",
                "rgb_red": 0,
                "rgb_green": 0,
                "rgb_blue": 255,
                "hexadecimal": "#0000FF"
            },
            "type": {
                "type_id": 3,
                "name": "Calças",
                "body_part": "Lower body"
            },
            "brand": {
                "brand_id": 1,
                "name": "Lion of Porches",
                "website": "https://www.lionofporches.pt/"
            },
            "materials": [
                {
                    "material_id": 1,
                    "name": "Viscose",
                    "pivot": {
                        "material_id": 1,
                        "item_id": 1,
                        "weight": 70
                    }
                },
                {
                    "material_id": 2,
                    "name": "Nylon",
                    "pivot": {
                        "material_id": 2,
                        "item_id": 1,
                        "weight": 25
                    }
                }]
        }
   */
  Route.get('/woman', 'Catalog/ItemController.indexWoman')

/**
   * @api {get} /catalog/:item_id Show a specific item
   * @apiName GetItem
   * @apiGroup Catalog
   * 
   * @apiDescription Returns a specific item from the catalog
   * 
   * @apiParam {Integer} item_id Item's ID
   * 
   * @apiError ItemNotFound Requested item not found.
   * 
   * @apiErrorExample ItemNotFound example response
   *     404 ItemNotFound
   *     {
   *        "message": "Item not found.",
   *     }
   * 
   * @apiSuccessExample Example success response: 
        {
            "item_id": 7,
            "brand_id": 1,
            "color_id": 1,
            "type_id": 3,
            "price": 0,
            "gender": "W",
            "description": "Calça paper bag, com riscas verticais e pregas nas frentes. Dois bolsos retos atrás.",
            "url": "dummy_url",
            "reference": "5604205770383",
            "photo": "https://lionofporches.vteximg.com.br/arquivos/ids/1292199/CALCAS-RISCAS-COM-CINTO.jpg?v=636854917745500000",
            "catalog": 1,
            "color": {
                "color_id": 1,
                "name": "Azul",
                "rgb_red": 0,
                "rgb_green": 0,
                "rgb_blue": 255,
                "hexadecimal": "#0000FF"
            },
            "type": {
                "type_id": 3,
                "name": "Calças",
                "body_part": "Lower body"
            },
            "brand": {
                "brand_id": 1,
                "name": "Lion of Porches",
                "website": "https://www.lionofporches.pt/"
            },
            "materials": [
                {
                    "material_id": 1,
                    "name": "Viscose",
                    "pivot": {
                        "material_id": 1,
                        "item_id": 1,
                        "weight": 70
                    }
                },
                {
                    "material_id": 2,
                    "name": "Nylon",
                    "pivot": {
                        "material_id": 2,
                        "item_id": 1,
                        "weight": 25
                    }
                }]
        }
   */
  Route.get('/:item_id', 'Catalog/ItemController.show')
}).prefix('catalog')
  //.middleware('tokenVerify')

/* Virtual closet routes */ 
Route.group(() => {
  /**
   * @api {get} /closet/:user_id Get user's closet
   * @apiName GetCloset
   * @apiGroup Closet
   * 
   * @apiDescription Returns user's closet items
   * 
   * @apiParam {Integer} user_id The user's ID 
   * 
   * @apiExample Example usage: 
   * curl -i http://localhost/closet/1
   * 
   * @apiSuccess {Item[]} likes User's liked items
   * 
   * @apiSuccessExample Example success response:
   *    [
            Item
        ]
   */
  Route.get('/:user_id', 'VirtualCloset/ClosetController.indexByUser')
  
  /**
   * @api {post} /closet/user_id/item_id Add a new item to closet
   * @apiName AddClosetItem
   * @apiGroup Closet 
   * 
   * @apiDescription Add a new item to the closet of the given user
   * 
   * @apiParam {String} user_id User's ID
   * @apiParam {String} item_id Item's ID
   * 
   * @apiError DuplicatedItem Duplicated item in the user's closet.
   * 
   * @apiErrorExample DuplicatedItem example response
   *     500 DuplicatedItem
   *     {
   *        "message": "Item already in closet."
   *     }
   * 
   * @apiSuccessExample Example success response: 
   *    {
   *      "message": "Item successfully added to closet."
   *    }
   */
  Route.post('/:user_id/:item_id', 'VirtualCloset/ClosetController.addToCloset').middleware(['itemExists'])
  
  /**
   * @api {delete} /closet/:user_id/:item_id Delete item from closet 
   * @apiName DeleteClosetItem
   * @apiGroup Closet 
   * 
   * @apiDescription Deletes an item from the closet of the given user.
   * 
   * @apiParam {Integer} user_id User's ID 
   * @apiParam {Integer} item_id Item's ID 
   * 
   * @apiError ItemNotFound Requested item not found.
   * 
   * @apiErrorExample ItemNotFound example response
   *     404 ItemNotFound
   *     {
   *        "message": "Item not found.",
   *        "id": "40"
   *     }
   * 
   * @apiSuccessExample Example success response: 
   *    {
   *      "message": "Item successfully removed from closet."
   *    }
   */
  Route.delete('/:user_id/:item_id', 'VirtualCloset/ClosetController.removeFromCloset').middleware(['itemExists'])
}).prefix('closet')
  .middleware([/*'tokenVerify',*/ 'userExists'])

Route.group(() => {
  /**
   * @api {get} /saved/:user_id Get user's saved items
   * @apiName GetSavedItems
   * @apiGroup Saved
   * 
   * @apiDescription Returns user's saved items
   * 
   * @apiParam {Integer} user_id The user's ID 
   * 
   * @apiExample Example usage: 
   * curl -i http://localhost/saved/1
   * 
   * @apiSuccess {Item[]} saved User's saved items
   * 
   * @apiSuccessExample Example success response:
   *    [
            Item
        ]
   */
  Route.get('/:user_id', 'VirtualCloset/SavedController.indexByUser')
  
  /**
   * @api {post} /saved/user_id/item_id Add a new item to the saved list
   * @apiName SaveItem
   * @apiGroup Saved 
   * 
   * @apiDescription Add a new item to the list of saved items of the given user
   * 
   * @apiParam {String} user_id User's ID
   * @apiParam {String} item_id Item's ID
   * 
   * @apiError DuplicatedItem Duplicated item in the user's list of saved items.
   * 
   * @apiErrorExample DuplicatedItem example response
   *     500 DuplicatedItem
   *     {
   *        "message": "Item had already been saved."
   *     }
   * 
   * @apiSuccessExample Example success response: 
   *    {
   *      "message": "Item successfully saved."
   *    }
   */  
  Route.post('/:user_id/:item_id', 'VirtualCloset/SavedController.addToSaved')
  
  /**
   * @api {delete} /saved/:user_id/:item_id Delete item from the saved list
   * @apiName UnsaveItem
   * @apiGroup Saved 
   * 
   * @apiDescription Deletes an item from the list of saved items of the given user.
   * 
   * @apiParam {Integer} user_id User's ID 
   * @apiParam {Integer} item_id Item's ID 
   * 
   * @apiError ItemNotFound Requested item not found.
   * 
   * @apiErrorExample ItemNotFound example response
   *     404 ItemNotFound
   *     {
   *        "message": "Item not found.",
   *        "id": "40"
   *     }
   * 
   * @apiSuccessExample Example success response: 
   *    {
   *      "message": "Item successfully removed from closet."
   *    }
   */
  Route.delete('/:user_id/:item_id', 'VirtualCloset/SavedController.removeFromSaved')
}).prefix('saved')
  .middleware([/*'tokenVerify',*/ 'userExists'])

Route.group(() => {
  Route.get('/:user_id', 'VirtualCloset/OutfitController.indexByUser')

  /**
   * @api {post} /outfit/:user_id Add a new outfit to the saved outfits list
   * @apiName SaveOutfit
   * @apiGroup Outfits
   * 
   * @apiDescription Add a new outfit to the list of saved outfits of the given user
   * 
   * @apiParam {String} user_id User's ID 
   * @apiParam {List} items List of item_ids that make the outfit (body)
   * 
   * @apiSuccessExample Example success response: 
   *    {
   *      "message": "Outfit successfully saved."
   *    }
   */ 
  Route.post('/:user_id', 'VirtualCloset/OutfitController.addOutfit')

  /**
   * @api {delete} /outfit/:user_id/:outfit_id Delete outfit from the saved outfits
   * @apiName UnsaveOutfit
   * @apiGroup Outfits
   * 
   * @apiDescription Deletes an outfit from the list of saved outfits of the given user.
   * 
   * @apiParam {Integer} user_id User's ID 
   * @apiParam {Integer} outfit_id Outfit's ID 
   * 
   * @apiError OutfitNotFound Requested item not found.
   * 
   * @apiErrorExample OutfitNotFound example response
   *     404 OutfitNotFound
   *     {
   *        "message": "Outfit not found.",
   *        "id": "40"
   *     }
   * 
   * @apiSuccessExample Example success response: 
   *    {
   *      "message": "Outfit successfully removed."
   *    }
   */
  Route.delete('/:user_id/:outfit_id', 'VirtualCloset/OutfitController.removeOutfit')
}).prefix('outfit')
  .middleware([/*'tokenVerify',*/ 'userExists'])

Route.group(() => {
  /**
   * @api {post} /auth/register User registration
   * @apiName RegisterUser
   * @apiGroup Auth
   * 
   * @apiDescription Performs user registration for the authentication module
   * 
   * @apiParam {String} name User's name
   * @apiParam {String} username User's username
   * @apiParam {String} email User's email 
   * @apiParam {String} password User's password 
   * 
   * @apiError ErrorTODO Saiyan poe aqui os erros
   * 
   * @apiSuccessExample Example success response: 
      {
        "access_token": {
          "type": "bearer",
          "token": "...",
          "refreshToken": "..."
        }
      }
   */
    Route.post('/register', 'Auth/AuthController.register')
  /**
   * @api {post} /auth/login User login
   * @apiName Login
   * @apiGroup Auth
   * 
   * @apiDescription Performs user login, returning a valid json web token if successful.
   * 
   * @apiParam {String} email User's email 
   * @apiParam {String} password User's password 
   * 
   * @apiError ErrorTODO Saiyan poe aqui os erros
   * 
   * @apiSuccessExample Example success response: 
      {
        "access_token": {
          "type": "bearer",
          "token": "...",
          "refreshToken": "..."
        }
      }
   */
    Route.post('/login', 'Auth/AuthController.login')
  
  /**
   * @api {post} /auth/refresh Token refresh
   * @apiName Refresh
   * @apiGroup Auth
   * 
   * @apiDescription Handles token refresh logic. Called when primary token expires, returning a new one if possible.
   * 
   * @apiHeader {Object} access_token Token object
   * @apiHeader {String} access_token.type Token type
   * @apiHeader {String} access_token.token Primary token 
   * @apiHeader {String} access_token.refresh_token Refresh token
   * 
   * @apiError Error TODO Saiyan poe aqui os erros
   * 
   * @apiSuccessExample Example success response: 
      {
        "access_token": {
          "type": "bearer",
          "token": "...",
          "refreshToken": "..."
        }
      }
   */
    Route.post('/refresh', 'Auth/AuthController.refresh')
  }).prefix('auth')


Route.group(() => {
  Route.get('/suggest_outfit', 'Adviser/AdviserController.suggest')
}).prefix('adviser')
