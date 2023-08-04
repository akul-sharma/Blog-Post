import React, {useEffect,useState} from "react";
import { CommonContext } from "./CommonContext";
import AddBlog from "./AddBlog";
import ViewBlog from "./ViewBlog";
import { Button } from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import {actionCreators} from '../State/'
import Navbar from "./Navbar";
import { useSelector } from "react-redux";



function Home(){
    const data=JSON.parse(localStorage.getItem("blog"));
    const [blogs,setBlogs]=useState(data);
    const dispatch=useDispatch();
    const newData=useSelector(state=>state.blogReducer);
    console.log("newData is:",newData);

    useEffect(()=>{
      console.log("new data is",newData.blogData);
      if(newData.blogData[0]!=undefined){
         console.log("old data is",blogs);
         console.log("new data is",newData.blogData);
         changeData();
      }
      
    },[])
    function changeData(){
       setBlogs(newData.blogData);
       localStorage.setItem("blog",JSON.stringify(newData.blogData));
       const temp=localStorage.getItem("blog");
       console.log("from local",temp);
    }
    

    return(
        <> 
        
          <Navbar/>
          <div className="container d-flex justify-content-end mt-5">
             <div></div>
             <Link to='/addBlog' onClick={()=>{dispatch(actionCreators.viewBlog(blogs))}}><Button>Add New Blog</Button></Link>
          </div>
          
          {
            blogs==null?
            <div className="d-flex justify-content-between mt-5">
               <div></div>
               <h1>No data found</h1>
               <div></div>
            </div>:
            blogs.map((item,i)=>
               <div className="container card mt-4" key={item}>
                <div className="d-flex">
                  <div className="card-body mt-3"><h4>{item.Title}</h4></div>     
                  <div className="mt-4"><Link to={`/viewBlog/${i}`}><Button onClick={()=>{dispatch(actionCreators.viewBlog(blogs))}}>Read More</Button></Link></div>
                </div>           
               </div>
              
            )
          }
         
        </>
    );
}

export default Home;

