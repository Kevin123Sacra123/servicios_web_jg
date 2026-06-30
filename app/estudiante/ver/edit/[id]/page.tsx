"use client"

import Navegador from "@/components/Navegador_estudiante"
import { FaPencilAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { FaFloppyDisk } from "react-icons/fa6";
import { useRef, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function Principal(){
    const router = useRouter();
    const params = useParams();

    const [dataForm, setDataForm] = useState({
        id_usuarios: 1,
        DNI :"",
        grado_seccion:"",
        direccion:"",
        telefono:0
    });
    
    useEffect(() => {
        async function loadData() {
            try {
                const user_id = params.id
                const { data } = await axios.get(`http://localhost:4000/users/${user_id}`);
                console.log(data);
                setDataForm(data[0]);
            } catch (error) {
                console.log(error);
            }
        }
        loadData();
    }, [params.id]);

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            console.log(dataForm)
            await axios.put(`http://localhost:4000/users/${params.id}`, dataForm);
            router.push("/estudiante")
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div className="flex min-h-screen bg-gray-100">
            <Navegador />
            <section className="bg-slate-100 flex justify-center">
                <form className="max-w-4xl py-10 px-4" action="" onSubmit={handleSumbit} >
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold text-slate-800">Editar Perfil</h1>
                        <p className="mt-2 text-gray-500">Actualiza tu información de contacto y emergencias.</p>
                    </div>
                    <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <CiLock className="text-slate-700" />
                                <h2 className="font-semibold text-slate-900 text-lg">Información Académica</h2>
                            </div>
                            <div className="border-t border-slate-200 pt-5">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Field>
                                        <FieldLabel className="block text-xs font-semibold uppercase tracking-wide text-slate-600 mb-2">
                                            DNI / Documento de Identidad
                                        </FieldLabel>
                                        <Input className="w-full bg-slate-100 border border-slate-200 rounded-md px-4 py-3 text-slate-600" 
                                            type="number" value={dataForm.DNI} name="DNI" onChange={handleChange} disabled />
                                    </Field>
                                    <Field>
                                        <FieldLabel className="block text-xs font-semibold uppercase tracking-wide text-slate-600 mb-2">
                                            Grado y Sección
                                        </FieldLabel>
                                        <Input className="w-full bg-slate-100 border border-slate-200 rounded-md px-4 py-3 text-slate-600" 
                                            type="text" value={dataForm.grado_seccion} name="grado_seccion" onChange={handleChange} disabled/>
                                    </Field>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="flex items-center gap-3 mb-4">
                                <FaPencilAlt className="text-blue-900"/>
                                <h2 className="font-semibold text-slate-900 text-lg">Información de Contacto</h2>
                            </div>
                            <div className="border-t border-slate-200 pt-5">
                                <Field>
                                    <FieldLabel className="block text-sm font-medium text-slate-700 mb-2">Dirección Residencial</FieldLabel>
                                    <Input className="w-full border border-slate-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                                        type="text" value={dataForm.direccion} name="direccion" onChange={handleChange} />
                                    <p className="text-xs text-slate-500 mt-2">Ingresa tu dirección actual completa.</p>
                                </Field>
                                <div className="grid md:grid-cols-2 gap-4 mt-6">
                                    <Field>
                                        <FieldLabel className="block text-sm font-medium text-slate-700 mb-2"> Teléfono</FieldLabel>
                                        <div className="relative">
                                            <MdOutlineLocalPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                            <Input className="w-full border border-slate-300 rounded-md pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                                type="number" value={dataForm.telefono} name="telefono" onChange={handleChange}/>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-2">Familiar directo preferiblemente.</p>
                                    </Field>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-slate-200 mt-10 pt-6">
                            <div className="flex justify-end gap-3">
                                <Link className="px-6 py-3 border border-blue-900 text-blue-900 font-medium rounded hover:bg-blue-50 transition" href={`/estudiante/ver/${dataForm.id_usuarios}`}>
                                    Cancelar
                                </Link>
                                <Button className="px-6 py-3 bg-blue-900 text-white font-medium rounded hover:bg-blue-950 transition flex items-center gap-2">
                                    <FaFloppyDisk />
                                    Guardar Cambios
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
};