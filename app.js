const express = require('express')
var expressLayouts = require('express-ejs-layouts');
const app =  express()

app.listen(3000, ()=>{
    console.log("server run on port 3000")
})

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(expressLayouts);

app.get('/',(req,res)=>{
    res.render('index', {
        title: 'Perum Sugan Rame',
        layout: 'layouts/main-layout'
    })
} )

app.get('/detail_berita', (req,res)=>{
    res.render('detail_berita',{
        title: 'Detail Berita',
        layout: 'layouts/profile'
    })
})

app.get('/profile_warga', (req,res)=>{
    res.render('profile_warga', {
        title: 'Profile',
        layout: 'layouts/profile'
    })
})

app.get('/edit_profile', (req,res)=>{
    res.render('edit_profile', {
        title: 'Edit Profile',
        layout: 'layouts/profile'
    })
})

app.get('/pembayaran', (req, res)=>{
    res.render('kelola_pembayaran', {
        title: 'pembayaran',
        layout: 'layouts/profile'
    })
})

app.get('/sub_pembayaran', (req,res)=>{
    res.render('sub_pembayaran', {
        title: 'pembayaran',
        layout: 'layouts/profile'
    })
})