import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import Bannerimage from"../images/img1.jpg"
import {useNavigate} from 'react-router-dom'
function Login() {
    const[inputs,setInputs]=useState({
        name:'',
        password:''
    })
    const inputHandler=(e)=>{
        setInputs(prev=>({...prev,[e.target.name]:[e.target.value]}))
    }
    const nav=useNavigate()

   const SubmitHandler=(e)=>{
    e.preventDefault()
    Axios.post("http://localhost:3000/login",inputs)
    .then(res=>{
        if(res.data.login){
            alert("login success")
            nav('/admin')

        }else{
            alert("login failed")
        }
    })
    .catch((err)=>console.log(err))
   }
  return (
    
    <body style={{backgroundImage: `url(${ Bannerimage})`,
    backgrounRepeat:'no-repeat'}}>
    
    
    <div class="container"  style={{backgroundcolor: "lightblue"}}>
        <div class="d-flex justify-content-center" >
         <div class="row">
         <h1 class="my-5">login form</h1>
    <form onSubmit={SubmitHandler}>
    <div class="form-group">
    <label for="name">name</label>
    <input type="text" name="name" class="form-control"  placeholder="Enter name" onChange={inputHandler}/>
   </div>
  
  <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" name="password" class="form-control"  placeholder="enter Password" onChange={inputHandler}/>
  </div>
  <div>
  <input type="submit" class="btn btn-success my-3" value="login"/>
  </div>
</form>

 </div>
  </div>
    </div>
   
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
   
  </body>
  
  )
}

export default Login