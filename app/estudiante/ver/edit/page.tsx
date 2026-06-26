"use client"

import Navegador from "@/components/Navegador_estudiante"
import Image from "next/image";
import { FaPencilAlt } from "react-icons/fa";
import logo from '@/img/logo.png'
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RiGraduationCapFill } from "react-icons/ri";
import { Field, FieldLabel } from "@/components/ui/field";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaAsterisk } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { FaFloppyDisk } from "react-icons/fa6";

export default function Principal(){
    return(
        <div className="flex min-h-screen bg-gray-100">
            <Navegador />
            <section className="bg-slate-100 flex justify-center">
                <div className="max-w-4xl py-10 px-4">
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
                                        <FieldLabel
                                            className="block text-xs font-semibold uppercase tracking-wide text-slate-600 mb-2">
                                            DNI / Documento de Identidad
                                        </FieldLabel>
                                        <Input className="w-full bg-slate-100 border border-slate-200 rounded-md px-4 py-3 text-slate-600" 
                                            type="number" defaultValue="74839201" disabled />
                                    </Field>
                                    <Field>
                                        <FieldLabel className="block text-xs font-semibold uppercase tracking-wide text-slate-600 mb-2">
                                            Grado y Sección
                                        </FieldLabel>
                                        <Input className="w-full bg-slate-100 border border-slate-200 rounded-md px-4 py-3 text-slate-600" 
                                            type="text" defaultValue="6to Ciclo - Ingeniería Industrial" disabled/>
                                    </Field>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="flex items-center gap-3 mb-4">
                                <FaPencilAlt className="text-blue-900"/>
                                <h2 className="font-semibold text-slate-900 text-lg">
                                    Información de Contacto
                                </h2>
                            </div>
                            <div className="border-t border-slate-200 pt-5">
                                <Field>
                                    <FieldLabel className="block text-sm font-medium text-slate-700 mb-2">Dirección Residencial</FieldLabel>
                                    <Input className="w-full border border-slate-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                                        type="text" value="Av. Siempre Viva 123, Distrito Central"
                                    />
                                    <p className="text-xs text-slate-500 mt-2">Ingresa tu dirección actual completa.</p>
                                </Field>
                                <div className="grid md:grid-cols-2 gap-4 mt-6">
                                    <Field>
                                        <FieldLabel className="block text-sm font-medium text-slate-700 mb-2"> Teléfono de Emergencia 1</FieldLabel>
                                        <div className="relative">
                                            <MdOutlineLocalPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                            <Input className="w-full border border-slate-300 rounded-md pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                                type="text" value="987654321"/>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-2">Familiar directo preferiblemente.</p>
                                    </Field>
                                    <Field>
                                        <FieldLabel className="block text-sm font-medium text-slate-700 mb-2"> Teléfono de Emergencia 2</FieldLabel>
                                        <div className="relative">
                                            <MdOutlineLocalPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                            <Input className="w-full border border-slate-300 rounded-md pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                                type="text" value="987654321"/>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-2">Familiar directo preferiblemente.</p>
                                    </Field>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-slate-200 mt-10 pt-6">
                            <div className="flex justify-end gap-3">
                                <Button className="px-6 py-3 border border-blue-900 text-blue-900 font-medium rounded hover:bg-blue-50 transition">Cancelar
                                </Button>
                                <Button className="px-6 py-3 bg-blue-900 text-white font-medium rounded hover:bg-blue-950 transition flex items-center gap-2">
                                    <FaFloppyDisk />
                                    Guardar Cambios
                                </Button>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
};