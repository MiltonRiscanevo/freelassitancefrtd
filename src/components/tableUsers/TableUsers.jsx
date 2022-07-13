import React, {useEffect, useState} from 'react'
import EditUser from '../editUser/EditUser'


const TableUsers = () => {

  const [getData, setGetData] = useState([])
  const [getDataUser, setGetDataUser] = useState({
    cedula:"",
    nombres:"",
    apellidos:"",
    password:"",
    correo:""
  })
  

    const getUsersApi = async()=>{
      await fetch("https://freelassistance.herokuapp.com/getusers").then((res)=>{
          if (!res.ok) throw {res}
          return res.json()
        }).then((data)=>{
          setGetData(data)
        }
      )
    }

    const editUser = (cedula, nombres, apellidos,password,correo,telefono)=>{
      let getUserEdit={
        cedula: cedula,
        nombres: nombres,
        apellidos: apellidos,
        password: password,
        correo: correo,
        telefono:telefono
      }

      return setGetDataUser(getUserEdit)

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
      editUser()
    }, [])

    

  return (
    <div>
      <h2>Usuarios sistema</h2>
      <div>
        <table>
          <thead>
            <th>Cedula</th> <th>Nombres</th> <th>Apellidos</th> <th>Claves</th> <th>Correo</th> <th>Telefono</th>
          </thead>
          {getData.map((e, index)=>( 
            <tbody key={index}>
              <td>{e.cedula}</td>
              <td>{e.nombres}</td>
              <td>{e.apellidos}</td>
              <td>{e.password}</td>
              <td>{e.correo}</td>
              <td>{e.telefono}</td>
              <td>
                <button onClick={()=>{editUser(e.cedula, e.nombres, e.apellidos, e.password, e.correo, e.telefono)}} >Editar</button>
                <button onClick={()=>{deleteUser(e.cedula)}}>Borrar</button>
              </td>
            </tbody>
        ))}
         </table>
          <div>
             <EditUser 
             cedula={getDataUser.cedula}  
             nombres = {getDataUser.nombres}
             apellidos= {getDataUser.apellidos}
             password={getDataUser.password}
             correo = {getDataUser.correo}
             telefono = {getDataUser.telefono}
             /> 
          </div>
      </div>
    </div>
  )
}

export default TableUsers