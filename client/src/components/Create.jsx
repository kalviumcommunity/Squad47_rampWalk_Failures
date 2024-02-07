import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Create() {
    const [Id,setId] = useState()
    const [Event,setEvent] = useState()
    const [Likes, setLikes] = useState()
    const [Rating, setRating] = useState()
    const [Views, setViews] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000",{
            Id : Id,
            Event : Event,
            Likes:Likes,
            Rating : Rating,
            Views : Views
        })
        .then(result=>{
            console.log(result)
            navigate("/")
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h2>Add user</h2>

        <div><label htmlFor=""><strong>Id</strong></label>
        <input type="text" placeholder='Event Id...' onChange={(e) => setId(e.target.value)} />
        </div>


        <div><label htmlFor=""><strong>Event</strong></label>
        <input type="text" placeholder='Event name...' onChange={(e) => setEvent(e.target.value)} />
        </div>

        <div><label htmlFor=""><strong>Likes</strong></label>
        <input type="text" placeholder='Event Likes....' onChange={(e) => setLikes(e.target.value)} />
        </div>

        <div><label htmlFor=""><strong>Rating</strong></label>
        <input type="text" placeholder='Event Ratings' onChange={(e) => setRating(e.target.value)}/>
        </div>

        <div><label htmlFor=""><strong>Views</strong></label>
        <input type="text" placeholder='Event Views' onChange={(e) => setViews(e.target.value)}/>
        </div>

        <div >
            <button className='btn' type ="submit">Add</button>
        </div>

      </form>
    </div>
  )
}

export default Create
