'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tag extends Model {
    static get table () {
        return 'tag'
      }

    static get primaryKey () {
        return 'tag_id'
    }

    static get createdAtColumn () {
        return null
    }
    
    static get updatedAtColumn () {
        return null
    }

    itens() {
        return this.belongsToMany('App/Models/Item',
                                  'tag_id',
                                  'item_id')
                   .pivotTable('feature')
    }
}

module.exports = Tag
