import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, Outlet } from 'react-router-dom'
import Banner from"../images/imm.jpg"
import 'bootstrap/dist/css/letter.css'
function Home() {
	
	return (
		
		<div className="container-fluid" style={{backgroundImage: `url(${ Banner})`,
		backgrounRepeat:'no-repeat',
		width:'1300px'}}>
			{/* <div class="sign" align="center">
      <span class="fast-flicker">we</span>l<span class="flicker">co</span>me<br/>
	  </div> */}

			<div className="row flex-nowrap">
			
				<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
				
					<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
						<a href="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
							<span className="fs-5 fw-bolder d-none d-sm-inline"> WELCOME HOME</span>
						</a>
						<ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
							<li>
								<Link to="/login" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
									<i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">login</span> </Link>
							</li>
							<li>
								<Link to="/register" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Register</span> </Link>
							</li>
							<li>
								<Link to="/" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Profile</span></Link>
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
					<div className=' d-flexjustify-content-center shadow'>
						<h4>WELCOME HOME</h4>						
					</div>
					<Outlet />
					<Link to="/login" class="btn btn-info">Login</Link>
				</div>
			</div>
		</div>
	)
}

export default Home