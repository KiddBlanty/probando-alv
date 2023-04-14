/* Importación del módulopromise-mysql. */
const MYSQL = require("promise-mysql")

/* La configuración de la base de datos. */
/* La configuración de la base de datos. */
const mysqlConfig = {
    host: "us-east.connect.psdb.cloud",
    user: "7wkg929fm9hs4m1f2ta5",
    password: "pscale_pw_vggQZ5aHohgIbz8nvKX5Oxjx9OUMrr7r4Feg2qC24UG",
    database: "lojasparaguai",
    ssl:{
        rejectUnauthorized: true
    }
}


class Conexion{
    /**
     * Devuelve una promesa que se resuelve en una conexión a la base de datos.
     * @returns Una promesa
     */
    static async getConexion(){
        return await MYSQL.createConnection(mysqlConfig)
    }
}

/* Exportando la clase Conexión para que pueda ser importada en otros archivos. */
module.exports = Conexion