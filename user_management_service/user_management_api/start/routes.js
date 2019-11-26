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
Route.post('/users', 'UserController.store')

/**
 * Body Measurement routes
 */
Route.get('/bodymeasurement', 'BodyMeasurementController.index')
Route.get('/bodymeasurement/:user_id', 'BodyMeasurementController.showByUser')
Route.post('/bodymeasurement', 'BodyMeasurementController.store')
