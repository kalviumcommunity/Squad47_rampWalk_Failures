import React from 'react'
import data from './data.json'

function Info() {
  return (
    <div>
      {data.map((val, index)=>{
        return (
          <div key={index}>
            <h1>{val.Event}</h1>
            <p>Likes: {val.Likes}</p>
            <p>Rating: {val.Rating}</p>
            <p>Views: {val.Views}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Info
