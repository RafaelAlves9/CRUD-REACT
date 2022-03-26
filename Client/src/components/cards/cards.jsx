//style
import { CardItem, Titulo, Autor, Conteudo } from "./styled";
import FormDialog from "../dialog/dialog";
import { useState } from "react";

export default function Card(props){
    const [open, setOpen] = useState(false)

    return(
        <>
            <FormDialog 
                open={open}
                setOpen={setOpen}
                id={props.id}
                titulo={props.titulo}
                autor={props.autor}
                conteudo={props.conteudo}
                listNotas={props.listNotas}
                setListNotas={props.setListNotas}
            />
            <CardItem onClick={() => setOpen(true)}>
              
                <Titulo>
                    Titulo:
                    <p>{props.titulo}</p>
                </Titulo>
                <Autor>
                    Autor:
                    <p>{props.autor}</p>
                </Autor>
                <Conteudo>
                    Nota:
                    <p>{props.conteudo}</p>
                </Conteudo>
            </CardItem>
        </>
    )
}