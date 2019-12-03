'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Material extends Model {
    static get table () {
        return 'material'
      }

    static get primaryKey () {
        return 'material_id'
    }

    static get createdAtColumn () {
        return null
    }
    
    static get updatedAtColumn () {
        return null
    }

    items() {
        return this.belongsToMany('App/Models/Item',
                                  'material_id',
                                  'item_id')
                   .pivotTable('item_material')
                   .withPivot(['weight'])
    }
}

module.exports = Material
