"use client"

import { Field, FieldGroup, FieldLabel, FieldSet, FieldLegend, FieldDescription, FieldContent, FieldTitle } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Label } from "@/components/ui/label"
import { FaFloppyDisk } from "react-icons/fa6";
import { useRef, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Select_categorias from "@/components/Select_categorias";
import Link from "next/link";
import logo from '@/img/logo.png'
import { Select, SelectContent, SelectGroup, SelectItem, SelectSeparator, SelectTrigger, SelectValue} from "@/components/ui/select"
import axios from "axios";


function Data_form({productID}) {
    const [data_form, setDataForm] = useState([]);

    useEffect(() => {
        async function loadData() {
            try {
                const { data } = await axios.get(`http://localhost:4000/bazar/inventario/edit/${productID}`)
                setDataForm(data);
            } catch (error) {
                console.log(error);
                console.error(error);
            }
        }
        loadData();
    }, []);

    const handleChange = (e) => {
        setDataForm({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    
    return(
        <div className="grid grid-cols-12 gap-6 mt-8" >
            {data_form.map(data =>(
                <div key={data.id_product} className="col-span-8 space-y-6" >
                    <div className="bg-white rounded-lg border p-8">
                        <h2 className="text-3xl font-bold text-blue-900 mb-8">Detalles Generales</h2>
                        <Field>
                            <FieldLabel className="block text-sm mb-2">Nombre del Producto</FieldLabel>
                            <Input type="text" name="name" id="name" value={data.nombre} className="w-full border rounded-md px-4 py-3" />
                        </Field>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <Field>
                            <FieldLabel htmlFor="categoria" className="block text-sm font-medium text-slate-700 mb-2">Categoria</FieldLabel>
                            <Select name="categoria" defaultValue={data.categoria} onValueChange={(value) =>
                                setDataForm({
                                ...data,
                                categoria: value,
                                })
                            } value={data.categoria}>
                            <SelectTrigger id="estado" className="w-full h-12 px-4 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none">
                                <SelectValue defaultValue={data.categoria} placeholder="Cambiar de Categoria" />
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
                                <Input name="stock" id="stock" value={data.stock} type="number" className="w-full border rounded-md px-4 py-3" />
                            </Field>
                        </div>
                        <Field className="mt-6">
                            <FieldLabel className="block text-sm mb-2">Descripción</FieldLabel>
                            <Textarea name="descripcion" id="descripcion" value={data.descripcion} rows={4} className="w-full border rounded-md px-4 py-3">
                            </Textarea>
                        </Field>
                    </div>
                    <div className="bg-white rounded-lg border p-8">
                        <h2 className="text-3xl font-bold text-blue-900 mb-8">
                        Precio
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Field>
                                <FieldLabel className="block text-sm mb-2">Precio</FieldLabel>
                                <Input name="precio" id="precio" value={data.precio} type="number" step={0.5} className="w-full border rounded-md px-4 py-3" />
                            </Field>
                        </div>
                    </div>
                    <div className="col-span-4 space-y-6">
                        <div className="bg-white rounded-lg border p-6">
                            <h2 className="text-3xl font-bold text-blue-900 mb-6">Imagen</h2>
                            <Image src={logo} alt="logo" className="rounded-lg w-full object-contain h-[250px]" />
                            <Button className="w-full mt-4 border border-dashed rounded-md py-3 hover:bg-gray-50">
                            Subir Nueva Imagen
                            </Button>
                        </div>
                        <div className="bg-white rounded-lg border p-6">
                            <h2 className="text-3xl font-bold text-blue-900 mb-5">Estado</h2>
                            <Field>
                                <FieldLabel htmlFor="estado" className="block text-sm font-medium text-slate-700 mb-2">Estado</FieldLabel>
                                <Select name="estado" onValueChange={(value) =>
                                    setDataForm({
                                    ...data,
                                    estado: value,
                                    })
                                } value={data.estado} defaultValue={data.estado} >
                                <SelectTrigger id="estado" className="w-full h-12 px-4 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none">
                                    <SelectValue defaultValue={data.estado} placeholder="Selecciona un estado" />
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
                        <div className="min-w-2/4">
                            <Button className="w-full bg-blue-900 text-white py-4 rounded-lg font-medium hover:bg-blue-800"> <FaFloppyDisk /> Guardar Cambios</Button>
                            <Button className="w-full border py-4 rounded-lg hover:bg-gray-50">Cancelar</Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Data_form;