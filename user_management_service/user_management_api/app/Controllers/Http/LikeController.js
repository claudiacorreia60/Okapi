'use strict'

const Like = use('App/Models/Like')

class LikeController {
    /**
     * Shows user likes
     */
    async showByUser({request, response, params: {id}}) {

    }

    /**
     * Add liked item
     */
    async likeItem({request, response, params:{user_id, item_id}}) {

    }

    /**
     * Remove liked item
     */
    async dislikeItem({request, response, params:{user_id, item_id}}){

    }
}

module.exports = LikeController
