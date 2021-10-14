import React, {useEffect, useState} from 'react';
import { Button, Container, FormControl, Grid, Input, InputLabel } from '@material-ui/core';
import { supabase } from '../../client';

const initialState = {
    title: '',
    description: '',
    url:'',
    user: ''
  };

export default function InformationForm ({userId, setSearchValue}) {

    const [contents, setContents] = useState({...initialState, user: userId});

    const handleInputChange = (event) => {
        setContents({
            ...contents,
            [event.target.name] : event.target.value
        })
    }

    async function enviarDatos(e) {
      e.preventDefault();

      try {
        const { data, error } = await supabase.from('documentation').insert(contents);
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
                    <label htmlFor="title">Titulo</label><br/>
                    <input type="text" placeholder="title" className="form-control" onChange={handleInputChange} name="title" required></input>
                </div>
                <div className="col-md-3">
                    <label htmlFor="link">Link</label><br/>
                    <input type="text" placeholder="link" className="form-control" onChange={handleInputChange} name="url" required></input>
                </div>
                <div className="col-md-3">
                    <label htmlFor="description">Descripcion</label><br/>
                    <textarea id="description" placeholder="description" className="form-control" name="description" rows="4" cols="50" onChange={handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    )
}
    