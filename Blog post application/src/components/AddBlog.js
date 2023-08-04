import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
//import { bindActionCreators } from "redux";
import { actionCreators } from '../State/'
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";
import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
function AddBlog() {

    const navigate=useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state => state.blogReducer);
    console.log("from home to add data", data);

    const [title,setTitle]=useState("");
    const [categories,setCategories]=useState("");
    const [blog,setBlog]=useState("");
    const [likes,setlikes]=useState(0);

    function formSubmit(){
        if(title=="" || categories=="" || blog=="")
           alert("No fields can be empty");
        else{
            dispatch(actionCreators.addBlog({Title:title,Categories:categories,blog:blog,Likes:likes}));
            navigate("/");
        }
        
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

                        <h1 >New Blog</h1>


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
                                                            <input  onChange={(e)=>setTitle(e.target.value)} type="text" name="name" className="form-control" placeholder="Please enter title *" required />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label >Categories *</label>
                                                            <input  onChange={(e)=>setCategories(e.target.value)} type="text"  className="form-control" placeholder="Please enter categories *" required />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label >Content *</label>
                                                            <textarea onChange={(e)=>setBlog(e.target.value)}  className="form-control" placeholder="Write your contant here." rows="4" required ></textarea
                                                            >
                                                        </div>

                                                    </div>


                                                    <div className=" col-md-12 mt-2 ">

                                                      <Button onClick={formSubmit}>Submit</Button>

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

export default AddBlog;