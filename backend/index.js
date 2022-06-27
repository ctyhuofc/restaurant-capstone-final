const express = require('express');
const app = express();
const config = require('./config');
const Item = require('./models/item');
const Review = require('./models/review');
const Contact_Form = require('./models/contact_form')
const Employee = require('./models/employee')
const Contact_Info = require ('./models/contact_info')
const About_Us = require ('./models/about_us')
const cors =  require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, './uploads');
  },
  filename: function (req, file, cb){
    cb(null, file.originalname)
  }
});

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/images', express.static('uploads'));

//configuring the upload folder and upload file name


config.authenticate().then(() => {
  console.log('Database connected!');
}).catch((err) =>{
  console.log(err);
});

app.post('/employees/register', function (req,res){

  let plainPassword = req.body.password;

  bcrypt.hash(plainPassword, saltRounds, function(err,hash){

    let employee_data = {
      email: req.body.email,
      password: hash
    }

    Employee.create(employee_data).then((result) =>{
      res.status(200).send(result);
    }).catch((err)=> {
      res.status(500).send(err);
    });
  })
})

app.post('/employees/login',function(req,res){
  let email = req.body.email;
  let password = req.body.password;
  let employee_data = {
    where: {email}
  }
  Employee.findOne(employee_data).then((result)=>{

    if(result){
      console.log(result);
      bcrypt.compare(password, result.password, function(err, output){
        console.log(output);
        if(output){
          res.status(200).send(result)
        }else{
          res.status(400).send('Incorrect Password')
        }
      });
    }
    else{
      res.status(404).send('Employee Not registered');
    }
  })
})

app.get('/items/', function(req, res){
  Item.findAll().then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

app.get('/employees/feedback/', function(req, res){
  Contact_Form.findAll().then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

app.get('/employees/items/:id/', multer({storage}).single('photo_file'),function(req, res){
  let id = req.params.id;
  Item.findByPk(id).then(function(result){
    result.photo_file = req.file ? req.file.filename : result.photo_file;
    res.status(200).send(result);
  }).catch(function(err){
    res.status(500).send(err);
  });
});



app.delete('/employees/deleteitem/:id/', function(req, res){
  let id = req.params.id;
  Item.findByPk(id).then((result) => {
    result.destroy().then((result) => {
      res.send(result)
    }).catch((err) => {
      res.send(err);
    });
  }).catch((err) => {
    res.send(err);
  });
});

app.delete('/employees/delete_review/:id/', function(req, res){
  let id = req.params.id;
  Review.findByPk(id).then((result) => {
    result.destroy().then((result) => {
      res.send(result)
    }).catch((err) => {
      res.send(err);
    });
  }).catch((err) => {
    res.send(err);
  });
});


app.post('/addreview/', function(req, res){
  let review = req.body;
  Review.create(review).then(function(result){
    res.redirect('/reviews/');
  }).catch(function(err){
    res.send(err);
  })
});

app.post('/addcontact/', function(req, res){
  let contact_form = req.body;
  Contact_Form.create(contact_form).then(function(result){
    res.send('')
  }).catch(function(err){
    res.send(err);
  })
});

app.get('/reviews/', function(req, res){
  Review.findAll().then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(500).send(err);
  });
});



app.get('/employees/reviews/', function(req, res){
  Review.findAll().then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

app.get('/employees/reviews/:id/', function(req, res){
  let id = req.params.id;
  Review.findByPk(id).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(500).send(err);
  });
});




app.patch('/employees/updatereview/:id', multer({storage}).single('photo_file'), function(req, res) {
  let id = req.params.id;
  let review = {
    // id: req.body.id,
    // item_type: req.body.item_type,
    // item_subtype: req.body.item_subtype,
    // photo_file: req.file ? req.file.filename : null,
    // name: req.body.name,
    // description: req.body.description,
    // price: req.body.price

  };
  //Find the review
  Review.findByPk(id).then(function (result) {
    //Update Item
    if (result) {
      for (let i in req.body) {
        result[i] = req.body[i];
      }
      result.photo_file = req.file ? req.file.filename : result.photo_file;
      result.save().then(function () {
        res.send(result);
      }).catch(function (err) {
        res.status(500).send(err);
      });
    }
  });
});

app.post('/employees/additem/', multer({storage}).single('photo_file'),function(req, res){
  let item = {
    id: req.body.id,
    item_type: req.body.item_type,
    item_subtype: req.body.item_subtype,
    photo_file: req.file ? req.file.filename : null,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price

  };
  Item.create(item).then(function(result){
    res.redirect('/items/');
  }).catch(function(err){
    res.send(err);
  })
});

//Update item
app.patch('/employees/updateitem/:id', multer({storage}).single('photo_file'), function(req, res) {
  let id = req.params.id;
  let item = {
    // id: req.body.id,
    // item_type: req.body.item_type,
    // item_subtype: req.body.item_subtype,
    // photo_file: req.file ? req.file.filename : null,
    // name: req.body.name,
    // description: req.body.description,
    // price: req.body.price

  };
  //Find the item
  Item.findByPk(id).then(function (result) {
    //Update Item
    if (result) {
      for (let i in req.body) {
        result[i] = req.body[i];
      }
      result.photo_file = req.file ? req.file.filename : result.photo_file;
      result.save().then(function () {
        res.send(result);
      }).catch(function (err) {
        res.status(500).send(err);
      });
    }
  });
});

app.get('/employees/contact-info/', function(req, res){
  Contact_Info.findAll().then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

app.get('/employees/contact-info/:id', function(req, res){
  let id = req.params.id;
  Contact_Info.findByPk(id).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

app.get('/employees/about-us/:id', function(req, res){
  let id = req.params.id;
  About_Us.findByPk(id).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

app.get('/about-us/', function(req, res){
  About_Us.findAll().then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

app.patch('/employees/updatecontact/:id', multer({storage}).single('photo_file'), function(req, res) {
  let id = req.params.id;
  let contact_info = {};
  //Find the contact-info
  Contact_Info.findByPk(id).then(function (result) {
    //Update Contact-Info
    if (result) {
      for (let i in req.body) {
        result[i] = req.body[i];
      }
      result.save().then(function () {
        res.send(result);
      }).catch(function (err) {
        res.status(500).send(err);
      });
    }
  });
});

app.patch('/employees/updateabout-us/:id', multer({storage}).single('photo_file'), function(req, res) {
  let id = req.params.id;
  let aboutus_info = {};
  //Find the aboutus-info
  About_Us.findByPk(id).then(function (result) {
    //Update About-Info
    if (result) {
      for (let i in req.body) {
        result[i] = req.body[i];
      }
      result.save().then(function () {
        res.send(result);
      }).catch(function (err) {
        res.status(500).send(err);
      });
    }
  });
});

app.listen(process.env.PORT || 3000, function(){
  console.log('Server running on port 3000...');
});
