import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'


const Home = () => {
    const [data,setData] = useState([])
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery]= useState('')
    const [expandedPost, setExpandedPost] = useState(null);

    
    useEffect( ()=>{
        async function fetchData () {
        await fetch("https://kendrixblogs.onrender.com/get-all-blogs")
        .then(res=> res.json())
        .then(data => setData(data))
        .catch(err=> console.log(err))
        };
        fetchData();
    },[])

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedQuery(query)
        },300);

        return()=>{
            clearTimeout(handler)
        }
    },[query])

    const filteredData = data.filter(post=> post.title.toLowerCase().includes(debouncedQuery.toLowerCase()));

    const maxLength = 200;

   
    

  return (
    <>
        <Navbar query={query} setQuery={setQuery} />
        <div className='flex flex-col mx-3'>
            {filteredData.map(post=> {
                const isLong = post.description.length > maxLength;
                const isExpanded = expandedPost === post._id;
                const displayedtext = isExpanded ? post.description : post.description.slice(0,maxLength) + (isLong ? "..." : "" )

             return (<div key={post._id} className='w-full mb-10 mt-3 flex-col lg:px-50 md:px-20'>
                <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl'>{post.title}</h1>
                <div className='flex justify-between my-1 md:my-2 opacity-75 '>
                    <p className=''>Uploaded on: {new Date(post.createdAt).toLocaleDateString()} </p>
                    <p className=''>Author: {post.author}</p>
                </div>
                <img 
            src={`https://kendrixblogs.onrender.com/images/${post.imgURL}`} 
            alt={post.title} 
            className='min-h-1/2'                
                />
                 
                    <p className='text-lg md:text-xl opacity-85 mt-2 text-justify'>{displayedtext}
                        {isLong && (
                    <span
                    onClick={()=>setExpandedPost(isExpanded ? null : post._id)}
                    className='inline cursor-pointer'>
                        {isExpanded? "See Less" : "Read More"}
                    </span>
                 )}
                    </p>
                 
    
            
            </div>)
        })}
            

        </div>
    </>
  )
}


export default Home
