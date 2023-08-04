const initialState={
    blogData:[]
}
const reducer=(state=initialState,action)=>{
    if(action.type=='view'){
        console.log(action.payload);
        return{
            blogData:action.payload
        } 
    }
    else if(action.type=='delete'){
        console.log("data in reducer",action.payload);
        if(state.blogData.length==1){
            console.log("i am here");
            localStorage.clear();
        }
        return {
            ...state,
            blogData:state.blogData.filter((item)=> item!=action.payload)
        }
    }
    else if(action.type=='add'){
        if(state.blogData==null)
           return {
              blogData:[action.payload]
           }
       return {
        ...state,
        blogData:[...state.blogData,action.payload]
       }
    }
    else if(action.type=='like'){
        console.log("likes are",state.blogData[action.payload]);
       state.blogData[action.payload].Likes=state.blogData[action.payload].Likes+1;
        return {
            ...state,
            blogData:[...state.blogData]
        }
    }
    else{
        return state;
    }
}

export default reducer;