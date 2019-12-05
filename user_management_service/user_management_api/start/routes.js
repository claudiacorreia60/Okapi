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

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

/**
 * User routes
 */
Route.group(()=> {
  Route.get('/', 'UserController.index')
  Route.get('/:id', 'UserController.show')
  Route.put('/:id', 'UserController.update')
  Route.delete('/:id', 'UserController.delete')
  Route.post('/', 'UserController.store')
}).prefix('users')
  //.middleware('tokenVerify') // Needs to be authenticated


/**
 * Body Measurement routes
 */

Route.get('/bodymeasurement/:user_id', 'BodyMeasurementController.showByUser')
Route.post('/bodymeasurement/:user_id', 'BodyMeasurementController.store')
Route.put('/bodymeasurement/:user_id', 'BodyMeasurementController.updateByUser')
Route.delete('/bodymeasurement/:user_id', 'BodyMeasurementController.deleteMeasurement')

/**
 * Like routes
 */
Route.get('/likes/:user_id', 'LikeController.showByUser')
Route.post('/likes/:user_id/:item_id','LikeController.likeItem')
Route.delete('/likes/:user_id/:item_id', 'LikeController.dislikeItem')