import React from 'react'
import  '../styles/OrderForm.css'

function OrderForm() {
  return (
    <div className='container'>
        <div className="wrapper">

<div className="title">
  <span>Welcome</span>
</div>
<p className='title_para'>Please enter Order details to proceed.</p>

<form action="Post">

<div className="row">
    
    <input type="text" placeholder="Enter your email" required />
  </div>
  <div className="row">
   
    <input type="text" placeholder="Enter your email" required />
  </div>
  <div className="row">
   
    <input type="password" placeholder="Password" required />
  </div>

  <div className="submit-button">
    <input type="submit" className='sub-btn' value="Submit" />
  </div>
</form>
</div> 
</div>
  )
}

export default OrderForm
