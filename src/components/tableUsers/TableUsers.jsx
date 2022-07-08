import React, {useEffect, useState} from 'react'


const TableUsers = () => {

  const [getData, setGetData] = useState([])

    const getUsersApi = async()=>{
      await fetch("https://freelassistance.herokuapp.com/getusers").then((res)=>{
          if (!res.ok) throw {res}
          return res.json()
        }).then((data)=>{
          console.log(data);
          setGetData(data)
        }
      )
    }
    
    const deleteUser =async (cedula)=>{
        await fetch(`https://freelassistance.herokuapp.com/user/${cedula}`,{
        method:"DELETE",
        headers:{
          "Content-Type": "application/json",
        },
      })
    }

    useEffect(() => {
      getUsersApi()
    }, [])

    

  return (
    <div>
      <h2>Usuarios sistema</h2>
      <div>
        <table>
          <thead>
            <th>Cedula</th> <th>Nombres</th> <th>Apellidos</th> <th>Claves</th> <th>Correo</th>
          </thead>
          {getData.map((e, index)=>( 
            <tbody key={index}>
              <td>{e.cedula}</td>
              <td>{e.nombres}</td>
              <td>{e.apellidos}</td>
              <td>{e.password}</td>
              <td>{e.correo}</td>
              <td>
                <button>Editar</button>
                <button onClick={()=>{deleteUser(e.cedula)}}>Borrar</button>
              </td>
            </tbody>
        ))}
         </table> 
      </div>
    </div>
  )
}

export default TableUsers