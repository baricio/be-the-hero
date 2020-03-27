const crypto = require('crypto')
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async cretate (request, response) {
        const {name, email, whatsapp, city,uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id:id,
            name: name,
            email:email,
            whatsapp:whatsapp,
            city: city,
            uf:uf
        });

        return response.json({id});
    }
}