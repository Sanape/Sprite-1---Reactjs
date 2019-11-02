const moongose = require('mongoose');


mongoose.connect('mongodb+srv://JUAN:inetcom5@mlab-9hxhz.mongodb.net/test?retryWrites=true&w=majority',
    {
    useNewUrlParser: true,
    useUnifiedTopology: true}).catch((err)=>{console.log('Erroor',err.message)})

    const db = mongoose.connection;
    module.exports = db

