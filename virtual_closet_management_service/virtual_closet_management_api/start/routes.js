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
  Route.put('/', 'ClosetController.addToCloset')
  Route.delete('/', 'ClosetController.removeFromCloset')
}).prefix('closet')

Route.group(() => {
  Route.get('/:user_id', 'SavedController.indexByUser')
  Route.put('/', 'SavedController.addToSaved')
  Route.delete('/', 'SavedController.removeFromSaved')
}).prefix('saved')

Route.group(() => {
  Route.get('/:user_id', 'OutfitController.indexByUser')
  Route.put('/', 'OutfitController.addOutfit')
  Route.delete('/', 'OutfitController.removeOutfit')
}).prefix('outfit')
