import Navegador from "@/components/Navegador_estudiante";
import { Button } from "@base-ui/react";
import Link from "next/link";

export default function Principal() {
    return (
        <div className="flex">
            <Navegador />
            <section className="bg-gray-100 font-sans">
                <div className="max-w-6xl mx-auto p-6">
                    <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Psicología</h1>
                        <p className="text-sm text-gray-500">Gestiona tus citas y revisa las recomendaciones de tus especialistas.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50">🔍 Buscar por Fecha</Button>
                        <Link href={'/estudiante/psicologia/citas'} className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800">+ Solicitar Nueva Cita</Link>
                    </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2 bg-white rounded-lg shadow p-5">
                            <div className="flex gap-6 border-b mb-4">
                                <Button className="text-blue-700 border-b-2 border-blue-700 pb-2 text-sm font-medium">Pendientes 0</Button>
                                <Button className="text-gray-400 pb-2 text-sm">Completadas</Button>
                            </div>
                            <div className="flex justify-between items-center border rounded-lg p-4 mb-3">
                                <div className="flex gap-3 items-center">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    🧠
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Dra. Elena Vargas</p>
                                        <p className="text-xs text-gray-500">24 Nov, 2023 • 10:30 AM</p>
                                    </div>
                                </div>

                                <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">Por Confirmar</span>
                            </div>

                            <div className="flex justify-between items-center border rounded-lg p-4">
                                <div className="flex gap-3 items-center">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    🧠
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Dr. Carlos Mendoza</p>
                                        <p className="text-xs text-gray-500">02 Dic, 2023 • 15:00 PM</p>
                                    </div>
                                </div>
                                <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">Agendada</span>
                            </div>
                            <div className="text-center mt-4">
                                <Link href={'/estudiante/citas'} className="text-blue-600 text-sm hover:underline">Ver historial completo</Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-5">
                            <h2 className="font-semibold text-gray-800 mb-4">Comentarios del Psicólogo</h2>
                            <div className="bg-gray-50 border rounded-lg p-4">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-semibold text-gray-700">Dra. Elena Vargas</span>
                                    <span className="text-gray-400">10 Nov</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    El estudiante muestra un avance significativo en las técnicas de organización del tiempo.
                                    Se recomienda aplicar la técnica Pomodoro para las próximas entregas finales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )   
};