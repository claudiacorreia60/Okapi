'use strict'

const User = use('App/Models/User');
const Database = use('Database')
const Validator = use('Validator')

class AuthController {
  async register({
    request,
    auth,
    response
  }) {
    const rules = {
      email: 'required|email|unique:users,email',
      password: 'required',
      username: 'required|unique:users,username',
      name: 'required'
    }
    const validation = await Validator.validate(request.all(), rules)

    if (validation.fails()) {
      return response.send('Bad format: \n' + JSON.stringify(validation.messages()))
    }

    let user = new User()
    user.email = request.input("email")
    user.password = request.input("password")
    user.username = request.input("username")
    user.name = request.input("name")

    await user.save()

    let accessToken = await auth.withRefreshToken().generate(user, {
      email: user.email,
      username: user.username,
      name: user.name,
      user_id: user.id
    })

    return response.json({
      "access_token": accessToken
    })
  }



  async login({
    request,
    auth,
    response
  }) {
    const rules = {
      email: 'required|email',
      password: 'required'
    }
    const validation = await Validator.validate(request.all(), rules)

    if (validation.fails()) {
      return response.send('Bad format: \n' + JSON.stringify(validation.messages()))
    }

    const email = request.input("email")
    const password = request.input("password");

    if (await auth.attempt(email, password)) {
      let user = await User.findBy('email', email)

      let accessToken = await auth.withRefreshToken().generate(user, {
        email: user.email,
        username: user.username,
        name: user.name,
        user_id: user.id
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
