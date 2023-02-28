import React, {useState} from 'react'
import { useDispatch } from "react-redux"
import { postAdded } from './postsSlice'


const AddPostForm = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    
    const onSavePostClicked = () => {
        if(title && content){
            dispatch(
                postAdded(title, content)
            )
            setTitle('')
            setContent('')
        }
    }

  return ( 
    <section>
        <h2>Add a new TO/DO</h2>
        <form>
            <label htmlFor="postTitle">Title : </label>
            <input 
                type="text"
                id = "postTitle"
                name = "postTitle"
                value = {title}
                onChange = {onTitleChanged}></input>
            <label htmlFor = "postContent">Content : </label>
            <textarea
                id = "postContent"
                name = "postContent"
                value = {content}
                onChange = {onContentChanged}
            />
            <button type="button"
                    onClick={onSavePostClicked}>Save</button>
        </form>
    </section>
  )
}

export default AddPostForm
