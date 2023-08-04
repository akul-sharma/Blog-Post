export const viewBlog=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:'view',
            payload:data
        })
    }
}

export const addBlog=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:'add',
            payload:data
        })
    }
}

export const editBlog=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:'edit',
            payload:data
        })
    }
}

export const deleteBlog=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:'delete',
            payload:data
        })
    }
}

export const likeBlog=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:'like',
            payload:data
        })
    }
}

