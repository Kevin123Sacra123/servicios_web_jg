import Navegador from "@/components/Navegador_estudiante";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import imagen1 from '@/img/dia_padre.jpg'
import { CiCalendar } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

export default function Principal() {
    return(
        <div className="flex min-h-screen bg-gray-100">
            <Navegador />
            <section className="bg-slate-100 min-h-screen">
                <div className="max-w-3xl mx-auto p-4">
                    <div className="flex items-center gap-3 mb-4">
                        <Button className="text-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </Button>
                        <h1 className="text-lg font-medium text-slate-700">Eventos</h1>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200">
                        <div className="relative h-72">
                            <Image className="w-full h-full object-cover" src={imagen1} alt="Día del Padre" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-24 left-6">
                                <span className="bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full">CELEBRACIÓN</span>
                                <h2 className="text-white text-4xl font-bold mt-3">Día del Padre</h2>
                            </div>
                        </div>
                        <div className="bg-white rounded-t-3xl -mt-12 relative z-10 px-6 py-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="border border-slate-200 rounded-2xl p-5">
                                    <div className="text-blue-900 mb-3">
                                    <CiCalendar />
                                    </div>
                                    <p className="text-xs uppercase text-slate-500">Fecha</p>
                                    <p className="mt-1 text-slate-800 font-medium">
                                        21 de Junio,
                                        <br />
                                        2026
                                    </p>
                                </div>
                                <div className="border border-slate-200 rounded-2xl p-5">
                                    <div className="text-blue-900 mb-3">
                                        <FaRegClock />
                                    </div>
                                    <p className="text-xs uppercase text-slate-500">Hora</p>
                                    <p className="mt-1 text-slate-800 font-medium">09:00 AM</p>
                                </div>
                            </div>
                            <div className="mt-4 border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white">
                                        <FaLocationDot />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Ubicación</p>
                                        <p className="text-blue-900 font-medium">Patio Principal</p>
                                    </div>
                                </div>
                                <span className="text-slate-400 text-xl"> <FaAngleRight /> </span>
                            </div>
                            <div className="mt-8">
                                <h3 className="font-bold text-xl text-slate-800 mb-4">Acerca del evento</h3>
                                <p className="text-slate-600 leading-7">
                                    Un evento especial para celebrar a todos los padres de nuestra
                                    comunidad educativa.
                                </p>
                                <p className="text-slate-600 leading-7">
                                    Tendremos presentaciones artísticas, juegos y un compartir
                                    institucional.
                                </p>
                            </div>
                            <Button className="w-full mt-10 bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 rounded-lg transition">
                                CONFIRMAR ASISTENCIA
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};