import React from 'react'
import {collection,addDoc} from 'firebase/firestore'
import {db} from '../config/firebase'
import { useEffect,useState } from 'react'


const Details = () => {
    const[title,setTitle]=useState("")
    const[author,setAuthor]=useState("")
    const[available,setAvailable]=useState("")
    // console.log(title)
    // console.log(author)
    // console.log(available)
    const handleonsubmit=async()=>{

const newbooks={
    author,
    title,
    available
}
try{
const data=collection(db,'books')
await addDoc(data,newbooks)
}
catch(error){
    console.log(error)
}
setTitle("")
setAuthor("")
    }
  return (
   <>
   <div className=' w-[30%] m-auto h-[300px] mt-[20px]  '>

        <div>
<input type="text" placeholder='Book Title' className='border border-black w-[100%] h-[40px] py-6 px-6 rounded-lg' value={title}
onChange={(e)=>setTitle(e.target.value)}


/>
</div>
<div>
<input type="text" placeholder='Book Author' className='border border-black w-[100%] h-[40px]  py-6 px-6 rounded-lg mt-[10px]'
value={author} onChange={(e)=>setAuthor(e.target.value)}


/>

</div>
<div className='w-[70%]  mt-[10px]'>
    <button className=' w-[40%] py-[8px] bg-green-700 hover:bg-green-900 text-white'
    onClick={()=>setAvailable('Available')}
    
    >Available</button>
    <button className=' w-[60%]  py-[8px] bg-red-700 hover:bg-red-900 text-white'
    onClick={()=>setAvailable('Not Available')}
    
    >Not Available</button>
   
</div>

<button className=' w-[100%] py-[12px] mt-[10px] font-bold bg-blue-800 hover:bg-blue-950 rounded-lg text-white'onClick={handleonsubmit}>ADD/Update</button>




   </div>
   
   
   
   </>
  )
}

export default Details
