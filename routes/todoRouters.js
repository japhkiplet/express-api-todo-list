import {
  getTodos,
  createTodo,
  getTodo,
  updateTodos,
  deleteTodos,
} from "../controllers/todoContoller.js";

const todoRoutes = (app) => {
  app.route("/todos").get(getTodos).post(createTodo);
  app.route("/todos/:id").get(getTodo).put(updateTodos).delete(deleteTodos);
};
export default todoRoutes;
