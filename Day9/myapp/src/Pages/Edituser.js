import React from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import {getUseId,}
const Edituser=()=>
{
    const {id}=useParams()
    console.log(id)
    const navigate=useNavigate()
    const [data,setData]=useState({
        username:'',
        password:''
    })
    const fetchUser=async()=>
    {
        try{
            const res=await getUserId();
            setData(res.data)
        }
        catch(e)
        {
            console.log(e)
        }
    }
    const handleChange=(e)=>{
        setData({...data,[e.target.id]:e.target.value})
}
const handleSubmit=async(e)=>
{
    e.preventDefault();
    try{
    const res=await editUser(id,data)
    console.log(res).status
        if(res.status===201)
        {
            alert('user added');
            navigate('/')
        }
    }
    catch(e)
    {
    console.log(data)
    }
}
useEffect(()=>{
    fetchUser()
},[])
console.log(data)
    return(
        <>
        <form>
            <input type='text' id='username' placholder='username'/> 
            <input type='text' id='Password' placholder='password'/> 
            <button type='submit' className='submit-btn'>Submit</button> 
        </form>
        </>
    )
}
export default Edituser