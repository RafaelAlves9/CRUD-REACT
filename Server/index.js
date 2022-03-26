const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

//conexao sql
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "152369Jr",
    database: "lista",
});

app.use(cors())
app.use(express.json())

app.post('/register', (req, res) => {
    const { titulo } = req.body 
    const { autor } = req.body
    const { conteudo } = req.body

    let SQL = "INSERT INTO notas ( titulo, autor, conteudo ) VALUES ( ?,?,? )"
    db.query(SQL, [ titulo, autor, conteudo ], (err,res) => {
        if (err) console.log(err)
        else console.log("funfou")
    })
})

app.get('/getlist', (req, res) => {
  let SQL = "SELECT * from notas"
  db.query(SQL, (err, result) => {
    if (err) console.log(err)
    else res.send(result)
  })
})

app.put('/edit', (req, res) =>{
  const id = req.id
  const titulo = req.body.titulo
  const autor = req.body.autor
  const conteudo = req.body.conteudo

  let SQL = 'UPDATE notas SET titulo = ?, autor = ?, conteudo = ? WHERE idnotas = ?';

  db.query(SQL, [titulo, autor, conteudo, id ], (err,result) =>{
    if (err) console.log(err);
    else res.send(result)
  })
})

app.delete('/delete/:id', (req, res) =>{
  const { id } = req.params;

  let SQL = "DELETE FROM notas WHERE idnotas = ?";
  db.query(SQL, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }
  )
})

app.listen(3001, () => {
    console.log('rodando tranquilamente irmaozinho')
})