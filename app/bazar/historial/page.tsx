"use client"
import * as React from "react"
import Navegador from "@/components/Navegador_bazar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IoFilterOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import { Field, FieldLabel } from "@/components/ui/field";
import { ButtonGroup } from "@/components/ui/button-group";
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { es } from 'date-fns/locale';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FaEye } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

export default function Principal() {
    const [date, setDate] = React.useState<Date>()

    return(
        <div className="flex">
            <Navegador />
            <div className="content">
                <main className="flex-1 overflow-auto">
                <div className="p-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-5xl font-bold text-blue-900">Historial de Ventas</h1>
                            <p className="text-gray-500 mt-2">Gestione y revise todos los comprobantes emitidos por la tienda institucional.</p>
                        </div>
                        <div className="bg-[#223A91] rounded-xl px-8 py-5 text-white">
                            <div className="flex items-center gap-5">
                                <div>
                                    <p className="uppercase text-sm text-blue-100">Ventas del día</p>
                                    <h2 className="text-4xl font-bold">S/ 10.00</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border rounded-xl p-4 flex gap-4 mt-8 items-center">
                        <Field className="w-full">
                            <ButtonGroup>
                                <Input type="text" placeholder="Buscar por ID de boleta o cliente..." className="w-full border rounded-md py-2 text-sm" />
                                <Button variant={"outline"} aria-label="Buscar">
                                    <FaMagnifyingGlass />
                                </Button>

                            </ButtonGroup>
                        </Field>
                        <div className="flex items-center gap-2 font-semibold">
                            <IoFilterOutline />
                            Filtros:
                        </div>
                        <Select>
                            <SelectTrigger className="border rounded px-4 py-2">
                                <SelectValue placeholder="Todos los estados" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup className="bg-white">
                                <SelectItem value="todos">Todos los estados</SelectItem>
                                <SelectItem value="pagado">Pagado</SelectItem>
                                <SelectItem value="pendiente">Pendiente</SelectItem>
                                <SelectItem value="reembolso">Reembolsado</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Field className="mx-auto w-44">
                            <Popover>
                                <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    id="date-picker-simple"
                                    className="justify-start font-normal"
                                >
                                    {date ? format(date, "PP") : <span>Elige una fecha</span>}
                                </Button>
                                </PopoverTrigger>
                                <PopoverContent className="bg-white w-auto p-0 align_start">
                                <Calendar 
                                    locale={es}
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    defaultMonth={date}
                                />
                                </PopoverContent>
                            </Popover>
                        </Field>
                        <Select>
                            <SelectTrigger className="border rounded px-4 py-2">
                                <SelectValue placeholder="Metodos de pago" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup className="bg-white">
                                <SelectItem value="todo">Metodos de pago</SelectItem>
                                <SelectItem value="efectivo">Efectivo</SelectItem>
                                <SelectItem value="transacccion">Transacccion</SelectItem>
                                <SelectItem value="yape">Yape</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Button className="bg-[#223A91] text-white px-6 py-2 rounded-xl">Aplicar Filtros</Button>
                        <Button className="text-blue-900">Limpiar</Button>
                    </div>
                    <div className="bg-white border rounded-xl overflow-hidden mt-6">
                        <Table className="w-full">
                            <TableHeader className="bg-gray-50">
                                <TableRow className="text-left text-sm text-blue-900">
                                    <TableHead className="p-5">TICKET ID</TableHead>
                                    <TableHead>FECHA</TableHead>
                                    <TableHead>CLIENTE / ESTUDIANTE</TableHead>
                                    <TableHead>MONTO TOTAL</TableHead>
                                    <TableHead>PAGO</TableHead>
                                    <TableHead>ESTADO</TableHead>
                                    <TableHead>ACCIONES</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y">
                                <TableRow>
                                    <TableCell className="p-5 font-bold text-blue-900">#BE-2024-8842</TableCell>
                                    <TableCell>15 May, 2024</TableCell>
                                    <TableCell>Miguel Almagro
                                    </TableCell>
                                    <TableCell className="font-bold">S/ 1,250.00</TableCell>
                                    <TableCell>Efectivo</TableCell>
                                    <TableCell><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">PAGADO</span>
                                    </TableCell>
                                    <TableCell>
                                        <ButtonGroup className=" text-blue-900">
                                            <Button><FaEye /></Button>
                                            <Button><FaPrint /></Button>
                                            <Button><FaDownload /></Button>
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <div className="flex justify-between items-center p-5 border-t">
                            <p className="text-sm text-gray-500">Mostrando 1 - 4 de 1,240 resultados</p>
                            <ButtonGroup>
                                <Button className="bg-[#223A91] text-white px-3 py-1 rounded">1</Button>
                                <Button className="border px-3 py-1 rounded">2</Button>
                                <Button className="border px-3 py-1 rounded">3</Button>
                                <Button className="border px-3 py-1 rounded">4</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

