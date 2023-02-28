import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id : '1', title : 'abcd', content : 'xyz...' },
    {id : '1', title : 'abcd', content : 'xyz...' },
]

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {
        postAdded : {
            prepare(title, content){
                return {
                    payload : {
                        id : nanoid(),
                        title, 
                        content
                    }
                }
            },
            reducer(state, action) {
                state.push(action.payload)
            }
        }
    }
})
 
export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer