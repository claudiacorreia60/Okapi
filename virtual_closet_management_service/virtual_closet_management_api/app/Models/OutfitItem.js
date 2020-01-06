'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OutfitItem extends Model {
    static get table () {
        return 'outfit_item'
      }

    static get createdAtColumn () {
        return null
    }
    
    static get updatedAtColumn () {
        return null
    }

    outfit() {
        return this.belongsTo('App/Models/Outfit')
    }
}

module.exports = OutfitItem
