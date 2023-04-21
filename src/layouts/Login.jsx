import React from 'react'

function Login() {
  return (
    <div className="full_hieght p-0 row justify-content-center align-items-center bg_grey">
      <div className="card col-4">

        <div className="card-body">

          <h5 className="card-title text-center mt-4">Login</h5>

          <form>
            <div className="mt-5 mb-3">
              <input type="email" className="form-control" placeholder="Email" />
            </div>

            <div className="mt-5 mb-5">
              <input type="password" className="form-control" placeholder="Password" />
            </div>

            <div className="row justify-content-end me-1">

              <button className="btn login_button me-0">{">"}</button>

            </div>

          </form>

        </div>

      </div>
    </div>
  )
}

export default Login
