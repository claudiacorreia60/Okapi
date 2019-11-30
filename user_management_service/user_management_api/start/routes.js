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
Route.get('/users', 'UserController.index')
Route.get('/users/:id', 'UserController.show')
Route.put('/users/:id', 'UserController.update')
Route.delete('/users/:id', 'UserController.delete')
Route.post('/users', 'UserController.store')

/**
 * Body Measurement routes
 */

Route.get('/bodymeasurement/:user_id', 'BodyMeasurementController.showByUser')
Route.post('/bodymeasurement/store/:user_id', 'BodyMeasurementController.store')
Route.post('/bodymeasurement/update/:user_id', 'BodyMeasurementController.updateByUser')
Route.delete('/bodymeasurement/:user_id', 'BodyMeasurementController.deleteMeasurment')

/**
 * Like routes
 */

Route.get('/likes/:user_id', 'LikeController.showByUser')
Route.post('/likes/:user_id/:item_id','LikeController.likeItem')
Route.delete('/likes/:user_id/:item_id', 'LikeController.dislikeItem')