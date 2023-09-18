import userAccounts from '../shared/userAccounts.js';

export default class AuthController {

  /** 
  * Create a new chat object and add it to the chats array
  *
  * @param user
  * @param message
  */
  authenticate = (_user, _password) => {
    const matchingAccounts = userAccounts.filter(n => n.username === _user && n.password === _password);

    if(matchingAccounts > 0) {
      return {
        jwt: generateJwt(_user),
        loginValid: true
      }
    }

    return {
      loginValid: false
    };
  }

  authorize = (token) => {
    if(token != null) {
      return true;
    }
  }

  generateJwt = (_user) => {
    return "ThisIsNotImplemented"; 
  }
}