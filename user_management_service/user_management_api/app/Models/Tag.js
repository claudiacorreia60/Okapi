'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tag extends Model {
  /**
   * Configuration 
   * 
   * Maps the model to the table named 'tag'
   */
  static get table () {
    return 'tag'
  }

  /**
   * Configuration 
   * 
   * Indicates the primary key
   */
  static get primaryKey () {
    return 'tag_id'
  }

  /**
   * Relationships 
   * 
   * N:N 
   * A user is interested in many tags and 
   * One tag can be interesting to many users
   */
   users() {
     return this.belongsToMany('App/Model/User')
  }
}

module.exports = Tag
