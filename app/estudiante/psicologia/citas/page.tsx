import Navegador from "@/components/Navegador_estudiante";
import { Button } from "@/components/ui/button";


export default function Principal() {
    return(
        <div className="flex">
            <Navegador />
            <section className="bg-gray-100 font-sans">
                <div className="max-w-7xl mx-auto p-6">
                    <h1 className="text-2xl font-bold text-blue-900 mb-6">Psicología</h1>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                        <h2 className="text-sm font-semibold text-gray-700 mb-1">Seleccionar Especialista</h2>
                        <p className="text-xs text-gray-400 mb-4">Elige el profesional para tu atención.</p>
                        <div className="border-2 border-blue-700 bg-blue-50 rounded-xl p-4 mb-4">
                            <div className="flex items-center justify-between">
                            <div className="flex gap-3 items-center">
                                <div className="w-10 h-10 bg-white border rounded-lg flex items-center justify-center">
                                🧠
                                </div>
                                <div>
                                <p className="font-semibold text-blue-900 text-sm">Dra. Ana López</p>
                                <p className="text-xs text-gray-500">Psicología Clínica y Educativa</p>
                                </div>
                            </div>
                            <span className="text-blue-700">✔</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow">
                            <div className="flex gap-3 items-center">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                🧠
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800 text-sm">Dr. Carlos Mendoza</p>
                                <p className="text-xs text-gray-500">Especialista en Ansiedad</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="bg-white rounded-xl shadow p-5">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-gray-800">Octubre 2023</h3>
                            <div className="flex gap-2">
                            <button className="px-2 py-1 border rounded">‹</button>
                            <button className="px-2 py-1 border rounded">›</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
                            <span>LUN</span><span>MAR</span><span>MIE</span>
                            <span>JUE</span><span>VIE</span><span>SAB</span><span>DOM</span>
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-sm">

                            <div className="bg-gray-100 p-2 rounded text-center">1</div>
                            <div className="bg-gray-200 p-2 rounded text-center">2</div>
                            <div className="bg-yellow-100 p-2 rounded text-center">3</div>
                            <div className="bg-gray-200 p-2 rounded text-center">4</div>
                            <div className="bg-gray-100 p-2 rounded text-center">5</div>
                            <div className="bg-gray-200 p-2 rounded text-center">6</div>
                            <div className="bg-gray-200 p-2 rounded text-center">7</div>

                            <div className="bg-yellow-100 p-2 rounded text-center">8</div>
                            <div className="bg-gray-200 p-2 rounded text-center">9</div>
                            <div className="bg-gray-200 p-2 rounded text-center">10</div>
                            <div className="bg-gray-200 p-2 rounded text-center">11</div>
                            <div className="bg-gray-200 p-2 rounded text-center">12</div>
                            <div className="bg-gray-200 p-2 rounded text-center">13</div>

                            <div className="bg-blue-900 text-white p-2 rounded text-center font-semibold">15</div>

                            <div className="bg-yellow-100 p-2 rounded text-center">16</div>
                            <div className="bg-gray-200 p-2 rounded text-center">17</div>
                            <div className="bg-gray-200 p-2 rounded text-center">18</div>
                            <div className="bg-gray-200 p-2 rounded text-center">19</div>
                            <div className="bg-gray-100 p-2 rounded text-center">20</div>
                        </div>

                        <div className="mt-5 text-xs space-y-2">
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

                        </div>

                        <div className="bg-white rounded-xl shadow p-5 flex flex-col justify-between">

                        <div>
                            <h3 className="font-semibold text-gray-800 mb-1">Miércoles, 15 de Octubre</h3>
                            <p className="text-xs text-gray-400 mb-4">Selecciona una hora disponible para tu cita.</p>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <Button className="border rounded-lg py-2">09:00 AM</Button>
                                <Button className="border rounded-lg py-2">09:45 AM</Button>
                                <Button className="bg-gray-200 text-gray-400 rounded-lg py-2 line-through">10:30 AM</Button>
                                <Button className="border rounded-lg py-2">11:15 AM</Button>
                                <Button className="border-2 border-blue-800 text-blue-800 font-semibold rounded-lg py-2">02:00 PM</Button>
                                <Button className="border rounded-lg py-2">02:45 PM</Button>
                                <Button className="border rounded-lg py-2">03:30 PM</Button>
                                <Button className="bg-gray-200 text-gray-400 rounded-lg py-2 line-through">04:15 PM</Button>
                            </div>
                        </div>
                        <Button className="mt-6 bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800">Confirmar Cita →</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};