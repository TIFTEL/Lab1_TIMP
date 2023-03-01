import React, {useState} from 'react';
import MyButton from "./UI/button/Mybutton";
import MyInput from "./UI/input/MyInput";
const Post = () => {
    const [posts, setPosts]=useState('')
    const[title,setTitle]=useState('')
    const addList = (e) =>{
        e.preventDefault()
        const newPosts={
            id: Date.now(),
            title
        }
        setPosts([posts, setPosts])
        console.log(newPosts)
    }

    return (
        <div className="App">
                <h1 className="Name">Tasker</h1>
                <form className="Inputbox">
                    <MyInput value ={title} onChange={e=> setTitle(e.target.value)} type="text" id="txt" placeholder="Введите вашу задачу" required/>
                    <MyButton onClick={addList}>тык</MyButton>
                </form>

                <div className="Works"></div>
        </div>
    );
};

export default Post;