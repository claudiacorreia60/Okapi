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

    async addToCloset({request, response, params: {user_id, item_id}}) {

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

    async removeFromCloset({request, response, params: {user_id, item_id}}) {

        var removed = await Closet.query()
                    .where('user_id', user_id)
                    .where('item_id', item_id)
                    .delete()

        if (removed > 0) {
            return response.json({
                message: 'Outfit successfully removed from closet.'
            })
        } else {
            return response.json({
                message: 'Item not found.'
            })
        } 
    }
}

module.exports = ClosetController
