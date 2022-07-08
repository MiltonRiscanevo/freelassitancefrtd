import React from 'react'
import {useForm} from 'react-hook-form'

const Freeeform = () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
      fetch("https://freelassistance.herokuapp.com/user",{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data),
    })
    };
    
  return (
    <div>
        <h2>Freeeform</h2>
        <form onSubmit={handleSubmit(onSubmit)}>    
            <input placeholder='Cedula' {...register("cedula")} />
            <input placeholder='Nombre' {...register("nombre")} />
            <input placeholder='Apellido' {...register("apellido")} />
            <input placeholder='Clave' type='password' {...register("clave")} />
            <input placeholder='correo' type='email' {...register("correo")} />
            <input placeholder='Telefono' type="tel" {...register("telefono")} />
            <input type="submit" />    
        </form>
    </div>
  )
}

export default Freeeform