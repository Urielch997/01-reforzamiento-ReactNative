export const TiposBasicos = () =>{
    const nombre:string = 'Uriel';
    const edad:number = 23;
    const estaActivo:boolean = false;
    const poderes:string[] = [];

    //"Velocidad","Volar","Respirar bajo el agua"

    poderes.push('Velocidad')
    poderes.push('Volar')
    poderes.push("Respirar bajo el agua")

    return <>
        <h3>Tipos basicos</h3>
        {nombre}, {edad} , {(estaActivo) ? 'activo' : 'inactivo'}
        <br/> 
        {poderes.join(', ')}
    </>
}