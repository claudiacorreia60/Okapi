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
            
            const measurements = await user.body_measurements().fetch();

            if (measurements == null){
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
            
            const measurements = await user.body_measurements().fetch();

            if (measurements == null){

                response.status(404).json({
                    message : "Body measurements not found."
                })
            }

            else {
                const data = request.post()

                measurements.merge(data)

                await measurements.save()

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
    async deleteMeasurement({request, response, params: {user_id}}) {
        const user = await User.find(user_id);

        if (user) {
            const measurements = await user.body_measurements().fetch()
            
            if(measurements) {
    
                await measurements.delete()
    
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
