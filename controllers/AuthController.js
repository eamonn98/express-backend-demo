import userAccounts from '../shared/userAccounts.js';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'thisismyjwtprivatekeykeepmesecretorelse';
const ISSUER = 'http://localhost:3000';
const SUBJECT = 'Testing';

const generateJwt = (_user) => {
    const jwtOptions = {
        aud: _user,
        iss: ISSUER, 
        sub: SUBJECT, 
    };

    return jwt.sign(jwtOptions,
        SECRET_KEY, 
        {expiresIn: '1h'}
    );
  }

export default class AuthController {

  /** 
  * Create a new chat object and add it to the chats array
  *
  * @param user
  * @param message
  */
  authenticate = (_user, _password) => {
    const matchingAccounts = userAccounts.filter(n => n.username === _user && n.password === _password);

    if(matchingAccounts.length > 0) {
      return {
        jwt: generateJwt(_user),
        loginValid: true
      }
    }

    return {
      loginValid: false
    };
  }

  authorize = (token, _user) => {
    const validationOptions = {
        audience: _user,
        issuer: ISSUER, 
        subject: SUBJECT
    };

    if(token != null) {
        try {
            // If JWT passes verification, we can just return. Failed verification will pass to the Catch block
            jwt.verify(token, SECRET_KEY, validationOptions);
            return true;
        }
        catch(err) {
            return false;
        }
    }

    return false;
  }
}