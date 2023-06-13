import {pool} from '../db.js';

// Recuperar ingredientes
export const getCursos = async (req, res)=> {
    try{
        const [rows] = await pool.query('SELECT * FROM curso');
        console.log(rows);
        res.json(rows);
    } catch {
        return res.status(500).json({
            message: 'Algo falló'
        });
    }
};

export const getCurso = async (req, res)=> {
    try{
        //throw new Error('Error inesperado');
        console.log(req.params.id);
        const [rows] = await pool.query('SELECT * FROM curso WHERE idCurso=?', [req.params.id])
    
        if (rows.length === 0){
            return res.status(404).json({
                message: "Curso no encontrado"
            });
        }

        res.json(rows[0]);
    } catch {
        console.log(error);
    }
};

// Agregar un nuevo ingrediente
export const createCurso = async (req, res)=> {
    console.log(req.body);
    const {nombre, autor, precio, numAlumnos} = req.body;

    try {
        const [rows] = await pool.query('INSERT INTO curso(nombreCurso, autor, precio, numAlumnos) VALUES (?, ?, ?, ?)', [nombre, autor, precio, numAlumnos]);

        res.send({
            id: rows.insertId,
            nombre,
            autor,
            precio,
            numAlumnos
        });
    } catch {
        return res.status(500).json({
            message: 'Algo falló'
        });
    }
};

// Eliminar un ingrediente
export const deleteCurso = async (req, res)=> {
    try {

        const [cursos] = await pool.query('SELECT * FROM curso WHERE nombreCurso=?', [req.params.nombre])
        console.log(cursos[0].idcurso);
        const id = cursos[0].idcurso;

        const [result]= await pool.query('DELETE FROM cursousuario WHERE curso=?', [cursos[0].idcurso]);
        
    
        if (result.affectedRows === 0){
            return res.status(404).json({
                message: "Curso no encontrado"
            });
        }
        
        res.sendStatus(204);
    } catch {
        return res.status(500).json({
            message: 'Algo falló'
        });
    }
};

export const updateCurso = async (req, res)=> {
    const {nombre} = req.params.nombre;
    console.log(req.params.nombre);
    const {precio} = req.body;
    
    try {
        const [result] = await pool.query('UPDATE curso SET precio=? WHERE nombreCurso=?', [precio, nombre]);
        console.log(result);
        
        if(result.affectedRows === 0){
            return res.status(404).json({
                message: "Curso no encontrado"
            });
        }

        const [rows_result] = await pool.query('SELECT * FROM curso WHERE nombreCurso=?', [req.params.nombre]);
        res.json(rows_result);
    } catch {
        return res.status(500).json({
            message: 'Algo falló'
        });
    }
};