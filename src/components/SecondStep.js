import React from 'react'
import { Button, TextField } from '@material-ui/core'

export const SecondStep = () => {
  return(
    <>
      <div>
        <TextField label="First name" margin="normal" variant="outlined" color="secondary"/>
      </div>
      <div>
        <TextField label="Last name" margin="normal" variant="outlined" color="secondary"/>
      </div>
      <div>
        <TextField label="Contact number" margin="normal" variant="outlined" color="secondary"/>
      </div>
      <div>
        <Button  variant="contained" color="primary">Next</Button>
      </div>
    </>
  );
}