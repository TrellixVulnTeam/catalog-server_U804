
const sqlite3=require('sqlite3').verbose();
//let sql;

const db =new sqlite3.Database("./db/book.db",sqlite3.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err.message);
    else console.log("connected to db");
});

// sql=`CREATE TABLE catalog(id INTEGER PRIMARY KEY ,title,topic,stock,price)`
// sql=`INSERT INTO catalog(id,title,topic,stock,price)
//      VALUES(?,?,?,?,?)`;
//  db.run(sql,[1,"How to get a good grade in DOS in 40 minutes a day","distributed systems",20,20],
// (err)=>{
//       if(err) return console.error(err.message);
//      console.log("a new book has been added");
//   });

module.exports=db
