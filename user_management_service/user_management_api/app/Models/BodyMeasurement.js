'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BodyMeasurement extends Model {
  /**
   * Configuration 
   * 
   * Maps the model to the table named 'bodymeasurement'
   */
  static get table () {
    return 'BodyMeasurement'
  }

  /**
   * Configuration 
   * 
   * Indicates the primary key
   */
  static get primaryKey () {
    return 'id'
  }

  /**
   * Relationships 
   * 
   * 1:1
   * A user has one body measurement 
   * A body measurement belongs to one user 
   */
  user() {
    return this.belongsTo('App/Model/User')
  }
}

module.exports = BodyMeasurement