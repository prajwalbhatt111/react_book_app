import React from 'react'
import {MdOutlineCancel} from 'react-icons/md'
import {Context} from './List'
import { useContext,useState } from 'react' 
import { collection,updateDoc,doc } from 'firebase/firestore'
import {db} from '../config/firebase'

const Edit = (props) => {
    const{id}=useContext(Context)
    console.log(id.available)
  
    const[author,setAuthor]=useState(id.author)
    const[title,setTitle]=useState(id.title)
    const[ids,setIds]=useState(id.id)
const[available,setAvailable]=useState(id.available)

    const handleedit=async()=>{
        const update=doc(db,'books',ids)
        await updateDoc(update,{title,author,available})
props.setAdd(false)
    }
  return (
   <>
<div className='absolute w-full h-full backdrop-blur top-0 z-40'></div>


   <div className='border border-black w-[70%] flex flex-col absolute z-50 top-[300px] left-[100px]
   
   
   justify-between items-center font-bold py-[30px] h-[350px]'>
     <MdOutlineCancel className='absolute top-0 right-2 cursor-pointer' size={30} onClick={()=>props.setAdd(false)}/>
    <input type="text" className='border border-black py-[10px] pl-[12px] w-[100%] rounded-md mt-6' value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <input type="text"  className='border border-black py-[10px] pl-[12px] w-[100%] rounded-md' value={author} onChange={(e)=>setAuthor(e.target.value)} />


    <div className='w-[70%]  mt-[10px]'>
    <button className=' w-[40%] py-[8px] bg-green-700 hover:bg-green-900 text-white' onClick={()=>setAvailable('Available')}>Available</button>
    <button className=' w-[60%]  py-[8px] bg-red-700 hover:bg-red-900 text-white' onClick={()=>setAvailable('Not Available')}>Not Available</button>
   
</div>







    <button className='border border-black w-[50%] bg-blue-900 text-white hover:bg-blue-950 py-[10px]' onClick={handleedit}>Edit</button>
   </div>
  
   
   </>
  )
}

export default Edit
