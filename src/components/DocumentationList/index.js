import React from 'react';
import { supabase } from '../../client';

export const DocumentationList = ({searchValue}) => {

  const [contents, setContents] = React.useState([])

  React.useEffect(()=> {
   
    fetchContents(searchValue);

    return () => {
      setContents([])
    }

  }, [searchValue])

  async function fetchContents(searchValue) {
    console.log("searchValue:", searchValue)
    // const query = searchValue.split(" ").join("&");
    // console.log("query", query)
    const { data, error } = await supabase.from('documentation').select('*').ilike('title', `%${searchValue}%`);
    console.log(`data: ${JSON.stringify(data)}`)
    setContents(data);
  }


    return (
        <>
        <section>
            <h2>Documentacion</h2>
            {
              contents?.map(content => (
                <div key={content.id}>
                    <h3>{content.title}</h3>
                    <a href={content.url} target="_blank">{content.url}</a>
                </div>
            ))}
        </section>
            
        </>
    )
}
