'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Item extends Model {
    static get table () {
        return 'item'
      }

    static get primaryKey () {
        return 'item_id'
    }

    static get createdAtColumn () {
        return null
    }
    
    static get updatedAtColumn () {
        return null
    }

    brand() {
        return this.hasOne('App/Models/Brand')
    }

    color() {
        return this.hasOne('App/Models/Color')
    }

    type() {
        return this.hasOne('App/Models/Type')
    }

    materials() {
        return this.belongsToMany('App/Models/Material')
    }

    tags() {
        return this.belongsToMany('App/Models/Tag')
    }
}

module.exports = Item
