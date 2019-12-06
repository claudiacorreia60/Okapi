'use strict'

const User = use('App/Models/User');
const Database = use('Database')

class AuthController {
  async register({
    request,
    auth,
    response
  }) {
    const email = request.input("email")
    const password = request.input("password")
    const username = request.input("username")
    const name = request.input("name")

    if (await User.findBy('email', email) == null) {
      let user = new User()
      user.email = email
      user.password = password
      user.username = username
      user.name = name

      await user.save()
      let accessToken = await auth.withRefreshToken().generate(user, {
        email: user.email,
        username: user.username,
        name: user.name
      })

      return response.json({
        "access_token": accessToken
      })
    } else {
      return response.json({
        message: 'Email already in use.'
      })
    }
  }

  async login({
    request,
    auth,
    response
  }) {
    const email = request.input("email")
    const password = request.input("password");
    if (await auth.attempt(email, password)) {
      let user = await User.findBy('email', email)
      let accessToken = await auth.withRefreshToken().generate(user, {
        email: user.email,
        username: user.username,
        name: user.name
      })

      return response.json({
        "access_token": accessToken
      })
    }
  }

  async refresh({
    request,
    auth,
    response
  }) {
    const jwt = require('jsonwebtoken')
    const Env = use('Env')

    const refreshToken = request.header('refresh_token')
    const encrypted_token = request.header('authorization').slice(7)

    jwt.verify(encrypted_token, Env.get('APP_KEY'), {
      algorithms: ['HS256'],
      ignoreExpiration: true
    })

    let new_token = await auth.generateForRefreshToken(refreshToken)
    try {

    } catch {
      return response.send('Missing or invalid jwt token')
    }
    console.log(new_token)
  }
}

module.exports = AuthController
