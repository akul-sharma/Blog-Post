import React, { useEffect, useState } from "react";
import { CommonContext } from "./CommonContext";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import '../css/blog.css'
import Nav from './Nav'
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
//import { bindActionCreators } from "redux";
import {actionCreators} from '../State/'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function ViewBlog() {
    const data = useSelector(state => state.blogReducer);
    const dispatch=useDispatch();
    console.log("In view blog", data.blogData);
    const id=useParams();
    console.log("id in view",id);
    const [Blog,setBlog]=useState({});

    useEffect(()=>{
        data.blogData.map((item,i)=>{       
            if(id.id==i){
                console.log(item);
                setBlog(item);
            }
        })
    },[])

    console.log("blog data is",Blog);
    console.log("Whole data is",data.blogData);

    return (
        <>
            <CommonContext.Provider value={{id: id.id}}>
                <Nav />
            </CommonContext.Provider>
            
            <div className="d-flex justify-content-between mx-4 mt-3">
               <Link to='/'>Back to home page</Link>
               <div><Button style={{boxShadow:"1px 1px black"}} onClick={()=>{dispatch(actionCreators.likeBlog(id.id))}}><FontAwesomeIcon className="mx-2" icon="fa-solid fa-thumbs-up" />Like</Button></div>
            </div>
            

           
            <div className="container  blogSpace" >
                <div className="card blog">
                    <div className="card__header">
                        <img src={`https://source.unsplash.com/600x400/?${Blog.Categories}`} alt="card__image" className="card__image" width="600"/>
                    </div>
                    <div className="blog__body">
                        <span className="tag tag-blue">{Blog.Categories}</span>
                        <h4>{Blog.Title}</h4>
                        <p>{Blog.blog}</p>
                    </div>
                   
                </div>
            </div>
        </>
    );
}

export default ViewBlog;
