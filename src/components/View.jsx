import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'

function View(){
    const [empList,setEmplist]=useState([])
    const viewEmptable=()=>{
        Axios.get("http://127.0.0.1:3000/view/").then((response)=>{
            setEmplist(response.data)
        })
    }

       const delEmp=(id)=>{
        Axios.delete("http://localhost:3000/deleteEmp/"+id).then(
            res=>{
                window.location.reload()
            }
        ).catch(err=>console.log("Error"))
    }


    return(
        <div>
            <button class="btn btn-primary" onClick={viewEmptable}>View table</button>
            <div className="d-flex justify-content-end">
                                {/* <Link to="/" class="btn btn-info">Home</Link> */}
                            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>amount</th>
                        <th>rating</th>
                        <th>Action</th>
                        <th>Action</th>
                        <th>Action</th>
                       
                    </tr>
                </thead>
                {
                    empList.map((val,key)=>{
                        return(
                            <tbody>
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.amount}</td>
                                    <td>{val.rating}</td>
                                    
                                    
                                    <td><Link to={`/update/${val.id}`} className="btn btn-primary"> Update</Link></td>
                                    <td><button onClick={()=>delEmp(val.id)} className="btn btn-danger">Delete</button></td>
                                    <td><Link to={`/read/${val.id}`} className="btn btn-dark">Fetch</Link></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
            <Link to="/" class="btn btn-info">Home</Link>
        </div>
    )
}
export default View