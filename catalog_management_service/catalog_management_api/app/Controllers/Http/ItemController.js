'use strict'

const Item = use('App/Models/Item')

class ItemController {
    async indexMan({request, response}) {
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
                                .where('gender', 'M')
                                .forPage(page)
                                .fetch()
        
        return response.json({
            data: items
        })
    }

    async indexWoman({request, response}) {
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
                                .where('gender', 'W')
                                .forPage(page)
                                .fetch()
        
        return response.json({
            data: items
        })
    }

    async show({request, response, params: {id}}) {
        const item = await Item.query()
                                .with('color')
                                .with('type')
                                .with('brand')
                                .with('materials')
                                .where('item_id', id)
                                .where('catalog',1)
                                .fetch()
        if (item ) {
            return response.json(item.rows[0])
        } else {
            return response.status(404).json({
                message: 'Item not found!'
            })
        }
    }
}

module.exports = ItemController
