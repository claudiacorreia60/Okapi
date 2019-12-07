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
  Route.get('/:user_id', 'User/UserController.show')//.middleware('userVerify')
  Route.post('/', 'User/UserController.store')
  Route.put('/:user_id', 'User/UserController.update')//.middleware('userVerify')
  Route.delete('/:user_id', 'User/UserController.delete')
}).prefix('users')
  //.middleware('tokenVerify')

Route.group(() => {
  Route.get('/:user_id', 'User/BodyMeasurementController.showByUser')
  Route.post('/:user_id', 'User/BodyMeasurementController.store')
  Route.put('/:user_id', 'User/BodyMeasurementController.updateByUser')
  Route.delete('/:user_id', 'User/BodyMeasurementController.delete')
}).prefix('bodymeasurement')
  //.middleware(['tokenVerify', 'userVerify'])

Route.group(() => {
  Route.get('/:user_id', 'User/LikeController.showByUser')
  Route.post('/:user_id/:item_id','User/LikeController.likeItem')
  Route.delete('/:user_id/:item_id', 'User/LikeController.dislikeItem')
}).prefix('likes')
  //.middleware(['tokenVerify', 'userVerify'])

/* Catalog routes */
Route.group(() => {
  Route.get('/man', 'Catalog/ItemController.indexMan')
  Route.get('/woman', 'Catalog/ItemController.indexWoman')
  Route.get('/:item_id', 'Catalog/ItemController.show')
}).prefix('catalog')
  .middleware('tokenVerify')

/* Virtual closet routes */ 

Route.group(() => {
  Route.get('/:user_id', 'VirtualCloset/ClosetController.indexByUser')
  Route.post('/:user_id/:item_id', 'VirtualCloset/ClosetController.addToCloset').middleware(['itemExists'])
  Route.delete('/:user_id/:item_id', 'VirtualCloset/ClosetController.removeFromCloset').middleware(['itemExists'])
}).prefix('closet')
  .middleware(['tokenVerify', 'userExists'])

Route.group(() => {
  Route.get('/:user_id', 'VirtualCloset/SavedController.indexByUser')
  Route.post('/:user_id/:item_id', 'VirtualCloset/SavedController.addToSaved')
  Route.delete('/:user_id/:item_id', 'VirtualCloset/SavedController.removeFromSaved')
}).prefix('saved')
  //.middleware(['tokenVerify', 'userExists'])

Route.group(() => {
  Route.get('/:user_id', 'VirtualCloset/OutfitController.indexByUser')
  Route.post('/:user_id', 'VirtualCloset/OutfitController.addOutfit')
  Route.delete('/:user_id/:outfit_id', 'VirtualCloset/OutfitController.removeOutfit')
}).prefix('outfit')
  //.middleware(['tokenVerify', 'userExists'])
