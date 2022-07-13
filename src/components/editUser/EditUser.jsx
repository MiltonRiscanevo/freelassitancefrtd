import React from 'react'
import {useForm} from 'react-hook-form'


const EditUser = (props) => {
    const {register, handleSubmit} = useForm({
        defaultValues:{
            cedula:props.cedula
        }
    })
    let cedula = props.cedula
    const onSubmit = (data) =>{
        fetch(`https://freelassistance.herokuapp.com/user/${cedula}`,{
            method:'PUT',
            headers:{
              "Content-Type": "application/json",
            },
            body:JSON.stringify(data),
          })
      
    }

    
  return (
    <div>
        <h2>Usuario a editar</h2>
        <table>
        <thead>
            <th>Cedula</th> <th>Nombres</th> <th>Apellidos</th> <th>Claves</th> <th>Correo</th> <th>Telefono</th>
          </thead>
          <tbody >
              <td>{props.cedula}</td>
              <td>{props.nombres}</td>
              <td>{props.apellidos}</td>
              <td>{props.password}</td>
              <td>{props.correo}</td>
              <td>{props.telefono}</td>
            </tbody>
        </table>
        <form onSubmit={handleSubmit(onSubmit)}>    
            <input placeholder={props.cedula} {...register("cedula")} />
            <input placeholder={props.nombres} {...register("nombre")} />
            <input placeholder={props.apellidos} {...register("apellido")} />
            <input placeholder={props.password} type='password' {...register("clave")} />
            <input placeholder={props.correo} type='email' {...register("correo")} />
            <input placeholder={props.telefono} type="tel" {...register("telefono")} />
            <input type="submit" />    
        </form>

    </div>
  )
}

export default EditUser