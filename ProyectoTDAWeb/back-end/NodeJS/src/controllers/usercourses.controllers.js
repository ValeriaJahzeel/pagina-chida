import {pool} from '../db.js';

export const getUsersCourses = async (req, res)=> {
    try{
        const [rows] = await pool.query('SELECT * FROM cursousuario');
        res.json(rows);
    } catch {
        return res.status(500).json({
            message: 'Algo falló'
        });
    }
};

export const getCourseByUser = async (req, res)=> {
    try{
        //throw new Error('Error inesperado');
        console.log(req.params.user);
        const [rows] = await pool.query('SELECT * FROM cursousuario WHERE usuario=?', [req.params.user])

        if (rows.length === 0){
            return res.json('Usuario no encontrado');
        }

        res.json(rows);
    } catch {
        return res.status(500).json({
            message: 'Algo falló'
        });
    }
};

export const getCourseUsers = async (req, res)=> {
    try{
        //throw new Error('Error inesperado');
        console.log(req.params.course);
        const [rows] = await pool.query('SELECT * FROM cursousuario WHERE curso=?', [req.params.course])

        if (rows.length === 0){
            return res.json('El curso no tiene usuarios');
        }

        res.json(rows[0]);
    } catch {
        return res.status(500).json({
            message: 'Algo falló'
        });
    }
};

// Agregar un nuevo ingrediente
export const linkCourseUser = async (req, res)=> {
    console.log(req.body);
    const {curso, usuario} = req.body;

    try {
        const [rows] = await pool.query('INSERT INTO cursousuario(curso, usuario) VALUES (?, ?)', [curso, usuario]);

        res.send({
            id: rows.insertId,
            curso,
            usuario
        });
    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};