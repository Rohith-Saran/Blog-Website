import React from 'react'
import {useState} from 'react'
import axios from 'axios'

function Create() {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

    }       



  return (
    <div className='container'>

        <div className="post">

            <form onSubmit={handleSubmit}>
                <h1 style={{fontFamily:'Copperplate'}}>Create Post</h1>
                <input type="text" placeholder='Title' onChange={(e) => {setTitle(e.target.value)}} />
                <textarea name="desc" id="" cols="30" rows="10" placeholder='Enter Description'
                 onChange={(e) => {setDesc(e.target.value)}}></textarea>
                <input type="file" placeholder='Select File' className='File' 
                onChange={(e) => {setFile(e.target.files[0])}} />
                <button type='submit'>Post</button>
            </form>

        </div>

    </div>
  )
}

export default Create