'use strict'

const Saved = use('App/Models/Saved')

class SavedController {
    async indexByUser ({request, response, params: {user_id}}) {
        const saved = await Saved.query()
                                   .where('user_id', user_id)
                                   .fetch()

        return response.json( saved)
    }

    async addToSaved({request, response, params: {user_id, item_id}}) {

        var saved = new Saved() 
        saved['user_id'] = user_id
        saved['item_id'] = item_id 

        await saved.save()
                    .then(data => {
                        return response.json({
                            message: 'Item successfully saved.'
                        })
                    })
                    .catch(err => {
                        return response.status(500).json({
                            message: 'Item had already been saved.'
                        })
                    })
    }

    async removeFromSaved({request, response, params: {user_id, item_id}}) {

        var removed = await Saved.query()
                    .where('user_id', user_id)
                    .where('item_id', item_id)
                    .delete()

        if (removed > 0) {
            return response.json({
                message: 'Item successfully removed from saved.'
            })
        } else {
            return response.json({
                message: 'Item not found.'
            })
        }


    }
}

module.exports = SavedController
