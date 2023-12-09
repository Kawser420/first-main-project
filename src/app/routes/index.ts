import { Router } from 'express';
import { UserRouter } from '../modules/user/user.route';
import { StudentRoutes } from '../modules/student/student.route';

const router = Router();

const moduleRouters = [
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
];

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;