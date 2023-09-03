"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])
  
  const submiHandler = (e) => {
    e.preventDefault()
    setMainTask([...MainTask, {title, desc}])
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i) => {
    let copyText = [...MainTask]
    copyText.splice(i,1)
    setMainTask(copyText)
  }

  let render = <h2>No Task Available</h2>

 if (MainTask.length > 0) {
  render = MainTask.map((t,i) => {
    return (
      <li key={i} className='flex items-center justify-between mb-8'>
          <div className="flex items-center justify-between w-2/3">
            <h5 className='text-xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          <button onClick={() => {
            deleteHandler()
          }} className='bg-red-500 px-4 py-2 text-xl text-white'>&times;</button>
      </li>
    )
  })
 }

  return (
    <>
      <h1 className='bg-blue-500 text-5xl text-center text-white p-8'>My To Do App</h1>
      <form onSubmit={submiHandler}>
        <input type="text" 
          placeholder='Enter Your Title'
          className='border-zinc-800 border-4 rounded px-4 py-2 m-8'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />
        <input type="text" 
          placeholder='Enter Your Description'
          className='border-zinc-800 border-4 rounded px-4 py-2 m-5'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />
        <button className='bg-orange-500 px-4 py-2 text-white rounded m-5'>Add Task</button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>
            {render}
        </ul>
      </div>
    </>
  )
}

export default page