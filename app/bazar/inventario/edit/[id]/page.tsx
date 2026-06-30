"use client"

import Navegador from "@/components/Navegador_bazar";
import { useRef, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Data_form from "./Data_form";


function Principal() {
    const [product, setproduct] = useState({
        nombre : "",
        descripcion : "",
        categoria : "",
        stock : 0,
        precio : 0,
        estado : "",
    });
    
    const form = useRef(null);
    const router = useRouter()
    const params = useParams()

    const handleChange = (e) => {
        setproduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if(params.id){
            axios.get('/bazar/inventario/edit/' + params.id)
            .then(res => {
                setproduct({
                    nombre: res.data.nombre,
                    descripcion: res.data.descripcion,
                    categoria: res.data.categoria,
                    stock: res.data.stock,
                    precio: res.data.precio,
                    estado: res.data.estado,
                })
            })
        }
    }, []);

    const handleSumbit = async (e) => {
        e.preventDefault();
        const res = await axios.put('http://localhost:4000/bazar/inventario/crear_producto'+ params.id, product);
        console.log(res)
        router.refresh(); 
        router.push('/bazar/inventario');
    };

    return(
        <div className="flex">
            <Navegador />
            <div className="content flex-1 overflow-auto">
                <div className="p-8">
                    <h1 className="text-5xl font-bold text-blue-900">Editar Producto</h1>
                    <p className="text-gray-500 mt-2">Actualiza la información del producto existente en el bazar</p>

                    <form action="" onSubmit={handleSumbit} ref={form} >
                        <Data_form productID={1}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Principal;