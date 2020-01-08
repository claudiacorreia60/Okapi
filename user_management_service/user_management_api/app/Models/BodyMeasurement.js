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
    return 'body_measurement'
  }

  /**
   * Configuration 
   * 
   * Indicates the primary key
   */
  static get primaryKey () {
    return 'user_id'
  }

/**
   * 
   * Disable createdAt attribute
   */
  static get createdAtColumn () {
    return null
  }

  /**
   *
   * Disable updatedAt attribute
   */
  static get updatedAtColumn () {
    return null
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
