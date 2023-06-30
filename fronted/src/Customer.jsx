import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Customer() {
  const [Customer, setCustomer] = useState({})

  const onchange = (event) => {
  
    setCustomer({ ...Customer, [event.target.name]: event.target.value })
  }

  const Handlesubmit = () => {
    console.log(Customer)
    console.log(localStorage.getItem('user'))
    const CoustomerID = localStorage.getItem('user')
    if (CoustomerID == 1) {
      axios.post('http://localhost:8000/Customer1', Customer)
    }
    else if (CoustomerID == 2) {
      axios.post('http://localhost:8000/Customer2', Customer)
    }




  }
  return (
    <div>
      <section className="vh-100 bg-image"
        style={{ BackgroundImage: "URL('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')", height: "200px" }}>
        <div className="mask d-flex align-items-center h-200 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">fill Order details</h2>

                    <form>

                      <div className="form-outline mb-4">

                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" name='Date' onChange={onchange} value={Customer.Date} placeholder='Order Date' />

                      </div>

                      <div className="form-outline mb-4">

                        <input type="text" id="form3Example3cg" className="form-control form-control-lg" name='Company' onChange={onchange} value={Customer.Company} placeholder='Enter Company Name' />

                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cg" className="form-control form-control-lg" name='Owner' onChange={onchange} value={Customer.Owner} placeholder='Enter Owner Name' />

                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name='Item' onChange={onchange} value={Customer.Item} placeholder='Name of Items' />

                      </div>
                      <div className="form-outline mb-4">
                        <input type="Number" id="form3Example4cdg" className="form-control form-control-lg" name='Qty' onChange={onchange} value={Customer.Qty} placeholder='Enter Qty' />

                      </div>
                      <div className="form-outline mb-4">
                        <input type="Number" id="form3Example4cdg" className="form-control form-control-lg" name='Weight' onChange={onchange} value={Customer.Weight} placeholder='Enter Weight Of Item' />

                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name='Req' onChange={onchange} value={Customer.Req} placeholder='Request  For Shipment' />

                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name='TrackingID' onChange={onchange} value={Customer.TrackingID} placeholder='Tracking ID' />

                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name='ShipmentSize' onChange={onchange} value={Customer.ShipmentSize} placeholder='Shipment Size' />

                      </div>
                      <div className="form-outline mb-4">
                        <input type="Number" id="form3Example4cdg" className="form-control form-control-lg" name='BoxCount' onChange={onchange} value={Customer.BoxCount} placeholder='Box Count' />

                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name='Specification' onChange={onchange} value={Customer.Specification} placeholder='Specification' />

                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name='ChecklistQty' onChange={onchange} value={Customer.ChecklistQty} placeholder='Checklist Qty' />

                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />

                        I agree all statements in <a href="" className="text-body"><u>Terms of service</u></a>

                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={Handlesubmit}>submit</button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/"
                        className="fw-bold text-body"><u>Login here</u></Link></p>

                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
