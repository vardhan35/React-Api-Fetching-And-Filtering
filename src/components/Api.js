import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Api = () => {
    const[list, setlist] = useState({});
    const [id, setId] = useState(1);
    const [idOnButtonClic, setIdOnButtonClic] = useState(1);

    const onButtonClick =() =>{
        setIdOnButtonClic(id);
    }

    useEffect (() =>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idOnButtonClic}`)
        .then(res =>{
            setlist(res.data);
        })
        .catch(err =>{
            console.log(err)
        })
    }, [idOnButtonClic] )

    return (
        <div className='posts'>
            <input type="text" value={id} onChange={e =>setId(e.target.value)}/>
            <button onClick={onButtonClick}>submit</button>
            <h1>{list.title}</h1>
        </div>
    )
}

export default Api
