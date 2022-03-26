import { useEffect, useState } from "react";
import { ContainerRegister, TittlePage, AllContent, Form, Input, Button, AllCards } from "./styled/styled";
import Card from "./components/cards/cards";
import Axios from 'axios';

function App() {
  const [values, setValues] = useState()
  const [list, setList] = useState()
  console.log(list)

  const changeValues = value => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    })) 
  }
  //adicionando item
  const clickButton = () =>{
      Axios.post('http://localhost:3001/register', {
        titulo: values.titulo,
        autor: values.autor,
        conteudo: values.conteudo,
    }).then(window.location.reload())
  }
  //recebendo lista do db
  useEffect(() => {
    Axios.get('http://localhost:3001/getlist').then((result) => {
      setList(result.data)
    })
  }, [])

  return (
    <AllContent>
      <ContainerRegister>
        <TittlePage>
        Adicionar nota
        </TittlePage>
        <Form method="get">
          <Input
            type='text'
            placeholder="Título da nota"
            name="titulo"
            required
            onChange={changeValues}
            />
          <Input
            type='text'
            placeholder="Autor"
            name="autor"
            required
            onChange={changeValues}
          />
          <Input
            type='text'
            placeholder="Sua nota"
            name="conteudo"
            required
            onChange={changeValues}
          />

          <Button onClick={() => clickButton()}>
            Enviar
          </Button>
        </Form>
      </ContainerRegister>

      {list&&(
        <AllCards>
            {list.map(item => {
             return (
             <Card
                key={item.idnotas}
                listContact={list}
                setListContact={setList}
                id={item.idnotas}
                titulo={item.titulo}
                autor={item.autor}
                conteudo={item.conteudo}
              />)
          })}
        </AllCards>
      )}
    </AllContent>
  );
}

export default App;