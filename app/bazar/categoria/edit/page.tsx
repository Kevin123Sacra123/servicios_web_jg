"use client"

import Navegador from "@/components/Navegador_bazar";
import { Field, FieldGroup, FieldLabel, FieldSet, FieldLegend, FieldDescription, FieldContent, FieldTitle } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectSeparator, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Textarea} from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FaFloppyDisk } from "react-icons/fa6";
import Select_categorias from "@/components/Select_categorias";

function Principal() {
    const frameworks = ["Uniforme", "robotica", "Nuxt.js", "Remix", "Astro"]
    const config_estatus = ["Stock", "Bajo Stock", "Agotado"]

    return(
        <div className="flex">
            <Navegador />
            <div className="content flex-1 overflow-auto">
                <div className="p-8">
                    <h1 className="text-5xl font-bold text-blue-900">Editar Producto</h1>
                    <p className="text-gray-500 mt-2">Actualiza la información del producto existente en el bazar</p>
                    <form className="grid grid-cols-12 gap-6 mt-8">
                        <div className="col-span-8 space-y-6">
                            <div className="bg-white rounded-lg border p-8">
                                <h2 className="text-3xl font-bold text-blue-900 mb-8">Detalles Generales</h2>
                                <Field>
                                    <FieldLabel className="block text-sm mb-2">Nombre del Producto</FieldLabel>
                                    <Input type="text" value="" className="w-full border rounded-md px-4 py-3" />
                                </Field>
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <Field>
                                        <FieldLabel htmlFor="categoria" className="block text-sm font-medium text-slate-700 mb-2">Cambiear de categoría</FieldLabel>
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
                                    <Field>
                                        <FieldLabel className="block text-sm mb-2">Stock Disponible</FieldLabel>
                                        <Input type="number" value="45" className="w-full border rounded-md px-4 py-3" />
                                    </Field>
                                </div>
                                <Field className="mt-6">
                                    <FieldLabel className="block text-sm mb-2">Descripción</FieldLabel>
                                    <Textarea rows={4} className="w-full border rounded-md px-4 py-3">
                                        Chaqueta de gala oficial para actos institucionales. Fabricada con materiales de alta calidad, 
                                        incluye el escudo bordado de la escuela en el pecho izquierdo. Corte entallado y botones metálicos.
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
                                        <Input type="text" value="S/ 00.00" className="w-full border rounded-md px-4 py-3" />
                                    </Field>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 space-y-6">
                            <div className="bg-white rounded-lg border p-6">
                                <h2 className="text-3xl font-bold text-blue-900 mb-6">Imagen</h2>
                                <Image src={""} alt="logo" className="rounded-lg w-full object-cover h-2/4" />
                                <Button className="w-full mt-4 border border-dashed rounded-md py-3 hover:bg-gray-50">
                                Subir Nueva Imagen
                                </Button>
                            </div>
                            <div className="bg-white rounded-lg border p-6">
                                <h2 className="text-3xl font-bold text-blue-900 mb-5">Estado</h2>
                                <RadioGroup defaultValue='' className="max-w-sm">
                                    <FieldLabel htmlFor="plus-plan">
                                        <Field orientation="horizontal">
                                            <FieldContent>
                                                <FieldTitle>Stock</FieldTitle>
                                            </FieldContent>
                                            <RadioGroupItem value="plus" id="plus-plan" />
                                        </Field>
                                    </FieldLabel>
                                    <FieldLabel htmlFor="pro-plan">
                                        <Field orientation="horizontal">
                                            <FieldContent>
                                                <FieldTitle>Bajo Stock</FieldTitle>
                                            </FieldContent>
                                            <RadioGroupItem value="pro" id="pro-plan" />
                                        </Field>
                                    </FieldLabel>
                                    <FieldLabel htmlFor="enterprise-plan">
                                        <Field orientation="horizontal">
                                            <FieldContent>
                                                <FieldTitle>Agotado</FieldTitle>
                                            </FieldContent>
                                            <RadioGroupItem value="enterprise" id="enterprise-plan" />
                                        </Field>
                                    </FieldLabel>
                                </RadioGroup>
                            </div>
                            <div className="min-w-2/4">
                                <Button className="w-full bg-blue-900 text-white py-4 rounded-lg font-medium hover:bg-blue-800"> <FaFloppyDisk /> Guardar Cambios</Button>
                                <Button className="w-full border py-4 rounded-lg hover:bg-gray-50">Cancelar</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Principal;