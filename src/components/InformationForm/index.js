import { Button, Container, FormControl, Grid, Input, InputLabel } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { supabase } from '../../client';
import SendIcon from '@mui/icons-material/Send';

const initialState = {
    title: '',
    description: '',
    url:'',
    user: ''
  };

export default function InformationForm ({userId, setSearchValue}) {

    const [contents, setContents] = useState(initialState);

    const handleInputChange = (event) => {
        setContents({
            ...contents,
            [event.target.name] : event.target.value
        })
    }

    async function enviarDatos(e) {
      e.preventDefault();

      try {
        const { data, error } = await supabase.from('documentation').insert([contents]);
        if (error) {
          throw error
        }

        clearState();
        setSearchValue(null);
        alert("se inserto correctamente");

      } catch (error) {
        console.log('Error creating information: ', error.message)
      }
    }

    const clearState = () => {
        setContents({ ...initialState });
      };

    return (
        <div>
            <h1>Nuevo Contenido</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <label for="title">Titulo</label><br/>
                    <input type="text" placeholder="title" className="form-control" onChange={handleInputChange} name="title" required></input>
                </div>
                <div className="col-md-3">
                    <label for="link">Link</label><br/>
                    <input type="text" placeholder="link" className="form-control" onChange={handleInputChange} name="url" required></input>
                </div>
                <div className="col-md-3">
                    <label for="descirption">Descripcion</label><br/>
                    <textarea id="descritpion" placeholder="description" className="form-control" name="descritpion" rows="4" cols="50" onChange={handleInputChange} required/>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    )
}
    