import Navegador from "@/components/Navegador_estudiante";
import { Button } from "@/components/ui/button";
import logo from "@/img/dia_padre.jpg"
import Image from "next/image";


export default function Principal() {
    return(
        <div className={'flex min-h-screen bg-gray-100'} >
            <Navegador />
            <section className="">
                <div className="max-w-3xl mx-auto p-5">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-4xl font-bold text-slate-900">Mis Citas</h1>
                        <Button className="p-2 rounded-lg hover:bg-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-slate-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 5v.01M12 12v.01M12 19v.01" />
                            </svg>
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                            <div className="h-44 bg-slate-200">
                                <Image src={logo} alt="Psicología" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-5">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-slate-900">Psicología</h3>
                                    <span className="px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-slate-200 text-slate-600">PENDIENTE</span>
                                </div>
                                <p className="text-slate-500 mt-1">Consulta general</p>
                                <div className="flex items-center gap-2 mt-5 text-slate-600">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <circle cx="12" cy="12" r="9" stroke-width="2"/>
                                        <path d="M12 7v5l3 2" stroke-width="2"/>
                                    </svg>
                                    <span className="text-sm">15 de Octubre • 10:00 AM</span>
                                </div>
                                <hr className="my-6" />
                                <Button className="w-full text-center text-blue-900 font-medium hover:text-blue-700">Cancelar solicitud</Button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">

                            <div className="h-44 bg-slate-200">
                                <Image src={logo} alt="Dental" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-5">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-slate-900">Dental</h3>
                                    <span className="px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-slate-200 text-slate-600">PENDIENTE</span>
                                </div>
                                <p className="text-slate-500 mt-1">Control dental</p>
                                <div className="flex items-center gap-2 mt-5 text-slate-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <circle cx="12" cy="12" r="9" stroke-width="2"/>
                                        <path d="M12 7v5l3 2" stroke-width="2"/>
                                    </svg>
                                    <span className="text-sm">20 de Octubre • 02:30 PM</span>
                                </div>
                                <hr className="my-6" />
                                <Button className="w-full text-center text-blue-900 font-medium hover:text-blue-700">Cancelar solicitud</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};