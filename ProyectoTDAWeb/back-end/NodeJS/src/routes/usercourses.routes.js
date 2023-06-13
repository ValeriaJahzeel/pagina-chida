import {Router} from 'express';
import {getUsersCourses, getCourseByUser, getCourseUsers, linkCourseUser} from '../controllers/usercourses.controllers.js';

const router = Router();

router.get('/courseUser', getUsersCourses);

router.get('/courseUser/:user', getCourseByUser);

router.get('/usersCourse/:course', getCourseUsers);

router.post('/courseUser', linkCourseUser);

export default router