const server = require('./app');
const {conn} = require('./db');



server.listen(3001, () => {
    console.log('server listening on port 3001');
    conn.sync().then(() => {
        console.log('conectado a la DB')
    })
})