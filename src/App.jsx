import React from 'react'

const App = () => {
  return (
    <div className="container" style={{border:'1px solid black',backgroundColor:'#0096FF',padding:'20px',marginLeft:'80px',marginRight:'80px',padding:'10px',marginTop:'10px',gridRowGap:'10px'}} >

    
    <div className="row ">
      <div className="col ">
        <div className="card mx-3 " style={{width: '18rem',margin:'20px',borderRadius:'20px'}}>
       
            <div className="card-body" style={{borderBottom:'1px solid lightgrey'}}>
                <p className='text-center text-muted'>FREE</p>
                <h2 className="card-title text-center">$0/month</h2>
       
            </div>
            <div>
                 <p className="card-list"> ✔Single User</p>
                  <p className="card-list"> ✔50GB Storage</p>
                 <p className="card-list"> ✔Unlimited Public Projects</p>
                 <p className="card-list"> ✔Community Access</p>
                  <p className="text-muted">✘ Unlimited Private Projects</p>
                  <p className="text-muted">✘ Dedicated Phone Support</p>
                  <p className="text-muted">✘ Free Subdomain</p>
                  <p className="text-muted">✘ Monthly Status Reports</p>
            </div>
    
            <div className="card-body d-flex justify-content-center">
                   <button className="btn btn-primary" style={{padding:'10px 60px',borderRadius:'20px',backgroundColor:'#0096FF'}}>BUTTON</button>
      
            </div>
            </div>
      </div>
    
      <div className="col">
        <div className="card mx-3" style={{width: '18rem',margin:'20px',borderRadius:'20px'}} >
       
            <div className="card-body" style={{borderBottom:'1px solid lightgrey'}}>
                <p className='text-center text-muted'>PLUS</p>
                <h2 className="card-title text-center">$9/month</h2>
       
            </div>
            <div>
                 <p className="card-list"> ✔5 User</p>
                  <p className="card-list"> ✔50GB Storage</p>
                 <p className="card-list"> ✔Unlimited Public Projects</p>
                 <p className="card-list"> ✔Community Access</p>
                  <p className="card-list">✔ Unlimited Private Projects</p>
                  <p className="card-list">✔Dedicated Phone Support</p>
                  <p className="card-list">✔Free Subdomain</p>
                  <p className="text-muted">✘ Monthly Status Reports</p>
            </div>
    
            <div className="card-body d-flex justify-content-center">
                   <button className="btn btn-primary" style={{padding:'10px 60px',borderRadius:'20px',backgroundColor:'#0096FF'}}>BUTTON</button>
      
            </div>
            </div>
      </div>
      
      
      <div className="col">
        <div className="card mx-3" style={{width: '18rem',margin:'20px',borderRadius:'20px'}} >
       
            <div className="card-body" style={{borderBottom:'1px solid lightgrey'}}>
                <p className='text-center text-muted'>PRO</p>
                <h2 className="card-title text-center">$49/month</h2>
       
            </div>
            <div>
                 <p className="card-list"> ✔Unlimited User</p>
                  <p className="card-list"> ✔50GB Storage</p>
                 <p className="card-list"> ✔Unlimited Public Projects</p>
                 <p className="card-list"> ✔Community Access</p>
                  <p className="card-list"> ✔Unlimited Private Projects</p>
                  <p className="card-list"> ✔Dedicated Phone Support</p>
                  <p className="card-list">✔ Free Subdomain</p>
                  <p className="card-list">✔  Monthly Status Reports</p>
            </div>
    
            <div className="card-body d-flex justify-content-center">
                   <button className="btn btn-primary" style={{padding:'10px 60px',borderRadius:'20px'}}>BUTTON</button>
      
            </div>
            </div>
      </div>
      </div>
    
    
    
    
      </div>
      
      
   




)
}

export default App