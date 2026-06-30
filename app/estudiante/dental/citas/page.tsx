"use client"

import Navegador from "@/components/Navegador_estudiante";
import { Button } from "@/components/ui/button";
import { GiBrain } from "react-icons/gi";
import {  Breadcrumb,  BreadcrumbItem,  BreadcrumbLink,  BreadcrumbList,  BreadcrumbPage,  BreadcrumbSeparator,} from "@/components/ui/breadcrumb"
import { es } from 'date-fns/locale';
import * as React from "react"
import { addDays } from "date-fns"
import { type DateRange } from "react-day-picker"
import { Calendar, CalendarDayButton } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Field,  FieldContent,  FieldDescription,  FieldLabel,  FieldTitle,} from "@/components/ui/field"
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { TbDental } from "react-icons/tb";

export default function Principal() {
    const [fechaSeleccionada, setFechaSeleccionada] = useState<Date>();

    const [range, setRange] = React.useState<DateRange | undefined>({
        from: new Date(new Date().getFullYear(), 6, 8),
        to: addDays(new Date(new Date().getFullYear(), 11, 8), 10),
    })

    const especialistas = [
    {
        id: 1,
        nombre: "Dra. Ana López",
        especialidad: "Psicología Clínica y Educativa",
    },
    {
        id: 2,
        nombre: "Dr. Carlos Pérez",
        especialidad: "Psicología Infantil",
    },
    {
        id: 3,
        nombre: "Dra. María Torres",
        especialidad: "Psicología Familiar",
    },
    ];

    const [cita, setCita] = useState({
        tipo : "dental",
        fecha: "",
        hora: "",
        estado: "pendiente",
        personal:"",
        id_paciente: 1
    });

    const router = useRouter()
    const handleChange = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value,
        });
    };

    const handleSumbit = async (e) => {
        e.preventDefault();
        console.log(cita)
        try{
            const res = await axios.post('http://localhost:4000/cita/crear_cita', cita);
            router.refresh(); 
            router.push('/estudiante/dental');
            console.log(res)
        }catch(error){
            console.log(error)
        }  
    };

    return(
        <div className="flex min-h-screen bg-gray-100">
            <Navegador />
            <section className="bg-gray-100 font-sans">
                <div className="max-w-full mx-auto p-6">
                    <Breadcrumb className="pb-5">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/estudiante/psicologia">Psicologia</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="font-bold text-blue-900">Agentar cita</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>  
                    <h1 className="text-2xl font-bold text-blue-900 mb-6">Psicología</h1>
                    <form className="flex justify-between gap-6" action="" onSubmit={handleSumbit} >
                        <div>
                            <h2 className="text-sm font-semibold text-gray-700 mb-1">Seleccionar Especialista</h2>
                            <p className="text-xs text-gray-400 mb-4">Elige el profesional para tu atención.</p>
                            <div className="flex items-center justify-between">
                                <RadioGroup className="space-y-4" value={cita.personal}
                                    onValueChange={(value) =>
                                        setCita({
                                        ...cita,
                                        personal: value,
                                        })
                                    }>
                                {especialistas.map((esp) => (
                                    <FieldLabel key={esp.id} htmlFor={`especialista-${esp.id}`} className="border-none">
                                        <Field>
                                            <FieldContent>
                                                <div className="border-2 rounded-xl p-4 cursor-pointer hover:border-blue-700 hover:bg-blue-50 transition">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex gap-3 items-center hover:border-blue-700">
                                                            <div className="w-15 h-15 bg-white border rounded-lg flex items-center justify-center hover:border-blue-700">
                                                                <TbDental className="text-blue-900 text-4xl" />
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold hover:text-blue-900 text-xl">{esp.nombre}</p>
                                                                <p className="text-sm text-gray-500">{esp.especialidad}</p>
                                                            </div>
                                                        </div>
                                                        <RadioGroupItem value={esp.nombre} id={`especialista-${esp.id}`} className="data-[state=checked]:bg-blue-700 data-[state=checked]:border-blue-700"/>
                                                    </div>
                                                </div>
                                            </FieldContent>
                                        </Field>
                                    </FieldLabel>
                                ))}
                                </RadioGroup>
                            </div>
                        </div>

                        <Card className="w-fit p-0 mx-2 bg-white">
                            <CardContent className="p-0 bg-white">
                                <Calendar
                                locale={es}
                                mode="single" defaultMonth={range?.from} selected={fechaSeleccionada} numberOfMonths={1} captionLayout="label"
                                className="rounded-lg border-none [--cell-size:3.75rem ] md:[--cell-size:5rem]"
                                onSelect={(date) => {
                                    setCita({
                                        ...cita,
                                        fecha: date?.toLocaleDateString(),
                                    });
                                }}
                                disabled={(date) => date < new Date()}
                                formatters={{
                                    formatMonthDropdown: (date) => {
                                    return date.toLocaleString("default", { month: "long" })
                                    },
                                }}
                                components={{
                                    DayButton: ({ children, modifiers, day, ...props }) => {
                                    const isWeekend = day.date.getDay() === 0 || day.date.getDay() === 6
                                    const isBoock = false
                                    return (
                                        <CalendarDayButton className=""
                                        day={day} modifiers={modifiers} {...props}>
                                        {!modifiers.outside && (
                                            <div className={isBoock ? "bg-red-200 p-5 rounded-full" : "bg-yellow-200 p-5 rounded-full focus:text-red-600"} >
                                                {children}
                                            </div> 
                                        )}
                                        </CalendarDayButton>
                                    )
                                    },
                                }}
                                />
                            </CardContent>
                            <div className="flex items-center justify-center gap-3 m-5">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                                    Horas completas disponibles
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-yellow-200 rounded-full"></span>
                                    Pocas horas para reservar
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-red-200 rounded-full"></span>
                                    No hay horas para reservar
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-white rounded-xl shadow p-5 flex flex-col justify-between w-[350px]">
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1 text-xl">{cita.fecha}</h3>
                                <p className="text-xs text-gray-400 mb-4">Selecciona una hora disponible para tu cita.</p>
                                <RadioGroup value={cita.hora} onValueChange={(value) => 
                                    setCita({
                                        ...cita,
                                        hora: value
                                    })
                                } className="max-w-sm grid grid-cols-2 gap-2">
                                    <label htmlFor="hora1" className="flex items-center justify-between border rounded-md p-3 hover:border-blue-700 transition">
                                        <div>
                                            <p className="font-medium" >09:00 AM</p>
                                        </div>
                                        <RadioGroupItem value="09:00 AM" id="hora1" className="data-[state=checked]:bg-blue-700 data-[state=checked]:border-blue-700" />
                                    </label>
                                    <label htmlFor="hora2" className="flex items-center justify-between border rounded-md p-3 hover:border-blue-700 transition">
                                        <div >
                                            <p className="font-medium" >09:45 AM</p>
                                        </div>
                                        <RadioGroupItem value="09:45 AM" id="hora2" className="data-[state=checked]:bg-blue-700 data-[state=checked]:border-blue-700" />
                                    </label>
                                </RadioGroup>
                            </div>
                            <Button className="mt-6 py-6 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800">Confirmar Cita →</Button>
                        </Card>
                    </form>
                </div>
            </section>
        </div>
    )
};