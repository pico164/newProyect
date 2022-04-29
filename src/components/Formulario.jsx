import React, {useState} from 'react'

function Formulario() {
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [correo, setCorreo] = React.useState('');
    const [telefono, setTelefono] = React.useState('');
    const [lista, setLista] = React.useState([]);
    const guardarDatos=(e)=>{
        e.preventDefault()

        if(!nombre.trim()){
            alert('Ingresar el nombre')
            return
        }
        if (!apellido.trim()) {
            alert('Ingrese el apellido')
            return
        }

        if (!correo.trim()) {
            alert('Ingrese el correo')
            return
        }

        if (!telefono.trim()) {
            alert('Ingrese el numero de telefono')
            return
        }

        const ida = Date.now();


        console.log('Agregar'+nombre+apellido)

        setLista([
           ...lista,{Nombre:nombre,Apellido:apellido,Correo:correo,Telefono:telefono,Id:ida}
        ])
        e.target.reset()
        setNombre('')
        setApellido('')
        setCorreo('')
        setTelefono('')

    };

    const eliminarDatos=(user)=>{
        const newlist = lista.filter(item => item.Id!==user);
        console.log(newlist);
        if (newlist) {
            const valor=window.confirm('Realmente desea eliminar el usuario')
            if (valor) {
                setLista(newlist);
            }
        }
    }
  return (
    <div className="centrar">
        <h1>Form</h1>
        <form onSubmit={guardarDatos}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4'>
                        <input type="number" placeholder='Id' className='form-control mb-3' disabled='disabled' />
                        <input type="text" placeholder='Nombres' className='form-control mb-3' onChange={(e)=>setNombre(e.target.value)}/>
                        <input type="text" placeholder='Apellidos' className='form-control mb-3' onChange={(e)=>setApellido(e.target.value)}/>
                        <input type="number" placeholder='Telefono' className='form-control mb-3' onChange={(e)=>setTelefono(e.target.value)}/>
                        <input type="email" placeholder='Correo' className='form-control mb-3' onChange={(e)=>setCorreo(e.target.value)}/>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary mb-5'>Agregar</button>
            </div>
        </form>

        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
            {
                lista.map((element,index)=>(
                    <tr key={element.Id}>
                        <td>{element.Id}</td>
                        <td>{element.Nombre}</td>
                        <td>{element.Apellido}</td>
                        <td>{element.Telefono}</td>
                        <td>{element.Correo}</td>
                        <td><button className='btn btn-danger' onClick={()=>eliminarDatos(element.Id)}>Eliminar</button></td>
                    </tr>
                ))
            }
            </tbody>
            
        </table>
    </div>
  )
}

export default Formulario