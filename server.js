var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var Articles={
    


'Article-one' :{
    title :'Article-one | Harshit Kataria',
    heading: 'Article one',
    content: ` <p>
                    This is my article one content.This is my article one content. This is my article one content. This is my article one content. This is my article one content. This is my article one content.
                </p>
                <p>
                    This is my article one content. This is my article one content. This is my article one content. This is my article one content. This is my article one content. This is my article one content.
                </p>
                <p>
                    This is my article one content.This is my article one content. This is my article one content. This is my article one content. This is my article one content. This is my article one content.
                </p>`
},
'Article-two' :{
    title :'Article-two | Harshit Kataria',
    heading: 'Article two',
    content: ` <p>
                    This is my article two content.This is my article two content. This is my article two content. This is my article two content. This is my article two content. This is my article two content.
                </p>
                <p>
                    This is my article two content. This is my article two content. This is my article two content. This is my article two content. This is my article two content. This is my article two content.
                </p>
                <p>
                    This is my article two content.This is my article two content. This is my article two content. This is my article two content. This is my article two content. This is my article two content.
                </p>`
},
 'Article-three' :{
    
    title :'Article-three| Harshit Kataria',
    heading: 'Article  three',
    content: ` <p>
                    This is my article three content.
                    < /p>`
                    
}

};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var content= data.content;
    


    
var htmlTemplate = `<html>
    <head>
        <title>
           ${title}
            
        </title>
                <meta name="viewport" content="width=device-width, initial-scale=1">  
                 <link href="/ui/style.css" rel="stylesheet" />
              
         </head>
        <body>
            <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
               ${heading}
            </h3>
            <div>
                8 oct 2016
            </div>
            <div>
               ${content}
            </div>
            </div>
        </body>
   
    
    
    
  
</html>  `
;
return htmlTemplate;
    


}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


 var counter=0;
app.get('/counter',function(req,res){
    counter = counter + 
    res.send(counter.toString());
});


app.get('/:ArticleName',function(req,res){
    var ArticleName= req.params.ArticleName;
   res.send(createTemplate(Articles[ArticleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
