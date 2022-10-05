import React, { useEffect, useState } from 'react'
import {getDocs,collection, deleteDoc,doc} from 'firebase/firestore'
import {db} from '../firebase-config'
import { async } from '@firebase/util'

 function Home() {


  const  [postList,setPostList]  = useState([])
  const postCollectionRef = collection(db, 'posts')


  useEffect(()=>{
    const getPosts = async () =>{
      const data = await getDocs(postCollectionRef)
       setPostList(data.docs.map((doc)=>({...doc.data(),id: doc.data.id})))
    };
    getPosts();
  })

   
  return (
    <div className='homePage'>

      {postList.map((post)=>{
        return <div className='post'> 
        
        <div className='postHeader'>  
        
        
        <div className='title'> <h1> {post.title} </h1></div>

         
        
        
        
        </div>

        <div className='postTextContainer'> {post.postText}</div>
        <h3>@{post.author.name}</h3>
          
           
        
        
        </div>
      })}
   

    </div>
  )
}
export default Home;