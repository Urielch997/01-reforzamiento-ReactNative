interface Direccion{
    pais:string;
    casaNo:number;
}

interface Persona{
    nombreCompleto:string;
    edad:number;
    direccion:Direccion;
}


export const ObjetosLiterales = () =>{
    const persona:Persona = {
        nombreCompleto:'uriel',
        edad:23,
        direccion:{
            pais:'El salvador',
            casaNo:625
        }
    }

    return(
        <>
            <h3>Objetos literales</h3>
            {JSON.stringify(persona,null,2)}
        </>
    )
}
