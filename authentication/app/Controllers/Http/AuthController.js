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

  //check if request has token and automatically log in?
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
    const access_token = JSON.parse(request.header('access_token'))
    const refresh_token = access_token.refreshToken

    try {
      let new_token = await auth.generateForRefreshToken(refresh_token)

      return response.json({
        "access_token": new_token
      })
    } catch {
      return response.send('Missing or invalid refresh token')
    }
  }
}

module.exports = AuthController
