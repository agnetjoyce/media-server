const JSONServer = require('json-server')

const MpServer = JSONServer.create()

const router = JSONServer.router('db.json')

const middileware = JSONServer.defaults()

const PORT = 3000 || process.env.PORT

MpServer.use(middileware)
MpServer.use(router)

MpServer.listen(PORT,()=>{
    console.log(`Media-Player Server Started Running At PORT:${PORT} & Waiting For Client Request`);
    
})