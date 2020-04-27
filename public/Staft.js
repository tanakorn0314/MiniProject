let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let bears = [{'id':0,'name':'pooh','weight': 211},
   {'id':1, 'name':'vinnie','weight': 111}
];

router.route('/bears').get((req, res) =>  res.json(bears) );

app.use("*", (req,res) => res.status(404).send('404 Not found') );
app.listen(80,  () => console.log("Server is running") )
let bears = [{'id':0,'name':'pooh','weight': 211},
   {'id':1, 'name':'vinnie','weight': 111}
];
 

router.route('/bears')
   // get all bears
   .get( (req, res) =>  res.json(bears) ) 

   // insert a new bear
   .post( (req, res)=> {
       var bear = {};
       bear.id =  bears[bears.length-1].id+1;
       bear.name = req.body.name
       bear.weight = req.body.weight
       bears.push(bear);
       res.json( {message: 'Bear created!'} )
   })
