import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/letter.css'
import { Link, Outlet } from 'react-router-dom'
import Banner from"../images/img3.jpg"




function Admin() {
    
  
    // const navigate = useNavigate()
	// axios.defaults.withCredentials = true;
	// useEffect(()=>{
	// 	axios.get('http://localhost:3000/home')
	// 	.then(res => {
	// 		if(res.data.Status === "Success") {
	// 			if(res.data.role === "admin") {
	// 				navigate('/');
	// 			} else {
	// 				const id = res.data.id;
	// 				navigate('/employeedetail/'+id)
	// 			}
	// 		} else {
	// 			navigate('/start')
	// 		}
	// 	})
	// },)

	// const handleLogout = () => {
	// 	axios.get('http://localhost:3000/logout')
	// 	.then(res => {
	// 		navigate('/start')
	// 	}).catch(err => console.log(err));
	// }
    
  return (
    <div className="container-fluid"  style={{backgroundImage: `url(${ Banner})`,
    backgrounRepeat:'no-repeat',
    width:'1300px'}}>
        <div class="sign" align="center">
      <span class="fast-flicker">welcome</span><span class="flicker">Ad</span>min
    </div>
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 fw-bolder d-none d-sm-inline">Admin Dashboard</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li>
                        <Link to="/" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline"></span> </Link>
                    </li>
                    <li>
                        <Link to="/register" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Register</span> </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Profile</span></Link>
                    </li>
                    <li>
                        <Link to="/product" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Product</span></Link>
                    </li>
                    <li>
                        <Link to="/menu" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">menu</span></Link>
                    </li>
                    <li>
                        <Link to="/view" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">view</span></Link>
                    </li>
                    <li>
                        <Link to="/contactus" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">contactus</span></Link>
                    </li>
                    <li >
                        <a href="/" className="nav-link px-0 align-middle text-white">
                             <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Logout</span>
                             </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col p-0 m-0">
            <div className='p-2 d-flex justify-content-center shadow'>
                <h4>welcome admin</h4>						
            </div>
            <Outlet />
        </div>
    </div>
</div>
  )

}
export default Admin