'use strict'

const BodyMeasurement = use('App/Models/BodyMeasurement')
const User = use('App/Models/User')

class BodyMeasurementController {
    
    /**
     * Adds new user body measurements
     */
    async store({request, response, params: {user_id}}) {
        
        const user = await User.find(user_id);

        if (user) {
            
            const measurements = await BodyMeasurement.query().where({
                'user_id' : user_id
            }).fetch();

            if (measurements.rows.length == 0){
                const data = request.post()

                const measurements = new BodyMeasurement();

                measurements.user_id = user_id 
                measurements.chest = data.chest
                measurements.waist = data.waist 
                measurements.hips = data.hips
                measurements.foot_size = data.foot_size
                
                await measurements.save() 

                response.json({
                    message: "Successfully inserted new user body measurements.",
                    data: measurements
                })
            }
            
            else {
                response.status(400).json({
                    message : "User already has body measurements."
                })
            }
        }

        else {
            response.status(404).json({
                message : "User not found"
            })
        }
    }

    /**
     * Shows user body measurements
     */
    async showByUser({request, response, params: {user_id}}) {
        const user = await User.find(user_id);

        if (user) {
            const bodyMeasurement = await BodyMeasurement.query().where({
                'user_id': user_id
              }).fetch()
    
            return response.json({
                data : bodyMeasurement
            })
        }

        else {
            response.status(404).json({
                message : "User not found"
            })
        }
    }

    /**
     * Updates user body measurements
     */
    async updateByUser({request, response, params: {user_id}}) {

        const user = await User.find(user_id);

        if (user) {
            
            const measurements = await BodyMeasurement.query().where({
                'user_id' : user_id
            }).fetch();

            if (measurements.rows.length == 0){

                response.status(404).json({
                    message : "Body measurements not found."
                })
            }

            else {
                const data = request.post()

                await BodyMeasurement.query().where({
                    'user_id' : user_id
                }).update({ 
                    chest: data.chest, 
                    waist: data.waist,
                    hips : data.hips,
                    foot_size : data.foot_size
                })

                response.json({
                    message: "Successfully updated body measurements."
                })
            }
        }

        else {
            response.status(404).json({
                message : "User not found"
            })
        }
    }

    /**
     * Deletes user body measurements
     */
    async deleteMeasurment({request, response, params: {user_id}}) {
        const user = await User.find(user_id);

        if (user) {
            const measurements = await BodyMeasurement.query().where({
                'user_id': user_id
            }).fetch()
            
            if(measurements.rows.length == 1) {
    
                await measurements.rows[0].delete()
    
                return response.json({
                    message: "Successufully removed body measurements."
                })
            }
    
            else {
                return response.status(404).json({
                    message: "Body measurements not found"
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

module.exports = BodyMeasurementController
