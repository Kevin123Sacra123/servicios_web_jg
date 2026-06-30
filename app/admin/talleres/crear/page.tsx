"use client"

import Navegador from "@/components/Navegador_admin"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { FaCirclePlus } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaFloppyDisk } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { MdPersonSearch } from "react-icons/md";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { MdOutlineVerified } from "react-icons/md";
import { useRef, useState } from "react";;
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Principal() {
    const [evento, setevento] = useState({
            nombre : "",
            descripcion : "",
            fecha : "",
            hora_inicio : "",
            hora_fin : "",
            lugar: "",
            capacidad : 0,
        });
    
        const form = useRef(null);
        const router = useRouter();
    
        const handleChange = (e) => {
            setevento({
                ...evento,
                [e.target.name]: e.target.value,
            });
        };
    
        const handleSumbit = async (e) => {
            e.preventDefault();
            const res = await axios.post('http://localhost:4000/evento/crear', evento);
            console.log(res)
            router.refresh(); 
            router.push('/admin/eventos');
        };

    return (
        <div className="flex min-h-full bg-gray-100">
            <Navegador />
            <main className="">
                <div className="flex-1 p-10">
                    <Breadcrumb className="">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                            <BreadcrumbLink href="/admin/talleres">Talleres</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                            <BreadcrumbPage className="font-bold text-blue-900">Crear taller</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>  
                        <h1 className="text-5xl font-bold text-slate-800 mt-4">
                         Creación de Nuevo Taller
                        </h1>
                        <p className="text-slate-500 mt-2">Complete los detalles institucionales para aperturar un nuevo espacio educativo.</p>
                        <div className="grid grid-cols-12 gap-6 mt-8">
                            <div className="col-span-8">
                                <div className="bg-white border rounded-2xl p-8">
                                    <div>
                                        <h2 className="font-bold text-3xl text-slate-700 flex items-center gap-3">
                                            <FaCirclePlus className="text-[#1e3a8a]" /> 
                                            Información General
                                        </h2>
                                        <Field className="mt-8">
                                            <FieldLabel className="font-medium">Nombre del Taller</FieldLabel>
                                            <Input className="w-full border rounded-lg px-4 py-3 mt-2" type="text" placeholder="Ej: Taller de Pintura Óleo Avanzada" />
                                        </Field>
                                        <div className="grid grid-cols-2 gap-4 mt-6">
                                            <Field>
                                                <FieldLabel>Categoría</FieldLabel>
                                                <Select>
                                                    <SelectTrigger className="w-full border rounded-lg px-4 py-3 mt-2">
                                                        <SelectValue placeholder="escoge una categoria" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="deportes">Deportes</SelectItem>
                                                            <SelectItem value="Arte">Arte</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </Field>
                                            <Field>
                                                <FieldLabel>Aforo Máximo</FieldLabel>
                                                <div className="">
                                                    <InputGroup className="w-full border rounded-lg px-4 py-3 mt-2">
                                                        <InputGroupInput type="number"  id="inline-start-input" placeholder="Estudiantes" />
                                                        <InputGroupAddon align="inline-end">
                                                            <span className="text-sm text-slate-400">Estudiantes</span>
                                                        </InputGroupAddon>
                                                    </InputGroup>
                                                </div>
                                            </Field>
                                        </div>
                                        <div className="mt-6">
                                            <FieldLabel>Descripción</FieldLabel>
                                            <Textarea className="w-full border rounded-lg px-4 py-3 mt-2 resize-none" rows={4} 
                                            placeholder="Escriba los objetivos y requisitos del taller..." />
                                        </div>
                                    </div>
                                    <Separator className="my-8" />
                                    <div>
                                        <h2 className="font-bold text-3xl text-slate-700 flex items-center gap-3">
                                            <MdPersonSearch className="text-[#1e3a8a]"  />
                                            Gestión Académica
                                        </h2>
                                        <FieldLabel className="block mt-8">Profesor Responsable</FieldLabel>
                                        <div className="flex gap-3 mt-2">
                                            <div className="relative flex-1">
                                                <InputGroup>
                                                    <InputGroupInput id="inline-start-input" placeholder="Buscar docente por nombre o ID" />
                                                    <InputGroupAddon align="inline-start">
                                                        <FaMagnifyingGlass className="left-4 top-4 text-slate-400"/>
                                                    </InputGroupAddon>
                                                </InputGroup>
                                            </div>
                                            <Button className="border rounded-lg px-6 text-[#1e3a8a] flex items-center gap-2 border-slate-400">
                                                <FaCirclePlus className="mr-2" />
                                                Nuevo
                                            </Button>
                                        </div>
                                    </div>
                                    <Separator className="my-8" />
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <h2 className="font-bold text-3xl text-slate-700 flex gap-3 items-center">
                                                <FaClock className="text-[#1e3a8a]" />
                                                Cronograma de Horarios
                                            </h2>
                                            <Button className="text-[#1e3a8a] font-medium">+ Agregar Horario</Button>
                                        </div>
                                        <div className="grid grid-cols-4 gap-4 mt-8">
                                            <Field>
                                                <FieldLabel>Día</FieldLabel>
                                                <Input type="date" className="w-full border rounded-lg px-4 py-3 mt-2" />
                                            </Field>
                                            <Field>
                                                <FieldLabel>Hora Inicio</FieldLabel>
                                                <Input type="time" className="w-full border rounded-lg px-4 py-3 mt-2" />
                                            </Field>
                                            <Field>
                                                <FieldLabel>Hora Final</FieldLabel>
                                                <Input type="time" className="w-full border rounded-lg px-4 py-3 mt-2" />
                                            </Field>
                                            <Field>
                                                <FieldLabel>Lugar / Aula</FieldLabel>
                                                <Input className="w-full border rounded-lg px-4 py-3 mt-2" type="text" placeholder="Ej: Laboratorio 402" />
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-4 mt-12">
                                        <Button className="border border-[#1e3a8a] text-[#1e3a8a] px-10 py-3 rounded-xl">Cancelar</Button>
                                        <Button className="bg-[#1e3a8a] text-white px-10 py-3 rounded-xl shadow">
                                            <FaFloppyDisk className="mr-2" />
                                            Guardar Taller
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 space-y-6">
                                <div className="bg-white border rounded-2xl p-6">
                                    <div className="flex justify-between">
                                        <h3 className="font-bold text-3xl text-slate-700">Vista Previa</h3>
                                        <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">BORRADOR</span>
                                    </div>
                                    <div className="mt-6 h-44 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                                        <div className="text-center">
                                            <i className="fa-regular fa-image text-4xl"></i>
                                            <p className="mt-3">Imagen del taller</p>
                                            <Input className="mt-3" type="file" />
                                        </div>
                                    </div>
                                    <h4 className="mt-6 font-bold text-2xl text-[#1e3a8a]">Nombre del Taller</h4>
                                    <p className="text-slate-400 italic">Seleccione categoría...</p>
                                    <div className="mt-6 space-y-3 text-slate-600">
                                        <p className="flex items-center gap-3"><HiMiniUsers /> Capacidad: 0 personas</p>
                                        <p className="flex items-center gap-3"><FaChalkboardTeacher />Profesor: Pendiente</p>
                                    </div>
                                </div>
                                <div className="bg-white border rounded-2xl p-6">
                                    <h3 className="flex items-center gap-3 font-bold text-xl text-[#1e3a8a]"> <MdOutlineVerified /> Guía de Publicación</h3>
                                    <ol className="space-y-4 t-6 text-slate-600">
                                        <li>
                                            1. Asegúrese de que el nombre del taller sea descriptivo.
                                        </li>
                                        <li>
                                            2. Verifique disponibilidad del aula.
                                        </li>

                                        <li>
                                            3. El profesor recibirá una notificación automática.
                                        </li>
                                    </ol>
                                </div>
                                <div className="bg-white border rounded-2xl p-6 flex justify-between items-center">
                                    <div>
                                        <h4 className="font-bold text-[#1e3a8a]">¿Necesitas ayuda?</h4>
                                        <p className="text-sm text-slate-400">Contacta con Soporte TI</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                                        <MdOutlineSupportAgent className="text-[#1e3a8a]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </main>          
        </div>
    )
};