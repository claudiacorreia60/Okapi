'use strict'

const Outfit = use('App/Models/Outfit')

class OutfitController {
    async indexByUser ({request, response, params: {user_id}}) {
        const outfit = await Outfit.query()
                                   .with('items')
                                   .where('user_id', user_id)
                                   .fetch()

        return response.json({
            data: outfit
        })
    }

    async addOutfit({request, response}) {
        const user_id = request.get().user 

        var outfit = new Outfit() 
        outfit['user_id'] = user_id
        outfit['outfit_id'] = null

        // TODO: how to do this?

        return response.json({
            message: 'Outfit successfully saved.'
        })

    }

    async removeFromCloset({request, response}) {
        const outfit_id = request.get().item 

        // TODO: Check with token user can only delete their stuff

        await Closet.query()
                    //.where('user_id', user_id) // this should come from token
                    .where('outfit_id', outfit_id)
                    .delete()

        return response.json({
            message: 'Outfit successfully removed.'
        })
    }
}

module.exports = OutfitController
