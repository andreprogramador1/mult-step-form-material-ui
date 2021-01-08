import React, { useContext } from 'react'
import {multiStepContext} from '../StepContext'

export const DisplayData = () => {
  const { finalData } = useContext(multiStepContext)
  return(
    <div className="container">
      {finalData.map((user,i) => (
        <ul key={i}>
          <li>{user.firstname}</li>
          <li>{user.lastname}</li>
          <li>{user.contact}</li>
          <li>{user.city}</li>
          <li>{user.adress}</li>
          <li>{user.number}</li>
          <li>{user.whatever}</li>
          <li>{user.dunno}</li>
        </ul>
      ))}
    </div>
  );
}