import axios from 'axios'

const URL = 'http://localhost:3000'

const getUser=()=>axios.get(`${URL}/users`)
const getUserId=(id)=>axios.get(`${URL}/users/${id}`)
const addUser=(data)=>axios.post(`${URL}/addUser/`,data)
const getUser1=()=>axios.get(`${URL}/user1`)
const Edituser=(id,data)=>axios.put(`${URL}/Edituser/${id}`,data)
const DeleteUser=(id)=>axios.delete(`${URL}/DeleteUser/${id}`)
export default {getUser,getUserId,Edituser,getUser1,DeleteUser,addUser} 


