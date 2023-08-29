import React, { useEffect,useState,createContext } from 'react'
import { getDocs,collection,deleteDoc,doc } from 'firebase/firestore'
import {db} from '../config/firebase'
import Edit from './Edit'
export const Context=createContext()

const List = () => {
    const[add,setAdd]=useState(false)
    const[list,setList]=useState([])
    const[id,setId]=useState([])
//  console.log(id)
    useEffect(()=>{
        const getdata=async()=>{
            const data=collection(db,'books')
            const resp=await getDocs(data)
            // console.log(resp)
          
           setList(resp.docs.map((doc)=>{return(
            {
                id:doc.id,
                ...doc.data()
            }
           )}))
           

        }
        getdata()
        

    },[])
    console.log(list)
    const handleondelete=async(id)=>{
        await deleteDoc(doc(db,'books',id))


        setList(
            list.filter((v)=>v.id!=id)
        )

    }
   const handleonedit=(v)=>{
    setAdd(true)
    setId(v)
   
   }
  return (
   <>
   <div className=' w-[80%] m-auto'>
    <div className='flex justify-between font-bold py-[12px] px-[8px]'>
        <div className='w-[3%]  '>
       
       <h2 >#</h2>
       </div>
       
      
       <div className=' w-[35%] flex justify-center'>
       <h2>Book Title</h2>
       </div>

       <div className=' w-[20%] flex justify-center'>
       
       <h2>Book Author</h2>
       </div>
      
       <div className=' w-[15%] flex justify-center'>
       <h2>Status</h2>
       </div>
      
      <div className=' w-[30%] flex justify-center'>
       <h2>Action</h2>
       </div>
      
       
    </div>


   </div>



   {
    list.map((v,i)=>
    <div className=' w-[80%] m-auto' key={i}>
     <div className='flex justify-between font-bold py-[12px] px-[8px]'>
         <div className='w-[3%]  '>
        
        <h2 >{i+1}</h2>
        </div>
        
       
        <div className=' w-[35%] flex justify-center'>
        <h2>{v.title}</h2>
        </div>
 
        <div className=' w-[20%] flex justify-center'>
        
        <h2>{v.author}</h2>
        </div>
       
        <div className=' w-[15%] flex justify-center'>
        <h2>{v.available}</h2>
        </div>
       
       <div className=' w-[30%] flex justify-around'>
       <button className=' w-[30%] bg-gray-600 text-white rounded-sm hover:bg-gray-700' onClick={()=>handleonedit(v)}>Edit</button>
       <button className=' w-[50%] bg-red-700 text-white py-[3px] rounded-sm hover:bg-red-800' onClick={()=>handleondelete(v.id)}>Delete</button>
        </div>
       
        
     </div>
 
 
    </div>)
   }
   <Context.Provider value={{id}}>
   {
    (add)?<Edit setAdd={setAdd} add={add} />:""
 }
</Context.Provider>

   </>
  )
}

export default List
