const TodoModel = require("../model/todoSchema");

const TodoController = {
  getTodo: (request, response) => {
    TodoModel.find({}, (error, data) => {
      if (error) {
        response.json({
          message: `INTERNAL SERVER ERROR: ${error}`,
          status: false,
        });
      } else {
        response.json({
          message: `successfully get`,
          status: true,
          data: data,
        });
      }
    });
  },
  createTodo: (request, response) => {
    const body = request.body;
    console.log(body, "body");

    if (!body.todo) {
      response.json({
        message: "REQUIRED FIELD ARE MISSING",
        status: false,
      });
      return;
    }
    const objToSend = {
      todo: body.todo,
    };

    TodoModel.create(objToSend, (error, data) => {
      if (error) {
        response.json({
          message: `INTERNAL SERVER ERROR: ${error}`,
          status: false,
        });
      } else {
        response.json({
          message: `successfully create`,
          status: true,
        });
      }
    });
  },
};

module.exports = TodoController;
