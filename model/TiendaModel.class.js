/* Importación de la clase Conexion desde el archivo Conexion.class.js. */
const Conexion = require("./Conexion.class");

class TiendaModel {
   /**
    * Obtiene todas las tiendas de la base de datos.
    * @returns Los datos de la tabla tiendas y categoria
    */
    static async getTiendas() {
        try {
            const sql = "select t.id as id, t.nombre as nombre, t.descripcion as descripcion, c.id as id_categoria, c.descripcion as categoria, t.coordenada as coordenada from tiendas as t join categoria as c on t.id_categoria=c.id";
            const conexion = await Conexion.getConexion();
            const data = await conexion.query(sql);
            return data;
        } catch (error) {
            console.log(error)
            return null
        }
    }

   /**
    * Devuelve la lista de tiendas que pertenecen a una categoría.
    * @param id_categoria - El id de la categoría que desea buscar.
    * @returns Los datos de las tiendas que pertenecen a la categoría que se pasa como parámetro.
    */
    static async getTiendasCategoria(id_categoria) {
        try {
            const sql = "select t.id as id, t.nombre as nombre, t.descripcion as descripcion, t.coordenada as coordenada, c.id as id_categoria, c.descripcion as categoria from tiendas as t join categoria as c on t.id_categoria=c.id where c.id=?"
            const conexion = await Conexion.getConexion();
            const data = await conexion.query(sql, [id_categoria]);
            return data;
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

/* Exportando la clase TiendaModel para que pueda ser utilizada en otros archivos. */
module.exports = TiendaModel;