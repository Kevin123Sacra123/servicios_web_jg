import Navegador from "@/components/Navegador_estudiante"
import { Button } from "@/components/ui/button"
import fondo from "@/img/fondo.jpg"
import Image from "next/image"
import { RiGraduationCapLine } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Principal() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Navegador />
            <section className="">
                <div className="max-w-6xl mx-auto p-6">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                        <Image src={fondo} className="w-full h-72 object-cover" alt="Campus" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-start p-10">
                            <div>
                                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">CICLO 2026</span>
                                <h1 className="text-white text-4xl font-bold mt-3">Admisiones 2026</h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold text-gray-800">Proceso de Admisión y Becas</h2>
                        <p className="text-gray-600 mt-2 max-w-2xl">
                            Descubre las oportunidades académicas y los apoyos financieros disponibles para el ciclo escolar 2026. 
                            Nuestro compromiso es la excelencia educativa y el desarrollo integral de cada estudiante.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border flex items-start gap-4">
                                <div className="bg-blue-100  p-3 rounded-lg">
                                    <RiGraduationCapLine className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Excelencia Académica</h3>
                                    <p className="text-gray-600 text-sm mt-1">Programas acreditados internacionalmente.</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border flex items-start gap-4">
                                <div className="bg-blue-100  p-3 rounded-lg">
                                    <CiCalendar className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Fechas Clave</h3>
                                    <p className="text-gray-600 text-sm mt-1">Exámenes de ingreso en Mayo y Junio.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 text-center">
                            <Button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">Más información <FaExternalLinkAlt /></Button>
                            <p className="text-xs text-gray-400 mt-3">Consulta los términos y condiciones en el portal oficial.</p>
                        </div>
                    </div>
                </div>            
            </section>
        </div>
    )
}