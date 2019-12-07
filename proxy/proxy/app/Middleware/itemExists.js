'use strict'

const jwt = require('jsonwebtoken')
const Env = use('Env')
const axios =require('axios')

class ConvertEmptyStringsToNull {
  async handle ({ request, params:{item_id} }, next) {
    var user = await axios.get(`${Env.get('CATALOG_MS')}/catalog/${item_id}`)
                          .then(data => {return data.data})
                          .catch(err => {return null}) 

    if (!user) {
        var e = new Error('Item not found')
        e.name = "ItemNotFound"
        throw e
    }

    await next()                                        
  }
}

module.exports = ConvertEmptyStringsToNull
