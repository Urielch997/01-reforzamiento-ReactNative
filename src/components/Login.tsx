import { useReducer, useEffect } from "react"

//Interfaz para definir los tipos de datos del state del reducer
interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre:string;
}

//valores del state del reducer
const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre:''
}

type LoginPayload = {username:string,nombre:string}

//Acciones del reducer
type AuthAction = 
{ type: 'logout' } |
{ type: 'login',payload:LoginPayload }

//Retorno del componente
const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                token:'',
                nombre:'',
                username:'',
                validando: false,
            }
        case 'login':
            const {nombre,username} = action.payload;
            return {
                validando:false,
                token:'asdasda',
                nombre,
                username
            }
    }
}

export const Login = () => {
    const [{ validando, token, username }, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500)
    }, [])

    if (validando) {
        return (
            <div className='alert alert-info'>Validando...</div>
        )
    }

    const login = () =>{
        dispatch({type:'login',payload:{
            username:'Urielch997',
            nombre:'Uriel Hernandez'
        }})
    }

    const logout = () =>{
        dispatch({
            type:'logout'
        })
    }

    return (
        <>
            <h3>Login</h3>
            {
                (token)
                    ? <div className='alert alert-success'>Autenticado como : {username}</div>
                    : <div className='alert alert-danger'>No autenticado</div>
            }
            {
                (token)
                    ? <button className='btn btn-danger' onClick={logout}>Logout</button>
                    : <button className='btn btn-primary' onClick={login}>Login</button>
            }
        </>)
}