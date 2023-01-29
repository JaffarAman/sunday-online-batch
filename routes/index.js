var express = require("express");
const TodoController = require("../controllers/todo");
var router = express.Router();

router.get("/api/test", (req, res) => {
  res.send("test");
});

router.get("/api/fakeproduct", (request, response) => {
  response.json({
    message: "successfully get",
    status: true,
    products: [
      {
        name: "Keyboard",
      },
      {
        name: "CPU",
      },
      {
        name: "MOUSE",
      },
    ],
  });
});

router.post("/api/todo", TodoController.createTodo);

router.get("/api/todo", TodoController.getTodo);

router.delete("/api/todo/:id", (request, response) => {
  const { id } = request.params;
  TodoModel.findByIdAndDelete(id, (error, data) => {
    if (error) {
      response.json({
        message: `INTERNAL SERVER ERROR: ${error}`,
        status: false,
      });
    } else {
      response.json({
        message: `successfully delete`,
        status: true,
      });
    }
  });
});

router.put("/api/todo", (request, response) => {
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

  TodoModel.findByIdAndUpdate(body.id, objToSend, (error, data) => {
    if (error) {
      response.json({
        message: `INTERNAL SERVER ERROR: ${error}`,
        status: false,
      });
    } else {
      response.json({
        message: `successfully update`,
        status: true,
      });
    }
  });
});



module.exports = router;
