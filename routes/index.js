import express from "express";
import ChatController from '../controllers/ChatController.js';
import AuthController from '../controllers/AuthController.js';


// Get an instance of the global express router
const router = express.Router();

/** 
* This is an API endpoint to return the data in the current chats object.
* @returns JSON data in the format: { "chats": [] }
*/
router.get("/refreshChats", (req, res) => {
  const controller = new ChatController();
  const response = controller.refreshChats();
  return res.send({chats: response});
});

/** 
* This is an API endpoint to write a chat to the global chats array
*/ 
router.post("/sendChat", (req, res) => {
  const controller = new ChatController();
  controller.sendChat(req.body['user'], req.body['message']);
  return res.sendStatus(200);
});


/** 
* This is an API endpoint to write a chat to the global chats array
*/ 
router.post("/login", (req, res) => {
  const controller = new AuthController();
  const loginResult = controller.authenticate(req.body['user'], req.body['password']);

  if(loginResult.loginValid) {
    return res.send(loginResult);
  } else {
    res.sendStatus(401);
  }
});

router.post("/sessionValid", (req, res) => {
  const controller = new AuthController();
  const loginResult = controller.authorize(req.body['token'], req.body['user']);

  if(loginResult) {
    return res.send({authorized: loginResult});
  } else {
    res.sendStatus(401);
  }
});

export default router;