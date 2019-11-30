'use strict'

const Like = use('App/Models/Like')
const User = use('App/Models/User')

class LikeController {
    
    /**
     * Shows user likes
     */
    async showByUser({request, response, params: {user_id}}) {
        
        const user = await User.find(user_id);
        
        if (user) {
            const likes = await Like.query().where({
                'user_id': user_id
              }).fetch()
    
            return response.json({
                data : likes
            })
        }

        else {
            return response.status(404).json({
                message : "User not found"
            })
        }
    }

    /**
     * Add liked item
     */
    async likeItem({request, response, params:{user_id, item_id}}) {
        
        const user = await User.find(user_id);

        if (user) {
            
            const like = await Like.query().where({
                'user_id': user_id,
                'item_id': item_id
            }).fetch()

            if (like.rows.length == 1) {
                return response.status(400).json({
                    message : "Duplicated like."
                })
            }

            else {

                const new_like = new Like();

                new_like.user_id = user_id;
                new_like.item_id = item_id;

                await new_like.save();
            
                response.json({
                    message: "Successfully inserted new like.",
                    data: new_like
                })
            }
        }

        else {
            return response.status(404).json({
                message : "User not found"
            })
        }   
    }

    /**
     * Remove liked item
     */
    async dislikeItem({request, response, params:{user_id, item_id}}){

        const user = await User.find(user_id);

        if (user) {
            const dislikeItem = await Like.query().where({
                'user_id': user_id,
                'item_id':  item_id
            }).fetch()
            
            if(dislikeItem.rows.length == 1) {
    
                await dislikeItem.rows[0].delete()
    
                return response.json({
                    message: "Successufully disliked item."
                })
            }
    
            else {
                return response.status(404).json({
                    message: "Like not found"
                })
            }
        
        }

        else {
            return response.status(404).json({
                message : "User not found"
            })
        }
    }
}

module.exports = LikeController
