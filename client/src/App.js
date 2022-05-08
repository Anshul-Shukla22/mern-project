import React, { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
  const [Blogs, setBlogs] = useState();
 const base=process.env.REACT_APP_BASE_URL || 'http://localhost:3080';
  const getBlogs = () => {
    axios.get(`${base}/show`)
    .then((res)=>{
      setBlogs(res.data)
    }).catch(err=>console.log(err))
  }
  useEffect(() => {
    getBlogs();
  }, []);

  const DeleteBlog=(id) =>{
      console.log(id);
      axios.get(`${base}/delete/${id}`)
      .then((res)=>{
        getBlogs();
      }).catch(err=>console.log(err))
  }
  
  const CreateBlog=(e) =>{
    e.preventDefault();
    axios.post(`${base}/create`,{
      title:e.target[0].value,
      desc:e.target[1].value
    })
    .then((res)=>{
      getBlogs();
    }).catch(err=>console.log(err))
}
  return (
    <div>
      {Blogs && Blogs.map(e =>(
        <div className="box" key={e._id}>
        <div className="title">title : {e.title}</div>
        <div className="desc">desc : {e.desc}</div><br />
        <button onClick={()=>DeleteBlog(e._id)}>Delete</button>
      </div>
      ))}
      <form onSubmit={CreateBlog}>
         <input type="text" placeholder='Title' />
         <input type="text" placeholder='Description' />
         <input type="submit" />
      </form>
    </div>
  );
}

export default App;
