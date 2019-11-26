'use strict'

const User = use('App/Models/User')

class UserController {
    async index ({ request, response}) {
        let users = await User.query().with('tags').fetch()


        return response.json(users)
    }

    async store({request, response}) {
        const data = request.post()
        
        const new_user = new User();

        new_user.name = data.name 
        new_user.username = data.username
        new_user.gender = data.gender 
        new_user.birthday = data.birthday
        new_user.photo = data.photo
        
        await new_user.save() 

        response.json({
            message: "Successfully inserted new user.",
            data: new_user
        })


    }

    async show ({request, response, params: {id}}) {
        
        const user = await User.find(id)

        if (user) {
            response.status(200).json(user)
        } else {
            response.status(404).json({status:404, error:"User not found.", id})
        }

    }

    async update({request, response, params: {id}}) {

    }

    async delete({request, response, params: {id}}) {
        
    }
}

module.exports = UserController
