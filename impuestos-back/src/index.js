const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const cron = require('node-cron');
const impuestoController = require('./app/controller/impuestoController');
const impuesto = require('./app/model/impuesto');

require('dotenv').config({ path: 'src/variables.env' }); 

// initializations
const app = express();

//settings
app.set('port', process.env.HOST || 4000);

// Midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

// Routes
app.use('/api', require('./app/routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

cron.schedule('00 28 20 9 6 *', () => {
    impuestoController.addImpuestosVehiculos()
    .then(
        response => {
            console.log('Impuestos de Vehiculos');
        }
    ); 

    impuestoController.addImpuestosPrediales()
    .then(
        response => {
            console.log('Impuestos de Prediales');
        }
    );

    impuestoController.addImpuestosIndustriales()
    .then(
        response => {
            console.log('Impuestos de Industriales');
        }
    );

});