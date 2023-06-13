import {Router} from 'express';
import {getCursos, createCurso, updateCurso, deleteCurso, getCurso} from '../controllers/cursos.controllers.js';

const router = Router();

router.get('/cursos', getCursos);

router.get('/cursos/:id', getCurso);

router.post('/cursos', createCurso);

router.patch('/cursos/:nombre', updateCurso);

router.delete('/cursos/:nombre', deleteCurso);


export default router