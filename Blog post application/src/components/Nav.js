import React, { useState,useContext } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {actionCreators} from '../State/'
import { useDispatch } from "react-redux";
import { CommonContext } from "./CommonContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  "../css/NavEle.css"

function Nav() {

    const {id}=useContext(CommonContext);
    const data = useSelector(state => state.blogReducer);
    console.log("Data in Nav is", data);
    console.log("Nav bar id",id);
    const dispatch=useDispatch();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong" style={{backgroundColor:"black"}}>
                
                <div className="container-fluid d-flex justify-content-between">
                   
                    <div className="navbar-brand">Blogging</div>
                    <div></div>
                    <div className="d-flex">
                        <div className="mt-1 mx-3" style={{height:"30px",width:"90px",border:"1px solid white",color:"white",borderRadius:"10px"}}><FontAwesomeIcon className="mx-3" icon="fa-solid fa-thumbs-up" />{data.blogData[id].Likes}</div>
                       <Link to='/'><Button  className="NavBtn btn btn-dark btn-outline-light mx-3" onClick={()=>{dispatch(actionCreators.deleteBlog(data.blogData[id]))}}>Delete</Button></Link>
                       <Link to={`/editBlog/${id}`}><Button className="btn btn-dark btn-outline-light mx-3">Edit</Button></Link>
                    </div>
                       

                   
                   
                </div>
                
            </nav>
        </>
    )
}

export default Nav;