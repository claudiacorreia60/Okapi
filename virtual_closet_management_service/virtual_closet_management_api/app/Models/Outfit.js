'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Outfit extends Model {
    static get table () {
        return 'outfit'
      }

    static get primaryKey () {
        return 'outfit_id'
    }

    static get createdAtColumn () {
        return null
    }
    
    static get updatedAtColumn () {
        return null
    }

    items() {
        return this.hasMany('App/Models/OutfitItem')
    }
}

module.exports = Outfit
