var http = require("http");
var express = require("express");

var app = express();
/**
 * CONFIGURATION
*/

app.use(function (req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  next();
});

// read req body as obj
var bodyParser = require("body-parser");
app.use(bodyParser.json());


// to serve HTML content
var ejs = require('ejs');
app.set('views', __dirname + '/public');
app.engine('html', ejs.renderFile);
app.set('view engine', ejs);

// To serve static files (css, js, images, documents, etc etc)
app.use(express.static(__dirname + '/public'));

// Mongoose connection
var mongoose = require("mongoose");
// mongoose.connect('mongodb://ThiIsAPassword:TheRealPassword@cluster0-shard-00-00-euadh.mongodb.net:27017,cluster0-shard-00-01-euadh.mongodb.net:27017,cluster0-shard-00-02-euadh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',  { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://ThiIsAPassword:TheRealPassword@cluster0-shard-00-00-euadh.mongodb.net:27017,cluster0-shard-00-01-euadh.mongodb.net:27017,cluster0-shard-00-02-euadh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
var db = mongoose.connection;

// Db obj constructor
var ItemDB;
var messageDB;

/** 
 * 
 *  WEB SERVER FUNCTIONALITY
 * 
 */
app.get("/", function(req, res){
  res.render('index.html');
});

app.get("/contact", function(req, res) {
  res.render('contact.html');
});

app.get("/about", function(req, res) {
  res.send("Robert Ziegler");
});

app.get('/catalog', function(req, res) {
  res.render('index.html');
});

app.get('/admin', function(req, res) {
  res.render('admin.html');
});

/**
 * 
 * API Functionality
 * 
 */

var items = [];
var count = 0;

app.get('/api/products', function(req, res) {
  console.log("User wants the catalog");

  ItemDB.find({}, function(error, data) {
    if(error) {
      console.log("** Error on retrieving", error);
      res.status(500);
      res.send(error);
    }

    res.status(200);
    res.json(data);
  });
})

// Homework use with admin page
app.get('/api/products/:user', function(req, res) {
  var name = req.params.user;
  ItemDB.find({ user: name}, function(error, data) {
    if(error) {
      console.log("** Error retrieving filtering", error);
      res.status(500);
      res.send(error);
    }

    res.status(200);
    res.json(data);
  });
})

app.get('/api/messages/:user', function(req, res) {
  var userName = req.params.user;
  messageDB.find({ user: userName}, function(error, data) {
    if(error) {
      console.log("** Error retrieving filtering", error);
      res.status(500);
      res.send(error);
    }

    res.status(200);
    res.json(data);
  });
})

app.post('/api/products', function(req,res ) {
  console.log("Uesr wants to save item");

  // perform validation

  // create a DB Object
  var itemForMongo = ItemDB(req.body);
  itemForMongo.save(function(error, savedItem) {
    if(error) {
      console.log("** Error saving item to DB", error);
      res.status(500); // 500: Internal Server Error
      res.send(error);
    }
    // no error, send the saved item back to client
    console.log("Item saved Correctly!");
    res.status(201); // 201: Created
    res.json(savedItem);
  });

});

app.post('/api/message', function(req, res) {
  var msg = req.body;
  console.log("New Message from", msg.name);

  var msgForMongo = messageDB(req.body);
  msgForMongo.save(function(error, savedMsg) {
    if(error){
      console.log("Error saving msg", error);
      res.status(500);
      res.send(error);
    }
      res.status(201); // 201: Created
      res.json(savedMsg);
  })
});

// catch error on mongo connection
db.on('error', function(error) {
  console.log("** Error connecting to MongoDB");
});

// catch success on mongo connection
db.on('open', function() {
  console.log("Connected to MongoDB!");

  /* The allowed SchemaTypes are:
    String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
  */

  // define a schema for the collection (Table)
  var itemSchema = mongoose.Schema({
    code: String,
    title: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    image: String,
    user: String
  });

  var messageSchema = mongoose.Schema({
    name: String,
    mail: String,
    message: String,
    user: String
  });

  // create constructor(s) for the schema(s)
  ItemDB = mongoose.model("itemsCH5", itemSchema);
  messageDB = mongoose.model("messagesCH5", messageSchema);
});

app.listen(8080, function() {
  console.log("Server running at http://localhost:8080");
});
