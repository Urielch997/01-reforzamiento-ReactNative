import { useUsuarios } from '../hooks/useUsuario'
import {  users } from '../interfaces/reqRes'

export const Usuarios = () => {
    const {users,paginaAnterior,paginaSiguiente} = useUsuarios();

    const renderItem = ({ first_name, last_name, id, avatar, email }: users) => {
        return (
            <tr key={id.toString()}>
                <td><img src={avatar} alt={first_name} style={{ width: 35, borderRadius: 100 }} /></td>
                <td>{first_name} - {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(usuario => (
                            renderItem(usuario)
                        ))
                    }
                </tbody>
            </table>
            <button
            className='btn btn-primary'
            onClick={paginaAnterior}>
                Anteriores
            </button>
            <button
                className='btn btn-primary'
                onClick={paginaSiguiente}
            >
                Siguiente
            </button>
        </>
    )
}