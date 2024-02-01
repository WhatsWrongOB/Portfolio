import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStore } from '../Context'
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify';

const Dashboard = () => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [technology, setTechnology] = useState('')
  const [link, setLink] = useState('')
  const { addProject, addLoading, logout } = useStore()
const navigate = useNavigate();

  const handleAdminSubmit = (e) => {
    e.preventDefault()

    try {
      const addSuccess = addProject(name, technology, description, link)
      if (addSuccess) {
        toast.success('Added to project successfully')
        setName('')
        setDescription('')
        setTechnology('')
        setLink('')

      }
      else {
        toast.error('Operation fail')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleLogout = async () => {
    try {
      const res = await logout()

      if (res) {
        navigate('/login')
        toast.success('Logout successfully')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <button className='logout' onClick={handleLogout}>Logout</button>
      <form className='adminForm' onSubmit={handleAdminSubmit}>
        <h1 className='formHeading'>Upload New Project</h1>
        <input type="text" className='input' name="name" placeholder='Project Name' value={name} onChange={e => setName(e.target.value)} required />
        <input type="text" className='input' name='technology' placeholder='Technology Used' value={technology} onChange={e => setTechnology(e.target.value)} required />
        <input type="text" className='description input' placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} required />
        <input type="text" name="link" placeholder='Link ' className='Link input' value={link} onChange={e => setLink(e.target.value)} required />
        <button className='formBtn' type='submit'>
          {
            addLoading ? <ClipLoader loading={loading} size={15} color='white' /> : 'Post'
          }
        </button>
      </form>
    </>
  )
}

export default Dashboard