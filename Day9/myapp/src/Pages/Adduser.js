import React,{useState,useNavigate}from 'react'
import addUser from '../Services/Api.js'
const Adduser=()=>
{
    const navigate=useNavigate();
    const [data,setData]=useState(
        {
            username:'',
            password:'',

        }
    )
    const handleChange=(e)=>{
            setData({...data,[e.target.id]:e.target.value})
    }
    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        try{
        const res=await addUser(data)
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
export default Adduser