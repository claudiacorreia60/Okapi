const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const Exception = use('Exception')

  /* Handles error thrown when user token is not present or valid */
  Exception.handle('JsonWebTokenError', async (error, { response}) => {
    return response.status(401).json({
        message: 'Unauthorized.'    
    })
  })

  /* Handles error thrown when user token expires */
  Exception.handle('TokenExpiredError', async (error, { response}) => {
    return response.status(401).json({
        message: 'Token Expired.'    
    })
  })

  /* Handles error thrown when user tries to access other user private information */
  Exception.handle('PermissionError', async (error, { response}) => {
    return response.status(401).json({
        message: 'Unauthorized.'    
    })
  })
})