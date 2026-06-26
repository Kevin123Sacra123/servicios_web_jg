"use client"

import Navegador from "@/components/Navegador_estudiante";
import { AiOutlineProduct } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { FaEye } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import imagen1 from '@/img/dia_padre.jpg'
import { Separator } from "@/components/ui/separator";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";


export default function Principal() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navegador />
      <div className="flex justify-center">
        <div className="">
            <div className="max-w-7xl mx-auto p-5">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold text-slate-900">Eventos</h1>
                    <Button>
                        <i className="fa-solid fa-ellipsis-vertical text-xl text-slate-700"></i>
                    </Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    <article className="w-[400px] bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition">
                        <div className="h-48 overflow-hidden">
                            <Image className="w-full h-full object-cover" src={imagen1} alt="Día del Padre" />
                        </div>
                        <div className="p-5">
                            <span className="inline-flex px-4 py-2 rounded bg-indigo-900 text-white text-xs font-bold uppercase">Institucional</span>
                            <h2 className="mt-5 text-3xl font-bold text-slate-900">Día del Padre</h2>
                            <div className="mt-5 space-y-3">
                                <div className="flex items-center gap-3 text-slate-600">
                                    <CiCalendar />
                                    <span>16 de Junio, 09:00 AM</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <CiLocationOn />
                                    <span>Patio Principal</span>
                                </div>
                            </div>
                            <Separator className="my-5" />
                            <div className="flex items-center justify-end">
                                <Link href={'/estudiante/eventos/sobre'} className="bg-indigo-900 hover:bg-indigo-800 text-white px-6 py-3 rounded-xl font-semibold">Ver detalles</Link>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
