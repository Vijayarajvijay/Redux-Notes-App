import React from 'react'
import { useNavigate } from 'react-router-dom'


function Main() {

    let navigate = useNavigate()
  return (
    
    <header>
    <div className="wrapper">
        <div className="logo">
            {/* <img src={logo} alt="" style={{width:"220px",height:"100px"}} /> */}
        </div>

</div>
<div className="welcome-text">
        <h1>
Welocme  to our 

</h1>
<br/>
<br/>

  <div class="content"  >
    <h2 style={{fontSize:"75px"}}>Nots App</h2>
    <h2 style={{fontSize:"75px"}}>Nots App</h2>
  </div>


<br/>
<br/>
<br/>

<button class="button-64 " onClick={()=>navigate('/notes')} style={{marginLeft:"190px"}} role="button"><span class="text">Get Notes</span></button>
  

    </div>
   
    
      
</header>


  )
}

export default Main