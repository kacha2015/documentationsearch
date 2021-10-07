import { CardContent, FormControl, InputLabel, Link, MenuItem, Select, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { supabase } from '../../client';

export const DocumentationList = ({searchValue, optionValue, userId}) => {

  const [contents, setContents] = React.useState([])

  React.useEffect(()=> {
   
    fetchContents(searchValue);

    return () => {
      setContents([])
    }

  }, [searchValue, optionValue])

  async function fetchContents(searchValue) {
    const { data, error } = await supabase.from('documentation').select('*').filter('user', 'eq', userId).ilike(optionValue, `%${searchValue}%`);
    setContents(data);
  }

  const handleChange = (e) => 
  {
    console.log("adsa",e.target.value)

  }

    return (
        <>
        <section>
            <h2>Documentacion</h2>
            
            {
              contents?.map(content => (
                <div key={content.id}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {content.title}
                    </Typography>
                    <Link href={content.url} target="_blank">{content.url}</Link>
                  </CardContent>
                </div>
            ))}
        </section>
            
        </>
    )
}
