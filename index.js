import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import Router from "./routes/index.js";

// Allow browser requests from a specific origin
const corsOptions = {
  origin: 'http://10.102.247.142:3000',
  optionsSuccessStatus: 200
};

const app = express();

// Add cross-origin resource sharing options
app.use(cors(corsOptions));

// Add express with JSON body parsing by default
app.use(express.json());

// Add morgan for HTTP console logging
app.use(morgan('tiny'));

// Tell Express to use the Router we defined
app.use(Router);

// Start express on port 3000
app.listen(3000, () => {
  console.log('Express server initialized');
});
