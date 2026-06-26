"use client"

import Navegador from "@/components/Navegador_bazar";
import axios from "axios";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectGroup, SelectItem, SelectSeparator, SelectTrigger, SelectValue} from "@/components/ui/select"
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Select_categorias from "@/components/Select_categorias";
import Link from "next/link";

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

    const handleChange = (e) => {
        setproduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleSumbit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/bazar/inventario/crear_producto', product);
        console.log(res)
        router.refresh(); 
        router.push('/bazar/inventario');
    };

    return (
    <div className="flex bg-[#f5f6fa]">
        <Navegador />
        <section className="bg-[#f5f6fa] flex justify-center p-5">
            <Breadcrumb className="pl-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/bazar">Bazar</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/bazar/inventario">Inventario</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbPage className="font-bold text-blue-900">Crear producto</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>   
            <div className="py-10 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
                        <h2 className="text-5xl font-bold text-blue-900 mb-3">Crear Nuevo Producto</h2>
                        <p className="text-slate-600 mb-8">Complete los detalles a continuación para añadir un artículo al inventario del Bazar</p>
                        <Separator className="mb-8" />
                        <form className="space-y-8" action="" onSubmit={handleSumbit} ref={form} >
                            <FieldGroup className="grid md:grid-cols-2 gap-6 items-center">
                                <Field>
                                    <FieldLabel htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">Nombre del producto</FieldLabel>
                                    <Input id="nombre" name="nombre" className="w-full h-12 px-4 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                                    type="text" placeholder="" onChange={handleChange} value={product.nombre} />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="categoria" className="block text-sm font-medium text-slate-700 mb-2">Categoría</FieldLabel>
                                    <Select name="categoria" onValueChange={(value) =>
                                            setproduct({
                                            ...product,
                                            categoria: value,
                                            })
                                        } value={product.categoria} >   
                                        <SelectTrigger id="categoria" className="w-full h-12 px-4 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none">
                                            <SelectValue placeholder="Escoge una categoria" />
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
                            </FieldGroup>
                            <Field>
                                <FieldLabel className="block text-sm font-medium text-slate-700 mb-2">Descripción</FieldLabel>
                                <Textarea name="descripcion" onChange={handleChange} value={product.descripcion}  rows={5}
                                    placeholder="Describa el estado, talla o detalles relevantes del producto..."
                                    className="w-full p-4 border border-slate-300 rounded-md resize-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                                />
                            </Field>
                            <FieldGroup className="grid md:grid-cols-2 gap-6">
                                <Field>
                                    <FieldLabel className="block text-sm font-medium text-slate-700 mb-2">Precio</FieldLabel>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 font-semibold">S/</span>
                                        <Input className="w-full h-12 pl-10 pr-4 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                                            name="precio" onChange={handleChange} value={product.precio} type="number" step={0.5} placeholder="0.00"
                                        />
                                    </div>
                                </Field>
                                <Field>
                                    <FieldLabel className="block text-sm font-medium text-slate-700 mb-2">Stock Inicial</FieldLabel>
                                    <Input className="w-full h-12 px-4 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                                        name="stock" onChange={handleChange} value={product.stock} type="number" placeholder="Cantidad disponible"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="estado" className="block text-sm font-medium text-slate-700 mb-2">Estado</FieldLabel>
                                    <Select name="estado" onValueChange={(value) =>
                                        setproduct({
                                        ...product,
                                        estado: value,
                                        })
                                    } value={product.estado} >
                                    <SelectTrigger id="estado" className="w-full h-12 px-4 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none">
                                        <SelectValue placeholder="Selecciona un estado" />
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
                            </FieldGroup>
                            <Field>
                                <FieldLabel  className="block text-sm font-medium text-slate-700 mb-3">Subir Imagen del Producto</FieldLabel>
                                <div className="border-2 border-dashed border-slate-300 rounded-lg h-52 flex flex-col items-center justify-center text-center hover:border-blue-500 transition cursor-pointer">
                                    <IoCloudUploadOutline className="w-10 h-10 text-slate-400 mb-4" />
                                    <p className="text-slate-700 text-lg">Arrastre una imagen aquí o explore archivos</p>
                                    <p className="text-xs text-slate-500 mt-2">PNG, JPG hasta 5MB (Recomendado 1:1 o 4:3)</p>
                                    <Input
                                        type="file"
                                        className="hidden"
                                    />
                                </div>
                            </Field>
                            <Separator />
                            <div className="flex justify-end gap-4">
                                <Link href={'/bazar/inventario'} className="px-8 py-3 border border-slate-300 rounded-md text-blue-900 font-medium hover:bg-slate-50 transition">
                                    Cancelar
                                </Link>
                                <Button className="px-8 py-3 bg-blue-900 text-white rounded-md font-medium shadow hover:bg-blue-800 transition">
                                    Guardar Producto
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default Principal;