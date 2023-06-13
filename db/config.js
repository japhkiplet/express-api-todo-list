import dotenv from 'dotenv'
import assert from 'assert'
// import { Server } from 'http';

dotenv.config();

const{host,hostUrl,port,sqlServer,sqlUser,sqlPort,sqlPwd,sqlDb} = process.env

const sqlEncrypt = process.env.sqlEncrypted==='true';

assert(port,'port is required');
assert(host,'host is required');


const config ={
    port: port,
    host: host,
    url: hostUrl,
    sql:{
        server: sqlServer,
        database: sqlDb,
        user: sqlUser,
        password: sqlPwd,
        options: {
            encryt: sqlEncrypt,
            enableArithAbort: true,
            trustServerCertificate:true
        }
    }
}
export default config;