const express = require("express");
var expressLayouts = require("express-ejs-layouts");
const app = express();
const pool = require("./src/configs/connection");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const session = require("express-session");
const path = require("path");
const flash = require("req-flash");

app.listen(3000, () => {
  console.log("server run on port 3000");
});


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(expressLayouts);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "alskdjlkwjd93kljd9dja39odai93",
    name: "secretName",
    cookie: {
      sameSite: true,
      maxAge: 60000,
    },
  })
);
app.use(flash());

pool.connect((err) => {
  if (!err) {
    console.log("Connected to db");
  } else {
    console.log(err.message);
  }
});

//  Routing

app.get("/", (req, res) => {
  pool.query("select * from berita", (err, result) => {
    if (!err) {
      res.render("index", {
        berita: result.rows,
        title: "Perum Sugan Rame",
        layout: "layouts/main-layout",
      });
    } else {
      res.render(err.message);
    }
  });
});

app.get("/detail_berita/:id", (req, res) => {
  let id = req.params.id;

  pool.query(
    `SELECT * FROM berita WHERE idberita = $1`,
    [id],
    (err, results) => {
      if (err) {
        throw err;
      } else {
        res.render("detail_berita", {
          berita: results.rows,
          layout: "layouts/profile",
          title: "Perum Sugan Rame",
        });
      }
    }
  );
});

// app.get("/detail_berita", (req, res) => {
//   res.render("detail_berita", {
//     title: "Detail Berita",
//     layout: "layouts/profile",
//   });
// });

// app.post("/", (req,res)=>{
//     const {title, desc, content} = req.body

//     pool.query((`insert into berita(title,desc,content) values('${title}', '${desc}', '${content}')`), (err,result)=>{
//         if (!err) {
//             res.send("success")
//         } else{
//             res.send(err.message)
//         }
//     })
// })

// Warga
app.get("/Home_Warga", (req, res) => {
  pool.query("select * from berita", (err, result) => {
    if (!err) {
      res.render("index", {
        berita: result.rows,
        title: "Perum Sugan Rame",
        layout: "layouts/main-layout-warga",
      });
    } else {
      res.render(err.message);
    }
  });
});

app.get("/profile_warga", (req, res) => {
  res.render("profile_warga", {
    title: "Profile",
    layout: "layouts/profile",
  });
});

app.get("/edit_profile", (req, res) => {
  res.render("edit_profile", {
    title: "Edit Profile",
    layout: "layouts/profile",
  });
});

app.get("/pembayaran", (req, res) => {
  res.render("kelola_pembayaran", {
    title: "pembayaran",
    layout: "layouts/profile",
  });
});

app.get("/sub_pembayaran", (req, res) => {
  res.render("sub_pembayaran", {
    title: "pembayaran",
    layout: "layouts/profile",
  });
});

app.get("/transaksi", (req, res) => {
  res.render("transaksi", {
    title: "pembayaran",
    layout: "layouts/profile",
  });
});

// Ketua RT

app.get("/approve_pembayaran", (req, res) => {
  res.render("approve_pembayaran", {
    title: "Approve Pembayaran",
    layout: "layouts/profile",
  });
});

app.get("/sub_approve", (req, res) => {
  res.render("sub_approve", {
    title: "Approve Pembayaran",
    layout: "layouts/profile",
  });
});

app.get("/buat_akun", (req, res) => {
  res.render("buat_akun", {
    title: "Buat akun",
    layout: "layouts/profile",
  });
});

app.get("/input_perintah", (req, res) => {
  res.render("input_perintah", {
    title: "Perintah",
    layout: "layouts/profile",
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    title: "login",
    layout: "layouts/layout_login",
  });
});

app.get("/kelola_keuangan", (req, res) => {
  res.render("kelola_keuangan", {
    title: "Kelola Keuangan",
    layout: "layouts/profile",
  });
});
