const express = require('express')
var expressLayouts = require('express-ejs-layouts');
const app =  express()

app.listen(3000, ()=>{
    console.log("server run on port 3000")
})

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// app.get('/about',(req,res)=>{
//     res.render('about', {
//         title: 'about',
//         layout: 'layouts/main-layout'
//     })
// } )