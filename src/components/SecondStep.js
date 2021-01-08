import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core'
import {multiStepContext} from '../StepContext'

export const SecondStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext)
  return(
    <>
      <div>
        <TextField label="City" value={userData['city']} onChange={ e => setUserData({...userData, 'city' : e.target.value}) } margin="normal" variant="outlined" color="secondary"/>
      </div>
      <div>
        <TextField label="Adress" value={userData['adress']} onChange={ e => setUserData({...userData, 'adress' : e.target.value}) } margin="normal" variant="outlined" color="secondary"/>
      </div>
      <div>
        <TextField label="Number" value={userData['number']} onChange={ e => setUserData({...userData, 'number' : e.target.value}) } margin="normal" variant="outlined" color="secondary"/>
      </div>
      <div>
        <Button  variant="contained" onClick={() => {setStep(1)}} color="secondary">Back</Button><span> </span>
        <Button  variant="contained" onClick={() => {setStep(3)}} color="primary">Next</Button>
      </div>
    </>
  );
}