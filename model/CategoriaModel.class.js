/* Importando el archivo Conexion.class.js. */
const Conexion = require("./Conexion.class");

class CategoriaModel {

    /**
     * Devuelve los datos de la base de datos.
     * @returns Los datos de la tabla categoria
     */
    static async getCategoria() {
        try {
            const sql = "select * from categoria";
            const conexion = await Conexion.getConexion();
            const data = await conexion.query(sql);
            return data;
        } catch (error) {
            console.log(error)
            return null
        }
    }
}


/* Exportando la clase CategoriaModel para que pueda ser utilizada en otros archivos. */
module.exports = CategoriaModel;
