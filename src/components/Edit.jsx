import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { edit } from '../redux/NoteSlice'


const Edit = () => {

    const params = useParams()
    let data = useSelector((state)=>state.note)
    let dispatch = useDispatch()
    let [title,setTitle]=useState("")
    let [content,setContent]=useState("")
    let navigate = useNavigate()
    

    const getData=(index)=>{
        setTitle(data[index].title)
        setContent(data[index].content)
    }

    useEffect(() => {
      if (Number(params.id) < data.length) {
          getData(Number(params.id));
      } else {
          navigate('/notes');
      }
  }, [params.id, data, navigate]);
    const handleSave=(params)=>{
       
       dispatch(edit({params,values:{title,content}}))
       navigate('/notes')
       console.log(title,content)
    }
    

  return (
    <>
    <div id='container-fluid'>
        
        <div className='addnote bg-white '>
               <div className='input'>
                <h3 className='top1'> Add a Note</h3>
               <input className='title' type="text" placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                <textarea className="form" id="exampleFormControlTextarea1" value={content} placeholder='Take a note...' rows="3" onChange={(e)=>setContent(e.target.value)} ></textarea>
        
               </div>
               <span className='btn btn-primary mt-2 ' onClick={()=>handleSave(params.id)}> Add Notes</span>
        
              </div>
              </div>
    </>
  )
}


export default Edit