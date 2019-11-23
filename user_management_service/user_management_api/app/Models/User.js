'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * Configuration 
   * 
   * Maps the model to the table named 'user'
   */
  static get table () {
    return 'user'
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
   * Configuration 
   * 
   * Disable createdAt attribute
   */
  static get createdAtColumn () {
    return null
  }

  /**
   * Configuration 
   * 
   * Disable updatedAt attribute
   */
  static get updatedAtColumn () {
    return null
  }

  static get dates () {
    return super.dates.concat(['data_nascimento'])
  }

  /**
   * Relationships 
   * 
   * N:N 
   * A user is interested in many tags and 
   * One tag can be interesting to many users
   */
  tags() {
    return this.belongsToMany('App/Model/Tag',
                              'user_id',
                              'tag_id')
               .pivotTable('interest')
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
  likes() {
    return this.hasMany('/App/Model/Like')
  }

  /**
   * Relationships 
   * 
   * 1:1
   * A user has one body measurement 
   * A body measurement belongs to one user 
   */
  body_measurements() {
    return this.hasOne('/App/Model/BodyMeasurement')
  }
}

module.exports = User
