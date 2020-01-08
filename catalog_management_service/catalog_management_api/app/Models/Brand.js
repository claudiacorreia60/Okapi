'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Brand extends Model {
    static get table () {
        return 'brand'
      }

    static get primaryKey () {
        return 'brand_id'
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

module.exports = Brand
