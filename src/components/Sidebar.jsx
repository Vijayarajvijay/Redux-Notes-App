import React from 'react'
import { Link } from 'react-router-dom'
import noteimg from '../assets/notes icon.svg'

function Sidebar() {
  return (
    <>
    <div className="container-fluied ">
        <div className="row">
          <h1 className="topick"> Notes App</h1>

          <div className="col text-white align-items-center p-4 pt-5">
           
              <div className="side d-flex ">
                <img
                  style={{ width: "32px", height: "32px" }}
                  src={noteimg }
                  alt=""
               />
               <span className='text-white'> &nbsp; Notes </span>
               
              </div>
            
          </div>
        </div>


      </div>
    </>
  )
}

export default Sidebar