const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bodyParser = require('body-parser')
let pg = require('pg');
require('dotenv').config();
const fs = require('fs');

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
});

let pool = new pg.Pool({
	user: 'postgres',
	database: 'postgres',
	password: 'Samuel2007!',
	host: 'countries.cmmsynruais5.us-east-1.rds.amazonaws.com',
	port: 5432,
	max: 10
});

const app = express();

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// GET: Fetch all shoe from the database
app.get('/', (req, res) => {
    console.log('test1');
    db.select('*')
        .from('shoes')
        .then((data) => {
            //console.log(data);
            //res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch shoe by shoeId from the database
app.get('/get/:id', (req, res) => {
    const id = req.params.id;
    console.log('test2');
    db.select('*')
        .from('shoes')
        .where('id', '=', id)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});


app.post('/add-shoe', function (req, res) {
    console.log('test3');
    res.send('Ok')
    //pool.query("INSERT INTO shoes(date, time, shoe, description, sku, id)VALUES('2021-1-1,  '10:00:00', 'Shoe', 'Description', 'SKU', '777')");
    const { Date, Time, Shoe, Description, SKU, ID } = req.body;
    db('shoes')
        .insert({
            /*date: '2021-1-1',
            time: '10:00:00',
            shoe: 'Shoe',
            description: 'Description',
            sku: 'SKU',
            id: 777,*/
            date: Date,
            time: Time,
            shoe: Shoe,
            description: Description,
            sku: SKU,
            id: ID
        })
        .then(() => {
            console.log('Shoe Added');
            //return res.json({ msg: 'Shoe Added' });
            return res.redirect('http://localhost:3000');
        })
        .catch((err) => {
            console.log(err);
        });
    console.log('terst');
});

// POST: Create shoes and add them to the database


// DELETE: Delete shoe by shoeId from the database
app.delete('/delete-shoe', (req, res) => {
    const id = req.body;
    const idToDelete = Number(id.id);
    console.log(idToDelete);
    db('shoes')
        .where('shoe_id', '=', idToDelete)
        .del()
        .then(() => {
            console.log('Shoe Deleted');
            return res.json({ msg: 'Shoe Deleted' });
        })
        .catch((err) => {
            console.log(err);
        });
});

// PUT: Update shoe by shoeId from the database
/*app.put('/update-shoe', (req, res) => {
    db('shoes')
        .where('id', '=', 1)
        .update({ shoe: '$1' })
        .then(() => {
            console.log('Shoe Updated');
            return res.json({ msg: 'Shoe Updated' });
        })
        .catch((err) => {
            console.log(err);
        });
});*/

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));