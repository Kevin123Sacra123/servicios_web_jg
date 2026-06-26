import Navegador from "@/components/Navegador_admin"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CiCirclePlus } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";


export default function Principal() {
    return (
        <div className="flex min-h-full bg-gray-100">
            <Navegador />
            <div className="bg-slate-100">
                <div className="flex min-h-screen">
                    <section className="flex-1 p-8">
                        <p className="text-sm text-slate-400 font-medium">
                            Gestión Académica
                            <span className="text-[#19398A]">Talleres</span>
                        </p>
                        <div className="flex justify-between items-start mt-3">
                            <div>
                                <h1 className="text-5xl font-bold text-slate-800">Gestión de Talleres</h1>
                                <p className="text-slate-500 mt-3">Administra la oferta extracurricular y el seguimiento de participantes.</p>
                            </div>
                            <Link href={'talleres/crear'} className="bg-[#19398A] text-white px-7 py-4 rounded-xl shadow">
                                <CiCirclePlus className="mr-2" />
                                Crear Nuevo Taller
                            </Link>
                        </div>
                        <div className="grid grid-cols-4 gap-5 mt-10">
                            <div className="bg-white border rounded-2xl p-6">
                                <p className="uppercase text-xs tracking-wider text-slate-400 font-semibold">Talleres Activos</p>
                                <div className="flex justify-between items-end mt-5">
                                    <h2 className="text-5xl font-bold text-[#19398A]">12</h2>
                                    <span className="text-green-600 text-xs">+2 este mes</span>
                                </div>
                            </div>
                            <div className="bg-white border rounded-2xl p-6">
                                <p className="uppercase text-xs tracking-wider text-slate-400 font-semibold">Total Inscritos</p>
                                <div className="flex justify-between items-end mt-5">
                                    <h2 className="text-5xl font-bold text-[#19398A]">428</h2>
                                    <span className="text-xs text-slate-400">85% Capacidad</span>
                                </div>
                            </div>
                            <div className="bg-white border rounded-2xl p-6">
                                <p className="uppercase text-xs tracking-wider text-slate-400 font-semibold">Próxima Sesión</p>
                                <div className="flex gap-3 mt-5">
                                    <CiClock1 className="text-yellow-600 text-2xl" />
                                    <div>
                                        <h2 className="font-bold">15:30 - Fútbol</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border rounded-2xl p-6">
                                <p className="uppercase text-xs tracking-wider text-slate-400 font-semibold">Tasa de Asistencia</p>
                                <h2 className="text-4xl font-bold text-[#19398A] mt-4">92%</h2>
                                <div className="h-2 bg-slate-200 rounded-full mt-4">
                                    <div className="h-2 w-[92%] bg-[#19398A] rounded-full">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border rounded-2xl mt-8 overflow-hidden">
                            <div className="flex justify-between items-center p-6">
                                <div className="flex gap-3 items-center">
                                    <h2 className="text-3xl font-bold">Listado de Talleres</h2>
                                    <span className="text-xs px-3 py-1 bg-slate-100 rounded-full">12 TOTAL</span>
                                </div>
                                <div className="flex gap-3">
                                    <Button className="w-10 h-10 border rounded-lg"><FaDownload /></Button>
                                </div>
                            </div>
                            <Table className="w-full">
                                <TableHeader className="bg-slate-50">
                                    <TableRow className="uppercase text-xs text-slate-400">
                                        <TableHead className="text-left px-6 py-5">Taller / Deporte</TableHead>
                                        <TableHead className="text-left">Instructor</TableHead>
                                        <TableHead className="text-left">Horario</TableHead>
                                        <TableHead className="text-left">Capacidad</TableHead>
                                        <TableHead className="text-left">Estado</TableHead>
                                        <TableHead className="text-left">Acciones</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y">
                                    <TableRow className="hover:bg-slate-50">
                                        <TableCell className="px-6 py-5">
                                            <div className="flex gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                                                    ⚽
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">Fútbol Masculino</h3>
                                                    <p className="text-sm text-slate-400">Nivel Intermedio</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>Prof. Ricardo Sosa</TableCell>
                                        <TableCell>Lun - Mié | 16:00</TableCell>
                                        <TableCell>28 / 30</TableCell>
                                        <TableCell>
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                                                ACTIVO
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex gap-5 text-slate-500">
                                                <Button>
                                                    <FaPencil />
                                                </Button>
                                                <Button>
                                                    <FaRegTrashAlt />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                                <TableFooter>
                                    <TableRow className="flex justify-between items-center p-6">
                                        <TableCell className="text-sm text-slate-400" >
                                            Mostrando 1 a 4 de 12 tallere
                                        </TableCell>
                                        <TableCell className="flex gap-3">
                                            <Button className="w-10 h-10 border rounded-lg"></Button>
                                            <Button className="w-10 h-10 rounded-lg bg-[#19398A] text-white">1</Button>
                                            <Button className="w-10 h-10">2</Button>
                                            <Button className="w-10 h-10">3</Button>
                                            <Button className="w-10 h-10 border rounded-lg"></Button>
                                        </TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
};