import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function Login() {

  let Navigate = useNavigate()

  const [user, setuser] = useState({ ID: "", Password: "" });
  const onchange = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value })
  }
  const Handlelogin = () => {
    localStorage.setItem('user', user.ID)
    localStorage.setItem('password', user.Password)
    console.log(user)
    if (user.ID == 3) {
      Navigate('./Admin')
    }
    else if (user.ID == 2 || user.ID == 1) {
      Navigate('./customer')
    }





  }
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>

                  <div className="form-outline form-white mb-4">
                    <input type="ID" id="typeEmailX" className="form-control form-control-lg" name='ID' value={user.ID} onChange={onchange} placeholder='Enter your ID' />

                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="password" id="typePasswordX" className="form-control form-control-lg" name='Password' value={user.Password} onChange={onchange} placeholder='Enter your Password' />

                  </div>

                  <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="/">Forgot password?</a></p>

                  <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={Handlelogin}>Login</button>


                </div>

                <div>
                  <p className="mb-0">Don't have an account? <a href="/" className="text-white-50 fw-bold">Sign Up</a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
