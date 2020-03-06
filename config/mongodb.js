
// console.log('process.env.MONGO_DB_URL', process.env.MONGO_DB_URL);
module.exports = {
    connectString : process.env.MONGO_DB_URL || 'mongodb://mongo:27017/hapi-app'
}