'use strict'

const Item = use('App/Models/Item')

class ItemController {
    async index({request, response}) {
        const params = request.get()

        const page = params.page 
        const color = params.color ? params.color : '%%'
        const type = params.type ? params.type : '%%'

        const items = await Item.query()
                                .with('color')
                                .with('type')
                                .with('brand')
                                .with('materials')
                                .where('catalog',1)
                                .whereHas('color', (builder) => {
                                    builder.where('name', 'like', color)
                                }, '>', 0)
                                .whereHas('type', (builder) => {
                                    builder.where('name', 'like', type)
                                }, '>', 0)
                                .forPage(page)
                                .fetch()
        
        return response.json({
            data: items
        })
    }
}

module.exports = ItemController
