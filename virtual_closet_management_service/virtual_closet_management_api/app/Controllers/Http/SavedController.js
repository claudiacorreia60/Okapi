'use strict'

const Saved = use('App/Models/Saved')

class SavedController {
    async indexByUser ({request, response, params: {user_id}}) {
        const saved = await Saved.query()
                                   .where('user_id', user_id)
                                   .fetch()

        return response.json({
            data: saved
        })
    }

    async addToSaved({request, response}) {
        const user_id = request.get().user 
        const item_id = request.get().item 

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

    async removeFromSaved({request, response}) {
        const user_id = request.get().user 
        const item_id = request.get().item 

        await Saved.query()
                    .where('user_id', user_id)
                    .where('item_id', item_id)
                    .delete()

        return response.json({
            message: 'Item successfully removed from saved.'
        })
    }
}

module.exports = SavedController
