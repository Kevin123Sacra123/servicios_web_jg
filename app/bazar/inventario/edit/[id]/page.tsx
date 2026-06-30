"use client"

import Navegador from "@/components/Navegador_bazar";
import { useRef, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select";
import Select_categorias from "@/components/Select_categorias";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFloppyDisk } from "react-icons/fa6";
import logo from "@/img/logo.png"

function Principal() {
    const [product, setproduct] = useState({
        nombre : "",
        descripcion : "",
        categoria : "",
        stock : 0,
        precio : 0,
        estado : "",
    });
    
    const router = useRouter();
    const params = useParams();

    useEffect(() => {
        async function loadData() {
            try {
                const user_id = params.id
                const { data } = await axios.get(`http://localhost:4000/bazar/inventario/edit/${user_id}`);
                console.log(data);
                setproduct(data[0]);
            } catch (error) {
                console.log(error);
            }
        }
        loadData();
    }, [params.id]);

    const handleChange = (e) => {
        setproduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            console.log(product)
            await axios.put(`http://localhost:4000/bazar/inventario/edit/${params.id}`, product);
            router.push("/bazar/inventario")
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div className="flex">
            <Navegador />
            <div className="content flex-1 overflow-auto">
                <div className="p-8">
                    <h1 className="text-5xl font-bold text-blue-900">Editar Producto</h1>
                    <p className="text-gray-500 mt-2">Actualiza la información del producto existente en el bazar</p>

                    <form action="" onSubmit={handleSumbit} >
                        <div className="grid grid-cols-12 gap-6 mt-8" >
                <div className="col-span-8 space-y-6" >
                    <div className="bg-white rounded-lg border p-8">
                        <h2 className="text-3xl font-bold text-blue-900 mb-8">Detalles Generales</h2>
                        <Field>
                            <FieldLabel className="block text-sm mb-2">Nombre del Producto</FieldLabel>
                            <Input type="text" value={product.nombre} name="nombre" onChange={handleChange} className="w-full border rounded-md px-4 py-3" />
                        </Field>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <Field>
                            <FieldLabel htmlFor="categoria" className="block text-sm font-medium text-slate-700 mb-2">Categoria</FieldLabel>
                            <Select name="categoria" defaultValue={product.categoria} onValueChange={(value) =>
                                setproduct({
                                ...product,
                                categoria: value,
                                })
                            } value={product.categoria}>
                            <SelectTrigger id="estado" className="w-full h-12 px-4 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none">
                                <SelectValue defaultValue={product.categoria} placeholder="Cambiar de Categoria" />
                            </SelectTrigger>
                            <SelectContent  className="bg-white">
                                    <SelectGroup>
                                        <SelectItem value="sin_categoria">Sin categoria</SelectItem>
                                    </SelectGroup>
                                    <SelectSeparator />
                                    <Select_categorias />
                                </SelectContent>
                            </Select>
                        </Field>
                            <Field>
                                <FieldLabel className="block text-sm mb-2">Stock Disponible</FieldLabel>
                                <Input id="stock" value={product.stock} name="stock" onChange={handleChange} type="number" className="w-full border rounded-md px-4 py-3" />
                            </Field>
                        </div>
                        <Field className="mt-6">
                            <FieldLabel className="block text-sm mb-2">Descripción</FieldLabel>
                            <Textarea  id="descripcion" value={product.descripcion} name="descripcion" onChange={handleChange} rows={4} className="w-full border rounded-md px-4 py-3">
                            </Textarea>
                        </Field>
                    </div>
                    <div className="bg-white rounded-lg border p-8">
                        <h2 className="text-3xl font-bold text-blue-900 mb-8">Precio</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Field>
                                <FieldLabel className="block text-sm mb-2">Precio</FieldLabel>
                                <Input name="precio" id="precio" value={product.precio} onChange={handleChange} type="number" step={0.5} className="w-full border rounded-md px-4 py-3" />
                            </Field>
                        </div>
                    </div>
                    <div className="col-span-4 space-y-6">
                        <div className="bg-white rounded-lg border p-6">
                            <h2 className="text-3xl font-bold text-blue-900 mb-6">Imagen</h2>
                            <Image src={logo} alt="logo" className="rounded-lg w-full object-contain h-[250px]" />
                            <Button className="w-full mt-4 border border-dashed rounded-md py-3 hover:bg-gray-50">Subir Nueva Imagen</Button>
                        </div>
                        <div className="bg-white rounded-lg border p-6">
                            <h2 className="text-3xl font-bold text-blue-900 mb-5">Estado</h2>
                            <Field>
                                <FieldLabel htmlFor="estado" className="block text-sm font-medium text-slate-700 mb-2">Estado</FieldLabel>
                                <Select name="estado" onValueChange={(value) =>
                                    setproduct({
                                    ...product,
                                    estado: value,
                                    })
                                } value={product.estado} defaultValue={product.estado} >
                                <SelectTrigger id="estado" className="w-full h-12 px-4 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none">
                                    <SelectValue defaultValue={product.estado} placeholder="Selecciona un estado" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className="bg-white">
                                    <SelectItem className="hover:bg-green-200" value="En Stock">En Stock</SelectItem>
                                    <SelectItem className="hover:bg-amber-200" value="Bajo Stock">Bajo Stock</SelectItem>
                                    <SelectItem className="hover:bg-red-200" value="Agotado">Agotado</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                                </Select>
                            </Field>
                        </div>
                        <div className="flex items-center justify-center gap-5 p-5">
                            <Button className=" bg-blue-900 h-[80px] text-white p-5 rounded-lg font-medium"> <FaFloppyDisk /> Guardar Cambios</Button>
                            <Link href={'/bazar/inventario'} className="bg-white h-[80px] border p-5 rounded-lg">Cancelar</Link>
                        </div>
                    </div>
                </div>
        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Principal;