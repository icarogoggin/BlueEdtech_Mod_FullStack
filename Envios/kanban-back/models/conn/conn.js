const mongoose = require('mongoose')

function Conn(url, porta, banco) {
    mongoose
        .connect(
            `mongodb+srv://dbAdmin:D0187R3IkhRsObyk@cluster0.l1fay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => {
            console.log('MongoDB connected')
        })
        .catch((err) => {
            console.error(err)
        })
}

module.exports = Conn
