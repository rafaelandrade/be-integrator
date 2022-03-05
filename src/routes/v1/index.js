module.exports = app => {
  app.use('/v1/health', require('./health'))
  app.use('/v1/ordered', require('./orderer'))
}
