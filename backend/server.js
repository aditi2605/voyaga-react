const express = require('express');
const cors = require("cors");
const nodemailer = require('nodemailer');
const db = require('./config/db');
const PORT = 8080;
const app = express();
app.use(cors());
app.use(express.json());



//  website visit alert




//get all data
  app.get('/get-all-Citys', (req, res) => {
    const query = "SELECT * FROM voyage.thingstodo_attractions";
    db.query(query, (err, result)=> {
      if(err){
        console.error('Database query error: ', err);
        res.status(500).json({ error: 'Database error' });
        return;
      }else {
        return res.status(200).json(result);
      }
    })
  })

  // Define the route to handle client requests
  app.get('/check-input', (req, res) => {
    const userInput = req.query.input;//get input from query parameter
    //const query = `SELECT * FROM voyage.thingstodo_attractions WHERE City = ?`;
    const query = `SELECT *, COALESCE(NULLIF(img, ''), 'commingsoon.jpeg') AS img FROM voyage.thingstodo_attractions WHERE City = ?;`;
    db.query(query, [userInput], (err, results) => {
      if(err){
        console.error('Database query err: ', err)
        res.status(500).json({error: 'Database error'});
        return;
      }

      if(results.length === 0){
        res.json({ exists: false}); 
      } else if (query.img == "") {
        results.img = "commingsoon.jpeg";
        res.json({exists: true, results})
      }
      else {
        res.json({exists: true, results});
      }

    })
   
    }
     );
  

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})