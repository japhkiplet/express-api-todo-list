import {  getTodo, getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todoContoller.js';
import { login, register, loginRequired } from '../controllers/usecontroller.js'

const routes = (app) => {
    //todo routes
    app.route('/todos')
        .get(loginRequired, getTodos)
        .post(loginRequired, createTodo);

    app.route('/todos/:id')
        .put(loginRequired, updateTodo)
        .get(loginRequired, getTodo)
        .delete(loginRequired, deleteTodo);

    // auth routes
    app.route('/auth/register')
        .post(register);

    app.route('/auth/login')
        .post(login);


};
export default routes;