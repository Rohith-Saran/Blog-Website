import React, { useEffect,useState } from 'react'
import axios from 'axios'

function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
      axios.get('http://localhost:3001/getposts')
       .then(posts =>{
            setPosts(posts.data)
            console.log(posts.data)
       })
        .catch(err => {
            console.log(err)
        })
        
  }, []);


  return (

    <div>

      {posts.map(post => (
        <div className='post'>
          <img src={`http://localhost:3001/Images/${post.file}`}  className='post_img' />
          <div className="post_text">          
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
          </div>
        </div> 
        
      ))}
    </div>
  )
}

export default Home