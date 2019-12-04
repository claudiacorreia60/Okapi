'use strict'

const Closet = use('App/Models/Closet')

class ClosetController {
    async indexByUser ({request, response, params: {user_id}}) {
        const closet = await Closet.query()
                                   .where('user_id', user_id)
                                   .fetch()

        return response.json({
            data: closet
        })
    }

    async addToCloset({request, response}) {
        const user_id = request.get().user 
        const item_id = request.get().item 

        var closet = new Closet() 
        closet['user_id'] = user_id
        closet['item_id'] = item_id 

        await closet.save()
                    .then(data => {
                        return response.json({
                            message: 'Item successfully added to closet.'
                        })
                    })
                    .catch(err => {
                        return response.status(500).json({
                            message: 'Item already in closet.'
                        })
                    })

    }

    async removeFromCloset({request, response}) {
        const user_id = request.get().user 
        const item_id = request.get().item 

        await Closet.query()
                    .where('user_id', user_id)
                    .where('item_id', item_id)
                    .delete()

        return response.json({
            message: 'Item successfully removed from closet.'
        })
    }
}

module.exports = ClosetController
