'use strict'

const Outfit = use('App/Models/Outfit')
const OutfitItem = use('App/Models/OutfitItem')

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

        await outfit.save()
                    .then(async data => {

                        /* Get last inserted outfit */
                        outfit = await Outfit.query()
                             .where('user_id', user_id)
                             .max('outfit_id')

                        /* Last inserted outfit id */
                        var outfit_id = outfit[0]['max(`outfit_id`)'] 

                        /* Parse string to list */
                        var items = JSON.parse(request.post().items)

                        /* Add outfit items */
                        items.forEach(async (item_id) => {
                            var outfititem = new OutfitItem() 
                            outfititem['outfit_id'] = outfit_id
                            outfititem['item_id'] = item_id

                            await outfititem.save()
                        })

                        return response.json({
                            message: 'Outfit successfully saved.'
                        })
                    })
                    .catch(err => {

                        return response.json({
                            message: 'Outfit could not be saved.',
                            err: err
                        })
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
