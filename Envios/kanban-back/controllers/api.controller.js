const User = require('../models/user')

async function geraApiKey(user, pass) {
    await User.findOne({ user: user })
        .then((userdb) => {
            if (userdb.pass === pass) {
                console.log('ok')
            }
        })
        .catch((err) => {
            console.error(err)
        })
}

async function validaAuthAPI(key) {
    const chave = await User.findOne({})
    if (key === chave.key) {
        return true
    } else {
        return false
    }
}

module.exports = validaAuthAPI
