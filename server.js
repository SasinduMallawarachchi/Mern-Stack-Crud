const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();



//imports routes
const postRoutes = require('./BackEnd/routs/RouteStock');

//App middleware
app.use(bodyParser.json());
app.use(cors());

//image upload
app.use(express.json({limit : '50mb',extended : true}))
app.use(express.urlencoded({limit : '50mb',extended : true}))

//route middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://Sasindu77:Sasindu77@cluster01.f55w3af.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01';
//const DB_URL = 'mongodb+srv://Sasindu77:sasindu77@mernapp.x4jum.mongodb.net/mernApp?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useunifiedTopology:true
})

.then(() =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB Connection fail', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});