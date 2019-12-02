'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Color extends Model {
    static get table () {
        return 'color'
      }

    static get primaryKey () {
        return 'color_id'
    }

    static get createdAtColumn () {
        return null
    }
    
    static get updatedAtColumn () {
        return null
    }

    itens() {
        return this.belongsTo('App/Models/Item')
    }
}

module.exports = Item
