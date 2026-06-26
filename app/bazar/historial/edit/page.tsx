"use client"
import Navegador from "@/components/Navegador_bazar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IoFilterOutline } from "react-icons/io5";
import { FaPrint } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
export default function Principal() {
    return(
        <div className="flex">
            <Navegador />
            <div className="content">
                <main className="flex-1 p-10">
                    <nav className="uppercase tracking-widest text-xs font-semibold flex items-center gap-2">
                        <span className="text-slate-500">
                            Pedidos
                        </span>
                        <span className="text-[#16327F]">
                            Detalle de Ticket
                        </span>
                    </nav>
                    <div className="flex justify-between items-start mt-6 gap-6">
                        <div>
                            <h1 className="text-5xl font-bold text-[#16327F]">Comprobante de Pago</h1>
                            <p className="text-slate-500 mt-2">Transacción procesada exitosamente el 15 de Mayo, 2024</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="border border-[#16327F] text-[#16327F] px-6 py-3 rounded-md flex items-center gap-3">
                                <FaPrint />
                                Imprimir Ticket
                            </button>
                            <button className="bg-[#16327F] text-white px-6 py-3 rounded-md flex items-center gap-3">
                                <FaRegFilePdf />
                                Descargar PDF
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border mt-8 overflow-hidden max-w-5xl">
                        <div className="h-2 bg-gradient-to-r from-[#16327F] to-yellow-700"></div>
                        <div className="p-8 flex justify-between">
                            <div>
                                <div className="flex gap-4 items-center">
                                    <div className="w-14 h-14 bg-[#16327F] rounded flex items-center justify-center text-white">
                                        <FaGraduationCap className="text-4xl"/>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-3xl text-[#16327F]">
                                            Sede Comas
                                        </h2>
                                        <p className="uppercase text-xs text-slate-500">
                                            Bazar Escolar Oficial
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="bg-slate-100 border rounded-lg px-6 py-5">
                                    <p className="text-xs uppercase text-slate-500">Número de Boleta</p>
                                    <h3 className="text-4xl font-bold text-[#16327F]">#BE-2024-8842</h3>
                                </div>
                                <div className="mt-5 text-sm text-slate-600">
                                    <p>Fecha: 15/05/2024</p>
                                    <p>Hora: 14:32:15 hrs</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-t border-b bg-slate-50">
                            <div className="p-6">
                                <p className="text-xs uppercase text-slate-500 mb-2">Cliente / Tutor / Alumno</p>
                                <h4 className="font-bold text-[#16327F]">Sofía Villagrán (4° Grado - B)</h4>
                                <p className="text-slate-500">ID del cliente: 72559263</p>
                            </div>
                        </div>
                        <Table className="w-full">
                            <ScrollArea className="h-[400px] w-full rounded-md p-4">
                                <TableHeader>
                                    <TableRow className="bg-slate-100 text-left text-xs uppercase text-slate-600">
                                        <TableHead className="p-5">Descripción del Artículo</TableHead>
                                        <TableHead>Cantidad</TableHead>
                                        <TableHead>Unitario</TableHead>
                                        <TableHead>Subtotal</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y">
                                    <TableRow>
                                            <TableCell className="p-6">
                                                <h5 className="font-semibold text-[#16327F]"> Chaqueta Deportiva Instituciona</h5>
                                                <p className="text-sm text-slate-500"> Talla: M | Azul Marino </p>
                                            </TableCell>
                                            <TableCell>1</TableCell>
                                            <TableCell>$850.00</TableCell>
                                            <TableCell className="font-bold text-[#16327F]">$850.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="p-6">
                                                <h5 className="font-semibold text-[#16327F]"> Chaqueta Deportiva Instituciona</h5>
                                                <p className="text-sm text-slate-500"> Talla: M | Azul Marino </p>
                                            </TableCell>
                                            <TableCell>1</TableCell>
                                            <TableCell>$850.00</TableCell>
                                            <TableCell className="font-bold text-[#16327F]">$850.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="p-6">
                                                <h5 className="font-semibold text-[#16327F]"> Chaqueta Deportiva Instituciona</h5>
                                                <p className="text-sm text-slate-500"> Talla: M | Azul Marino </p>
                                            </TableCell>
                                            <TableCell>1</TableCell>
                                            <TableCell>$850.00</TableCell>
                                            <TableCell className="font-bold text-[#16327F]">$850.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="p-6">
                                                <h5 className="font-semibold text-[#16327F]"> Chaqueta Deportiva Instituciona</h5>
                                                <p className="text-sm text-slate-500"> Talla: M | Azul Marino </p>
                                            </TableCell>
                                            <TableCell>1</TableCell>
                                            <TableCell>$850.00</TableCell>
                                            <TableCell className="font-bold text-[#16327F]">$850.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="p-6">
                                                <h5 className="font-semibold text-[#16327F]"> Chaqueta Deportiva Instituciona</h5>
                                                <p className="text-sm text-slate-500"> Talla: M | Azul Marino </p>
                                            </TableCell>
                                            <TableCell>1</TableCell>
                                            <TableCell>$850.00</TableCell>
                                            <TableCell className="font-bold text-[#16327F]">$850.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="p-6">
                                                <h5 className="font-semibold text-[#16327F]"> Chaqueta Deportiva Instituciona</h5>
                                                <p className="text-sm text-slate-500"> Talla: M | Azul Marino </p>
                                            </TableCell>
                                            <TableCell>1</TableCell>
                                            <TableCell>$850.00</TableCell>
                                            <TableCell className="font-bold text-[#16327F]">$850.00</TableCell>
                                        </TableRow>
                                </TableBody>
                            </ScrollArea>
                        </Table>
                        <div className="p-8">
                            <div className="max-w-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-3xl font-bold text-[#16327F]">Total Pago</span>
                                    <span className="text-4xl font-bold text-[#16327F]">$1,465.00</span>
                                </div>
                                <div className="mt-4 bg-[#16327F] text-white text-center py-2 rounded">PAGADO</div>
                            </div>
                        </div>
                        <div className="bg-slate-100 text-center p-10">
                            <h3 className="font-bold text-[#16327F]">
                                ¡Gracias por apoyar el Bazar Escolar!
                            </h3>
                            <p className="text-sm text-slate-500 max-w-2xl mx-auto mt-3">
                                Este comprobante es válido para cualquier aclaración o
                                cambio físico dentro de los próximos 5 días hábiles.
                                No se aceptan devoluciones en artículos de uso personal
                                o uniformes ya marcados.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

