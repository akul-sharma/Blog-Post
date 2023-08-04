import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
//import { bindActionCreators } from "redux";
import { actionCreators } from '../State/'
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
function EditBlog() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.blogReducer);
    console.log("from view to edit", data);

    const [info,setInfo]=useState(data.blogData);

    const [title,setTitle]=useState("");
    const [categories,setCategories]=useState("");
    const [blog,setBlog]=useState("");
    const [likes,setlikes]=useState(0);

    const navigate=useNavigate();
    const id=useParams();

    useEffect(()=>{
        data.blogData.map((item,i)=>{       
            if(id.id==i){
                setTitle(item.Title);
                setCategories(item.Categories);
                setBlog(item.blog);
                setlikes(item.Likes);
            }
        })
    },[])

    function formSubmit(){
        if(title=="" || categories=="" || blog=="")
           alert("No fields can be empty");
        else{
            edit({Title:title,Categories:categories,blog:blog,Likes:likes});
            navigate("/");
        }
        
    }


    function edit(newData){
        const temp=info;
        info.map((item,i)=>{
            if(id.id==i){
               temp[i]=newData;
               setInfo(temp);
            }
        })
    }

    return (

        <>

           <Navbar/>

           <div className="mt-2 mx-4">
              <Link to='/'>Back to home page</Link>
            </div>

            {
                <div className="container">
                    <div className=" text-center mt-3 ">

                        <h1 >Edit Blog</h1>


                    </div>
                    <div className="row ">
                        <div className="col-lg-7 mx-auto">
                            <div className="card mt-2 mx-auto p-4 bg-light">
                                <div className="card-body bg-light">

                                    <div className="container">
                                        
                                            <div className="controls">

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label >Title *</label>
                                                            <input  defaultValue={title} onChange={(e)=>setTitle(e.target.value)} type="text" name="name" className="form-control" placeholder="Please enter title *" required="required" data-error="Firstname is required."/>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label >Categories *</label>
                                                            <input  defaultValue={categories}  onChange={(e)=>setCategories(e.target.value)} type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label >Content *</label>
                                                            <textarea  defaultValue={blog} onChange={(e)=>setBlog(e.target.value)} name="message" className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea
                                                            >
                                                        </div>

                                                    </div>


                                                    <div className="col-md-12">

                                                   <Button className="mt-2" onClick={formSubmit}>Submit</Button>

                                                    </div>

                                                </div>


                                            </div>
                                       
                                    </div>
                                </div>


                            </div>
                            

                        </div>
                        

                    </div>
                </div>

            }


        </>
    )
}

export default EditBlog;