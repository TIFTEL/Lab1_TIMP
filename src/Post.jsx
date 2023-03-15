import React, {useState} from 'react';
import './styles/app.css'
const Post = () => {
    const [posts, setPosts]=useState([])
    const [completed, setCompleted] = useState([])
    const[title,setTitle]=useState('')
    const clearPosts=()=>{
        setPosts([])
        setCompleted([])
    }
    const addList = () =>{
        if (title !== ''){
            setPosts([...posts, title])
            setCompleted([...completed, false])
            setTitle('')
        }
    }
    const changeCompleted = (id) => {
        let copy = Object.assign([], completed);
        copy[id] = !copy[id];
        setCompleted(copy);
    }

    return (
        <div className="App">
                <h1 className="Name">Tasker</h1>
                <form className="Inputbox">
                    <input value ={title} className="input" onChange={e=> setTitle(e.target.value)} type="text" id="txt" placeholder="Введите вашу задачу" required/>
                    <div onClick={addList} className="submit">Добавить</div>
                </form>
            {
                posts.length ? (
                    <div>
                    <div className="Works">
                        {
                            posts.map((el, id) => <div onClick={() => changeCompleted(id)} className={completed[id]? "task completed" : "task"} key={id}>{el}


                            </div>)
                        }
                    </div>
                    <div onClick={clearPosts} className="clearList" id="circ">очистить</div>
                    </div>
                ) : ''

            }

        </div>
    );
};

export default Post;