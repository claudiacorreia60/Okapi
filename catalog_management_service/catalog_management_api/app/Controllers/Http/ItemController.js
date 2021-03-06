'use strict'

const Item = use('App/Models/Item')

class ItemController {
    async indexMan({request, response}) {
        const params = request.get()

        const page = params.page ? params.page : 1
        const perpage = params.perpage ? params.perpage : 20
        const sort = params.sort ? params.sort : 'asc'

        const items = await Item.query()
                                .with('color')
                                .with('type')
                                .with('brand')
                                .where('catalog',1)
                                .whereHas('color', (builder) => {
                                    params.color ? builder.where('name', 'in', params.color) : true
                                }, '>', 0)
                                .whereHas('type', (builder) => {
                                    params.type ? builder.where('name', 'in', params.type) : true
                                }, '>', 0)
                                .where('gender', 'M')
                                .forPage(page, perpage)
                                .fetch()
        
        return response.json( items )
    }

    async indexWoman({request, response}) {
        const params = request.get()

        const page = params.page ? params.page : 1
        const perpage = params.perpage ? params.perpage : 20
        const sort = params.sort ? params.sort : 'asc'

        const items = await Item.query()
                                .with('color')
                                .with('type')
                                .with('brand')
                                .where('catalog',1)
                                .whereHas('color', (builder) => {
                                    params.color ? builder.where('name', 'in', params.color) : true
                                }, '>', 0)
                                .whereHas('type', (builder) => {
                                    params.type ? builder.where('name', 'in', params.type) : true
                                }, '>', 0)
                                .where('gender', 'W')
                                .forPage(page, perpage)
                                .fetch()
        
        return response.json( items)
    }

    async show({request, response, params: {id}}) {
        const item = await Item.query()
                                .with('color')
                                .with('type')
                                .with('brand')
                                .where('item_id', id)
                                .where('catalog',1)
                                .fetch()
        if (item ) {
            return response.json(item.rows[0])
        } else {
            return response.status(404).json({
                message: 'Item not found!',
                id
            })
        }
    }
}

module.exports = ItemController
