import React, { useContext, useState } from 'react'
import {multiStepContext} from '../StepContext'

export const DisplayData = () => {

  const { finalData } = useContext(multiStepContext)
  const [search, setSearch] = useState('')

  return(
    <div className="container" style={{ 
      
     }}>

      <input type='text' placeholder='Search' onChange={e => setSearch(e.target.value)} />

      {finalData.filter((user) => {
        return search === '' ? true : user.firstname.toLowerCase().includes(search.toLowerCase())
      }).map((user,i) => (
        <ul key={i} style={{ 
          listStyle: 'none',
          backgroundColor: 'aliceblue',
          padding: '10px 50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
          }}>

          <li style={{
            marginTop: '10px',
            backgroundColor:' #e0f1ff',
            borderRadius: '500px',
            padding: 'inherit'
          }}>{user.firstname}</li>
          <li style={{
            marginTop: '10px',
            backgroundColor:' #e0f1ff',
            borderRadius: '500px',
            padding: 'inherit'
          }}>{user.lastname}</li>
          <li style={{
            marginTop: '10px',
            backgroundColor:' #e0f1ff',
            borderRadius: '500px',
            padding: 'inherit'
          }}>{user.contact}</li>
          <li style={{
            marginTop: '10px',
            backgroundColor:' #e0f1ff',
            borderRadius: '500px',
            padding: 'inherit'
          }}>{user.city}</li>
          <li style={{
            marginTop: '10px',
            backgroundColor:' #e0f1ff',
            borderRadius: '500px',
            padding: 'inherit'
          }}>{user.adress}</li>
          <li style={{
            marginTop: '10px',
            backgroundColor:' #e0f1ff',
            borderRadius: '500px',
            padding: 'inherit'
          }}>{user.number}</li>
          <li style={{
            marginTop: '10px',
            backgroundColor:' #e0f1ff',
            borderRadius: '500px',
            padding: 'inherit'
          }}>{user.whatever}</li>
          <li style={{
            marginTop: '10px',
            backgroundColor:' #e0f1ff',
            borderRadius: '500px',
            padding: 'inherit'
          }}>{user.dunno}</li>

        </ul>
      ))}
    </div>
  );
}