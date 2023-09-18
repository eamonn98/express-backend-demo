import chats from '../shared/chats.js';

export default class ChatController {

  /** 
  * Create a new chat object and add it to the chats array
  *
  * @param user
  * @param message
  */
  sendChat = (_user, _message) => {
    const chat = {
      id: chats.length + 1,
      user: _user,
      message: _message,
      timestamp: new Date()
    };

    chats.push(chat);
  }

  /** 
  * Get the latest data from the chats array
  *
  * @return all chats
  */
  refreshChats = () => {
    return chats;
  }
}