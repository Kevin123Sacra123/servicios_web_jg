"use client"

import Navegador from "@/components/Navegador_estudiante"
import Image from "next/image";
import { FaPencilAlt } from "react-icons/fa";
import logo from '@/img/logo.png'
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RiGraduationCapFill } from "react-icons/ri";
import { FieldLabel } from "@/components/ui/field";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaAsterisk } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import Link from "next/link";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function Principal(){
    const params = useParams()
    const [data_form, setDataForm] = useState([]);

    useEffect(() => {
        async function loadData() {
            try {
                const user_id = params.id
                const { data } = await axios.get(`http://localhost:4000/users/${user_id}`)
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
        <div className="flex min-h-screen bg-gray-100">
            <Navegador />
            <section className="bg-slate-100 min-h-screen">
                {data_form.map(user =>(
                <div key={user.id_usuarios} className="max-w-7xl mx-auto p-8">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h1 className="text-5xl font-bold text-blue-900">Mi Perfil</h1>
                            <p className="text-gray-500 mt-2">Gestiona tu información académica y personal.</p>
                        </div>
                        <Link href={`/estudiante/ver/edit/${user.id_usuarios}`}  className="bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 shadow">
                            <FaPencilAlt />
                            Editar Perfil
                        </Link>
                    </div>
                    <Separator className="mb-8 " />
                    <div className="flex justify-center gap-6">
                        <div className="col-span-12 lg:col-span-4">
                            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-full">
                                <div className="flex flex-col items-center">
                                    <Image src={logo} className="w-28 h-28 rounded-lg object-cover border-4 border-slate-200" alt="Alumno" />
                                    <h2 className="text-3xl font-semibold text-slate-800 mt-5">{user.nombre_apellido}</h2>
                                    <span className="mt-3 bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium">
                                        Estudiante Activo
                                    </span>
                                </div>
                                <div className="border-t mt-6 pt-6">
                                    <div className="flex justify-between mb-4">
                                        <span className="text-gray-500 font-medium">DNI</span>
                                        <span className="font-semibold text-slate-800">{user.DNI}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500 font-medium">ID Académico</span>
                                        <span className="font-semibold text-slate-800">{user.id_usuarios}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                                    <div className="flex items-center gap-3 mb-5">
                                        <RiGraduationCapFill className="text-blue-900" />
                                        <h3 className="font-bold text-blue-900 text-xl">Información Académica</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <FieldLabel className="block text-sm text-gray-500 mb-2">Grado y Sección</FieldLabel>
                                            <div className="bg-slate-50 border rounded-md p-3">{user.grado_seccion}</div>
                                        </div>
                                        <div>
                                            <FieldLabel className="block text-sm text-gray-500 mb-2">Tutor Asignado</FieldLabel>
                                            <div className="bg-slate-50 border rounded-md p-3">Lic. María Fernández</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                                    <div className="flex items-center gap-3 mb-5">
                                        <FaMapLocationDot className="text-blue-900" />
                                        <h3 className="font-bold text-blue-900 text-xl">Contacto y Residencia</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <FieldLabel className="block text-sm text-gray-500 mb-2">Dirección Principal</FieldLabel>
                                            <div className="bg-slate-50 border rounded-md p-3">{user.direccion}</div>
                                        </div>
                                        <div>
                                            <FieldLabel className="block text-sm text-gray-500 mb-2">Correo Institucional</FieldLabel>
                                            <div className="bg-slate-50 border rounded-md p-3">{user.correo}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                                <div className="flex items-center gap-3 mb-5">
                                    <FaAsterisk className="text-blue-900" />
                                    <h3 className="font-bold text-blue-900 text-xl">Contactos de Emergencia</h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="border rounded-lg p-4 bg-slate-50 flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-gray-500">Madre</p>
                                            <p className="font-bold text-lg">{user.telefono}</p>
                                        </div>
                                        <MdOutlineLocalPhone className="text-blue-900 text-xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </section>
        </div>
    )
};