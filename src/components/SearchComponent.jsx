import React, {useState, useEffect} from 'react'
import { useKeycloak } from '@react-keycloak/web';

const SearchComponent = () => {

  const { keycloak } = useKeycloak();
  //setear los hooks useState
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = 'http://localhost:3001/post'


  const showData = async () => {
    const response = await fetch(URL,{  headers: new Headers({
        'Authorization':
          'Bearer ' + keycloak.token
      }),})
    const data = await response.json()
    console.log(data)
    setUsers(data)
  }   
   //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }

   const results = !search ? users : users.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [keycloak.authenticated])
  
  //renderizamos la vista
  return (
    <div className='container-table'>
        <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white'>
                    <th>Autor</th>
                    <th>Post</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                { results.map( (post) => (
                    <tr key={post.id}>
                        <td>{post.autor.alias}</td>
                        <td>{post.nombre}</td>
                        <td>{post.fecha}</td>
                    </tr>                    
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default SearchComponent