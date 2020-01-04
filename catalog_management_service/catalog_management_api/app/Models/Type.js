'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Type extends Model {
    static get table () {
        return 'type'
      }

    static get primaryKey () {
        return 'type_id'
    }

    static get createdAtColumn () {
        return null
    }
    
    static get updatedAtColumn () {
        return null
    }

    itens() {
        return this.hasMany('App/Models/Item')
    }
}

module.exports = Type
