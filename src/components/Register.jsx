import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Bannerimage from"../images/img2.jpeg"
import Banner from"../images/img5.jpg"
import Axios from 'axios'
import {Link} from 'react-router-dom'
function Register() {
    const[name,setname]= useState("")
    const[email,setemail]= useState("")
    const[password,setpassword]= useState("")
    const[gender,setgender]= useState("")
    const[age,setage]= useState(0)

    const addEmp=()=>{
        Axios.post("http://127.0.0.1:3000/saveemp/",{
            name:name,
            email:email,
            password:password,
            gender:gender,
            age:age
        }).then(()=>{
            console.log('inserted successfully')
            alert("saved success")

        })
    }

  return (
 
    <body style={{backgroundImage: `url(${ Banner})`,
    backgrounRepeat:'no-repeat',
    width:'1300px'}}>
    <h1 class="my-5">Hello, world!</h1>
    <div class="container" style={{backgroundImage: `url(${ Bannerimage})`,
    backgrounRepeat:'no-repeat',
    width:'550px'}}>
        <div class="d-flex justify-content-center">
         <div class="row">
    <form onSubmit={addEmp}>
    <div class="form-group"  >
    <label for="name" >name</label>
    <input type="text" class="form-control"  placeholder="Enter name" onChange={(e)=>{setname(e.target.value)}}/>
   </div>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control"  placeholder="Enter email" onChange={(e)=>{setemail(e.target.value)}}/>
   </div>
  <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control"  placeholder="enter Password" onChange={(e)=>{setpassword(e.target.value)}}/>
  </div>
  <div class="form-group-check" onChange={(e)=>{setgender(e.target.value)}}>
  <label for="gender">gender</label>
    <input type="radio" class="form-control-check" value="male" name="gen"/>male
    <input type="radio" class="form-control-check" value="female" name="gen"/>female
 </div>
 <div class="form-group">
    <label for="age">age</label>
    <input type="text" class="form-control"  onChange={(e)=>{setage(e.target.value)}}/>
   </div>
   <div>
  <input type="submit" class="btn btn-success my-3"/>
  </div>
</form>
<div>
<Link to="/view" class="btn btn-info">view</Link>
               
</div>
 </div>
  </div>
    </div>
   
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
  
  )
}

export default Register