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

Route.group(() => {
  Route.get('/:user_id', 'ClosetController.indexByUser')
  Route.post('/:user_id/:item_id', 'ClosetController.addToCloset')
  Route.delete('/:user_id/:item_id', 'ClosetController.removeFromCloset')
}).prefix('closet')

Route.group(() => {
  Route.get('/:user_id', 'SavedController.indexByUser')
  Route.post('/:user_id/:item_id', 'SavedController.addToSaved')
  Route.delete('/:user_id/:item_id', 'SavedController.removeFromSaved')
}).prefix('saved')

Route.group(() => {
  Route.get('/:user_id', 'OutfitController.indexByUser')
  Route.get('/:user_id/:outfit_id', 'OutfitController.show')
  Route.post('/:user_id', 'OutfitController.addOutfit')
  Route.delete('/:user_id/:outfit_id', 'OutfitController.removeOutfit')
}).prefix('outfit')
