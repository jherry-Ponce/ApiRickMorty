import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from "react"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  };
export const Modall=(valor)=>{
    

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log(valor.valor);
    setOpen(true)};
  const handleClose = () => setOpen(false);
    
  return (
    <div>
      <Button onClick={handleOpen}>ver imagen</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <img src={valor.valor} alt=""/>
        </Box>
      </Modal>
    </div>
  );
}

    
    
