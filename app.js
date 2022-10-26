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

// Warga

app.get('/Home_Warga',(req,res)=>{
    res.render('index', {
        title: 'Perum Sugan Rame',
        layout: 'layouts/main-layout-warga'
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

app.get('/transaksi', (req,res)=>{
    res.render('transaksi', {
        title:'pembayaran',
        layout: 'layouts/profile'
    })
})

// Ketua RT

app.get('/approve_pembayaran', (req,res)=>{
    res.render('approve_pembayaran', {
        title: 'Approve Pembayaran',
        layout: 'layouts/profile'
    })
})

app.get('/sub_approve', (req,res)=>{
    res.render('sub_approve', {
        title: 'Approve Pembayaran',
        layout: 'layouts/profile'
    })
})
<<<<<<< HEAD

app.get('/buat_akun', (req,res)=>{
    res.render('buat_akun', {
        title: 'Buat akun',
        layout: 'layouts/profile'
    })
})

app.get('/input_perintah', (req,res)=>{
    res.render('input_perintah', {
        title: 'Perintah',
=======
app.get('/login', (req,res)=>{
    res.render('login', {
        title: 'login',
        layout: 'layouts/layout_login'
    })
})

app.get('/kelola_keuangan', (req,res)=>{
    res.render('kelola_keuangan', {
        title: 'Kelola Keuangan',
>>>>>>> a683365f81800c259696e76455b4ba27da62c2a6
        layout: 'layouts/profile'
    })
})