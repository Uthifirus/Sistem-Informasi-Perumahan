const express = require('express')
var expressLayouts = require('express-ejs-layouts');
const app =  express()

app.listen(3000, ()=>{
    console.log("server run on port 3000")
})

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/',(req,res)=>{
    res.render('index', {
        title: 'Perum Sugan Rame',
        layout: 'layouts/main-layout'
    })
} )