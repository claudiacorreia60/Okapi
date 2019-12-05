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
  Route.get('/:user_id', 'User/UserController.show').middleware('userVerify')
  Route.post('/', 'User/UserController.store')
  Route.put('/:user_id', 'User/UserController.update').middleware('userVerify')
  Route.delete('/:user_id', 'User/UserController.delete')
}).prefix('users')
  .middleware('tokenVerify')

Route.group(() => {
  Route.get('/:user_id', 'User/BodyMeasurementController.showByUser')
  Route.post('/:user_id', 'User/BodyMeasurementController.store')
  Route.put('/:user_id', 'User/BodyMeasurementController.updateByUser')
  Route.delete('/:user_id', 'User/BodyMeasurementController.delete')
}).prefix('bodymeasurement')
  .middleware(['tokenVerify', 'userVerify'])

Route.group(() => {
  Route.get('/:user_id', 'User/LikeController.showByUser')
  Route.post('/:user_id/:item_id','User/LikeController.likeItem')
  Route.delete('/:user_id/:item_id', 'User/LikeController.dislikeItem')
}).prefix('likes')
  .middleware(['tokenVerify', 'userVerify'])

