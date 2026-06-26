import Navegador from "@/components/Navegador_admin";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import logo from "@/img/logo.png"
import Image from "next/image";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";


export default function Principal() {
    return(
        <div className="flex min-h-full bg-slate-100">
            <Navegador />
            <section className="flex-1 p-10">
                <Breadcrumb className="">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/eventos">Eventos</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage className="font-bold text-blue-900">Crear evento</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb> 
                <h1 className="text-5xl font-bold mt-3 text-slate-800">Crear un nuevo evento</h1>
                <p className="text-slate-500 mt-2">Complete los datos para programar una nueva actividad institucional.</p>
                <div className="grid grid-cols-12 gap-6 mt-8">
                    <div className="col-span-8 space-y-6">
                        <div className="bg-white border rounded-2xl p-8">
                            <h2 className="font-bold text-2xl flex gap-3 items-center">
                                <IoIosInformationCircleOutline className="text-[#19398A]" />
                                General Informatio
                            </h2>
                            <Separator className="my-6" />
                            <div>
                                <FieldLabel className="uppercase text-xs font-semibold text-slate-500">Nombre del evento</FieldLabel>
                                <Input type="text" placeholder="" className="w-full border rounded-lg px-4 py-3 mt-2" />
                            </div>
                            <div className="mt-6">
                                <FieldLabel className="uppercase text-xs font-semibold text-slate-500">Categoria</FieldLabel>
                                <select className="w-full border rounded-lg px-4 py-3 mt-2">
                                    <option>Workshop</option>
                                    <option>Academic</option>
                                </select>
                            </div>
                            <Field className="mt-6">
                                <FieldLabel className="uppercase text-xs font-semibold text-slate-500">Descripcion</FieldLabel>
                                <Textarea rows={4} placeholder="Describa brevemente el propósito y el alcance del evento..." className="w-full border rounded-lg px-4 py-3 mt-2 resize-none" />
                            </Field>
                        </div>
                        <div className="bg-white border rounded-2xl p-8">
                            <h2 className="font-bold text-2xl flex gap-3 items-center"><CiLocationOn className="text-[#19398A]" />Fecha y Lugar</h2>
                            <Separator className="my-6" />
                            <FieldGroup className="grid grid-cols-2 gap-5">
                                <Field>
                                    <FieldLabel className="uppercase text-xs font-semibold text-slate-500">Dia</FieldLabel>
                                    <Input type="date" className="w-full border rounded-lg px-4 py-3 mt-2" />
                                </Field>
                                <Field>
                                    <FieldLabel className="uppercase text-xs font-semibold text-slate-500">Lugar / Salon</FieldLabel>
                                    <Input type="text" placeholder="" className="w-full border rounded-lg px-4 py-3 mt-2" />
                                </Field>
                                <Field>
                                    <FieldLabel className="uppercase text-xs font-semibold text-slate-500">Hora de Inicio</FieldLabel>
                                    <Input type="time" className="w-full border rounded-lg px-4 py-3 mt-2" />
                                </Field>
                                <Field>
                                    <FieldLabel className="uppercase text-xs font-semibold text-slate-500">Hora de Finalizacion</FieldLabel>
                                    <Input type="time" className="w-full border rounded-lg px-4 py-3 mt-2" />
                                </Field>
                            </FieldGroup>
                        </div>
                        <div className="bg-white border rounded-2xl p-8">
                            <h2 className="font-bold text-2xl flex gap-3 items-center"><MdOutlinePersonOutline className="text-[#19398A]" />Capacidad</h2>
                            <Separator className="my-6" />
                            <FieldGroup className="grid grid-cols-2 gap-6">
                                <Field>
                                    <FieldLabel className="uppercase text-xs font-semibold text-slate-500">Maxima Capacitad </FieldLabel>
                                    <Input type="number" className="w-full border rounded-lg px-4 py-3 mt-2" />
                                </Field>
                                <Field>
                                    <FieldLabel className="uppercase text-xs font-semibold text-slate-500">Visibilidad</FieldLabel>
                                    <div className="mt-2 border rounded-lg p-4 flex justify-between items-center">
                                        <div>
                                            <h3 className="font-medium">¿Hacer el evento publico para los estudiantes?</h3>
                                        </div>
                                        <Button className="w-12 h-7 bg-[#19398A] rounded-full relative">
                                            <div className="w-5 h-5 bg-white rounded-full absolute top-1 right-1"></div>
                                        </Button>
                                    </div>
                                </Field>
                            </FieldGroup>
                        </div>
                        <div className="flex justify-end gap-4">
                            <Button className="border border-[#19398A] text-[#19398A] px-10 py-3 rounded-lg">Cancelar</Button>
                            <Button className="bg-[#19398A] text-white px-10 py-3 rounded-lg">Guardar evento</Button>
                        </div>
                    </div>
                    <div className="col-span-4 space-y-6">
                        <div className="bg-white border rounded-2xl overflow-hidden">
                            <div className="p-5">
                                <h3 className="uppercase text-xs font-bold text-slate-400">Vista previa</h3>
                            </div>
                            <Image src={logo} alt="logo" className="h-52 w-full object-cover" />
                            <div className="p-6">
                                <Button className="bg-[#19398A] text-white text-xs px-3 py-1 rounded-full">Proximamente</Button>
                                <h2 className="text-3xl font-bold mt-5">Titulo del evento</h2>
                                <div className="mt-6 space-y-3 text-slate-500">
                                    <p className="flex items-center gap-3" ><CiLocationOn className="text-[#19398A]" />Lugar: pendiente</p>
                                </div>
                                <Button className="w-full border border-[#19398A] text-[#19398A] mt-6 py-3 rounded-lg">Ver todos los detalles</Button>
                            </div>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                            <h3 className="font-bold text-[#19398A]">💡 Tip</h3>
                            <p className="mt-3 text-slate-600">Las imágenes de portada de alta calidad aumentan la interacción con los eventos hasta en un 40 % en el portal de estudiantes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};