'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Like extends Model {
  /**
   * Configuration 
   * 
   * Maps the model to the table named 'user'
   */
  static get table () {
    return 'like'
  }

  /**
   * Configuration 
   * 
   * Indicates the primary key
   */
  static get primaryKey () {
    return 'item_id' // TODO: this must be a composite key
  }

  /**
   * Relationships 
   * 
   * 1:N 
   * A user can like many items 
   * A item can be liked by many users 
   * 
   * However, due to microservices' architecture, 
   * the N:N relationship is 'split' in half, resulting
   * in a 1:N relationship
   */
  user() {
    return this.belongsTo('/App/Model/User')
  }
}

module.exports = Like
