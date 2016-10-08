var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var Articles={
    


var ArticleOne :{
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
var ArticleTwo :{
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
var ArticleThree :{
    
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

app.get('/Article-one',function(req,res){
   res.send(createTemplate(ArticleOne));
});

app.get('/Article-two',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'Article-two.html'));
});

app.get('/Article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'Article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
