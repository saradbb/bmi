
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req,res) =>
res.sendFile(__dirname+'/index.html'))

app.post('/',(req,res) =>{

const weight = req.body.weight;
const height = req.body.height;
const bmi = weight/(height * height);
const returnMessage = "Your BMI is " + bmi;
res.send(returnMessage);

}



)



app.listen(3000, () => console.log("Server started!"));
