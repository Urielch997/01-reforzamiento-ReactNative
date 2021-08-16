import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../Api/reqRes";
import { ReqResponseListado, users } from "../interfaces/reqRes";

export const useUsuarios = () => {
    const [users, setUsers] = useState<users[]>([]);
    const paginaRef = useRef(1);

    useEffect(() => {
        //llamado a la API
        cargarUsuarios();
    }, [])



    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqResponseListado>('/users', {
            params: {
                page: paginaRef.current
            }
        });
        if (resp.data.data.length > 0) {
            setUsers(resp.data.data);
        } else {
            paginaRef.current--;
            alert('no hay usuarios')
        }
    }

    const paginaSiguiente = async () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = async () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        }
    }


    return {
        users,
        paginaAnterior,
        paginaSiguiente
    }
}