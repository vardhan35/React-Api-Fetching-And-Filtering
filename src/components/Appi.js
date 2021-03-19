import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Appi = () => {
    const [list, setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${searchTerm}`)
        .then(res =>{
            console.log(res)
            setList(res.data)
        })
        .catch(err =>{
            console.log(err)
        })

    }, [searchTerm])

    const handleChange =(e) =>{
        setSearchTerm(e.target.value);
    }

    const filterData =() =>{
        if(searchTerm === null){
            setList(list);
        }else{
            const newList = list.filter(item => item.title.toLowerCase().includes(searchTerm));
            setList(newList);
        }
    }


    return (
        <div className='posts'>
            <input type="text" value={searchTerm} onChange={handleChange}/>
            <button onClick={filterData} >Submit</button>
            {
                list.map((item) => {
                    const{ id ,title, body} = item;
                    return(
                    <div key={id} className='post'>
                        <h1>{title}</h1>
                        <p>{body}</p>
                    </div>
                    );
                })
            }
        </div>
    )
}

export default Appi
