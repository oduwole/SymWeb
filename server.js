const express = require("express");
const path = require("path");
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');


dotenv.config({path:'.env'})
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/assets", express.static(path.resolve(__dirname, "assets")));
app.use("/wp-content", express.static(path.resolve(__dirname, "wp-content")));

app.get("/contactus.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "contactus.html"));
});

app.get("/about-the-company", (req, res) => {
    res.sendFile(path.resolve(__dirname, "about.html"));
});

app.get("/about-the-product", (req, res) => {
    res.sendFile(path.resolve(__dirname, "product.html"));
});

app.get("/about-the-founder", (req, res) => {
    res.sendFile(path.resolve(__dirname, "founder.html"));
});

app.get("/co-investment.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "co-investment.html"));
});

app.get("/project-partnership.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "project-partnership.html"));
});

app.get("/co-Ownership.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "co-Ownership.html"));
});

app.get("/Joint-Venture.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Joint-Venture.html"));
});

app.get("/avenuecourt.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "avenuecourt.html"));
});

app.get("/aw1court.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "aw1court.html"));
});

app.get("/folajomi.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "folajomi.html"));
});

app.get("/rogerscove.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "rogerscove.html"));
});

app.get("/festcourt.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "festcourt.html"));
});

app.get("/no4.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "no4.html"));
});

app.get("/alvarrow.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "alvarrow.html"));
});

app.get("/data/regddc.json", (req, res) => {
    res.sendFile(path.resolve(__dirname, "data/regddc.json"));
});

app.get("/data/regddc_db.json", (req, res) => {
    res.sendFile(path.resolve(__dirname, "data/regddc_db.json"));
});

app.get("/services.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "service.html"));
});

app.get("/tp.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "tp.html"));
});


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.post('/sendmail', async (req, res) =>{
    console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
          user: 'segxy2708@hotmail.com',
          pass: 'se0103?2015gun'
        }
      });

      var messageBody = '<p><b>Name: </b>' + req.body.name + '<br />' +
      '<b>Email: </b>' + req.body.email + '<br />' +
      '<b>Subject: </b>' + req.body.subject + '<br />' +
      '<b>Message: </b>' + req.body.message + '</p>'
      
      var mailOptions = {
        from: 'segxy2708@hotmail.com',
        to: 'info@regenerationddc.com',
        //to: 'segun@impartlab.com',
        subject: 'Inquiry: ' + req.body.subject + ' ',
        //text: JSON.stringify(req.body)
        html: messageBody
      };
      try{

      var response = [];
      await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.status(500).end(JSON.stringify(error));
        } else {
          console.log('Email sent: ' + info.response);
          const jsonContent = JSON.stringify('request successful');
          res.status(200).end(jsonContent);
        }
      });
    
    
      }catch{
        
      }
})

app.post('/subscribe', async (req, res) =>{
    console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
          user: 'segxy2708@hotmail.com',
          pass: 'se0103?2015gun'
        }
      });

      var messageBody = //'<p><b>Name: </b>' + req.body.name + '<br />' +
      '<b>Email: </b>' + req.body.email + '<br />' //+
      //'<b>Subject: </b>' + req.body.subject + '<br />' +
      //'<b>Message: </b>' + req.body.message + '</p>'
      
      var mailOptions = {
        from: 'segxy2708@hotmail.com',
        to: 'info@regenerationddc.com',
        //to: 'segun@impartlab.com',
        subject: 'Newsletter Subscription',
        //text: JSON.stringify(req.body)
        html: messageBody
      };
      try{

      var response = [];
      await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.status(500).end(JSON.stringify(error));
        } else {
          console.log('Email sent: ' + info.response);
          const jsonContent = JSON.stringify('request successful');
          res.status(200).end(jsonContent);
        }
      });
    
    
      }catch{
        
      }
})

app.listen(process.env.PORT || 8000, () => console.log("Server is up and running..." + process.env.PORT));