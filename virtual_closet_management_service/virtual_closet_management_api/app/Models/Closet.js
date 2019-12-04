'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Closet extends Model {
    static get table () {
        return 'virtual_closet'
      }

    static get createdAtColumn () {
        return null
    }
    
    static get updatedAtColumn () {
        return null
    }
}

module.exports = Closet
