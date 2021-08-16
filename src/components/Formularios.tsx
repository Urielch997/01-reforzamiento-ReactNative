import { useForm } from "../hooks/useForm"

export const Formularios = () => {
    const {state,email,password,onChange} = useForm({
        password:'1231',
        email:'test@test.com',
    });

    return (<>
        <h3>Formularios</h3>
        <input
            className='form-control'
            type='text'
            placeholder='email'
            value={email}
            onChange={({target})=>onChange(target.value,'email')}
             />
        <input
            className='form-control mt-2 mb-2'
            type='text'
            placeholder='Password' 
            value={password}
            onChange={({target})=>onChange(target.value,'password')}
            />
            <code>{JSON.stringify(state)}</code>
    </>)
}