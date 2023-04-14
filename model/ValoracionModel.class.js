/* Importando el archivo Conexion.class. */
const Conexion = require("./Conexion.class")

class ValoracionModel{
    /**
     * Obtiene la media de las valoraciones de una tienda.
     * </código>
     * @param id - identificación de la tienda
     * @returns La media de las valoraciones de la tienda.
     * </código>
     */
    /**
     * Devuelve el promedio de los valores de la columna "valoracion" de la tabla "calificacion" donde
     * el valor de la columna "id_tienda" es igual al valor de la variable "id".
     * @param id - identificación de la tienda
     * @returns La media de las valoraciones de la tienda.
     */
    static async getValoracion(id){
        try {
            const conexion = await Conexion.getConexion()
            const query = "select sum(valoracion)/count(valoracion) as calificacion from calificacion where id_tienda=?"
            const data = await conexion.query(query, [id])
            return data
        } catch (error) {
            console.log(error)
            return null
        }
    }

   /**
    * Toma un objeto de valoración, obtiene una conexión a la base de datos e inserta el objeto de
    * valoración en la base de datos.
    * @param valoracion - { es el objeto que tiene los datos que se insertaran en la base de datos
    * @returns Los datos están siendo devueltos.
    */
    static async setValoracion(valoracion){
        try {
            const conexion = await Conexion.getConexion()
            const query = "insert into calificacion (valoracion, id_usuario, id_tienda)values(?, ?, ?)"
            const data = await conexion.query(query, [valoracion.calificacion, valoracion.id_usuario, valoracion.id_tienda])
            return data
        } catch (error) {
            console.log(error)
            return null
        }
    }

    /**
     * Actualiza el valor de una columna en una tabla.
     * </código>
     * @param valoracion - { es el objeto que tiene los datos que se insertaran en la base de datos
     * @returns Los datos que se devuelven son los datos que se actualizan en la base de datos.
     */
    static async updateValoracion(valoracion){
        try {
            const conexion = await Conexion.getConexion()
            const query = "update calificacion set valoracion=? where id_tienda=? and id_usuario=?"
            const data = await conexion.query(query, [valoracion.calificacion, valoracion.id_tienda, valoracion.id_usuario])
            return data
        } catch (error) {
            console.log(error)
            return null
        }
    }

   
    /**
     * Obtiene una conexión a la base de datos, luego ejecuta una consulta para ver si hay una fila en
     * la base de datos con la identificación de usuario y la identificación de la tienda dadas.
     * @returns devolver datos
     */
    static async existeValoracionPorUsuario({id_usuario, id_tienda}){
        try {
            const conexion = await Conexion.getConexion()
            const query = "select * from calificacion where id_tienda=? and id_usuario=?"
            const data = await conexion.query(query, [id_tienda, id_usuario])
            return data
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

/* Exporting the class ValoracionModel. */
module.exports = ValoracionModel