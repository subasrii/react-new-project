const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
app.listen(3000)
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
     database:'mern'
    
})
app.post('/login',(req,res)=>{
    const que="SELECT * FROM login WHERE name=? and password=?"
    const name=req.body.name
    const password=req.body.password
    con.query(que,[name,password],(err,result)=>{
        if(err){
            throw err
        }
        if(result.length>0){
            res.send({login:true})
        }else{
            res.send({login:false})
   }
})
})

app.get('/home', (req, res) => {
    return res.json({Status: "Success", role: req.role, id: req.id})
})


app.post('/saveemp',function(req,res){
    const name=req.body.name
    const email=req.body.email
    const password=req.body.password
    const gender=req.body.gender
    const age=req.body.age
   con.query("insert into emp(name,email,password,gender,age)values(?,?,?,?,?)",[name,email,password,gender,age],(err,result)=>{
    if(err){
        throw err
    }else{
        res.send("insert successfully")
    }
   })


})

app.get('/view',function(req,res)
{
    con.query("select * from food",(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
        }
    })
})

app.delete('/deleteEmp/:id',function(req,res){
    const id=req.params.id
    con.query("delete from emp where id=?",[id],(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send("Deleted Successfully")
        }
    })
})
app.get('/read/:id',function(req,res){
    const query="select * from emp where id=?"
    const id=req.params.id
    con.query(query,[id],(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
}   
})
})

app.get('/read1/:id',function(req,res){
    const query="select * from food where id=?"
    const id=req.params.id
    con.query(query,[id],(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
}   
})
})

app.get('/update/:id',function(req,res){
    const query="update emp set name=?, email=?, password=?, gender=?, age=? where id=?"
    const id=req.params.id
    const name=req.body.nname
    const email=req.body.nemail
    const password=req.body.npassword
    const gender=req.body.ngender
    const age=req.body.nage
    con.query(query,[name,email,password,gender,age,id],(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
}   
})
})