const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const Exception = use('Exception')

  Exception.handle('JsonWebTokenError', async (error, { response}) => {
    return response.status(401).json({
        message: 'Unauthorized.'    
    })
  })

  Exception.handle('TokenExpiredError', async (error, { response}) => {
    return response.status(401).json({
        message: 'Token Expired.'    
    })
  })
})