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
        return this.belongsTo('App/Models/Brand')
    }

    color() {
        return this.belongsTo('App/Models/Color')
    }

    type() {
        return this.belongsTo('App/Models/Type')
    }

    materials() {
        return this.belongsToMany('App/Models/Material', 
                                  'item_id',
                                  'material_id')
                    .pivotTable('item_material')
                    .withPivot(['weight'])
    }

    tags() {
        return this.belongsToMany('App/Models/Tag', 
                                  'item_id',
                                  'tag_id')
                    .pivotTable('feature')
    }
}

module.exports = Item
