/* Importando el archivo Conexion.class. */
const Conexion = require("./Conexion.class")

class UsuarioModel {
    /**
     * Toma un objeto con dos propiedades, email y clave, y devuelve los datos de la base de datos.
     * @returns Los datos se devuelven como una matriz de objetos.
     */
    static async getUsuario({ email, clave }) {
        try {
            const sql = "select * from usuario where email=? and clave=?"
            const conexion = await Conexion.getConexion()
            const data = await conexion.query(sql, [email, clave])
            return data
        } catch (error) {
            console.log(error)
            return null
        }
    }

    /**
     * Toma un objeto con tres propiedades y devuelve una promesa que se resuelve en el resultado de
     * una consulta.
     * @returns Los datos están siendo devueltos.
     */
    static async setUsuario({ nombre, email, clave }) {
        try {
            const sql =
                "insert into usuario(nombre, email, clave)values(?, ?, ?)"
            const conexion = await Conexion.getConexion()
            const data = await conexion.query(sql, [nombre, email, clave])
            return data
        } catch (error) {
            console.log(error)
            return null
        }
    }

  
    /* Una función que toma un correo electrónico y devuelve los datos del usuario. */
    static async getUsuarioEmail({email}) {
      try {
          const sql =
              "select * from usuario where email=?"
          const conexion = await Conexion.getConexion()
          const data = await conexion.query(sql, [email])
          return data
      } catch (error) {
          console.log(error)
          return null
      }
  }
}

/* Exportando la clase UsuarioModel. */
module.exports = UsuarioModel