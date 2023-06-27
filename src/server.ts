//Imports 
import app from './app'; 
import * as dotenv from 'dotenv'; 

//Load environment variables from .env file 
dotenv.config(); 
const port = process.env.PORT;

//Run server 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});