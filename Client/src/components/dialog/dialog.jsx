import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";


export default function FormDialog(props) {
  
  const [editValue, setEditValues] = useState({
      id: props.id,
      titulo: props.titulo,
      autor: props.autor,
      conteudo: props.conteudo
  })

  const handleChangeValues = values =>{
      setEditValues(prevValues =>({
          ...prevValues,
          [values.target.name]: values.target.value
    }))
  }

  const handleClose = () => {
    props.setOpen(false);
    window.location.reload()
  }

  const handleEditContact = () =>{
      axios.put('http://localhost:3001/edit',{
          id: editValue.id,
          titulo: editValue.titulo,
          autor: editValue.autor,
          conteudo: editValue.conteudo,
      })
    handleClose()
  }

  const handleDeleteContact = () => {
    axios.delete(`http://localhost:3001/delete/${editValue.id}`).then(() => {
      props.setListContact(
        props.listContact.filter((value) => {
          return value.id != editValue.id;
        })
      );
    });
    handleClose();
  };
   
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar nota</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="titulo"
            label="Título"
            defaultValue={props.titulo}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="autor"
            label="Autor"
            defaultValue={props.autor}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="conteudo"
            label="Nota"
            defaultValue={props.conteudo}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button color="primary" onClick={() => handleDeleteContact()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditContact()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}