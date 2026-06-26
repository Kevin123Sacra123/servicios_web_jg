import Navegador from "@/components/Navegador_estudiante";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaBasketball } from "react-icons/fa6";

export default function Principal() {
    return(
        <div className="flex min-h-screen bg-gray-100">
            <Navegador />
            <section className="bg-slate-100 min-h-screen">
                <div className="max-w-7xl mx-auto p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-4xl font-bold text-slate-800">Talleres</h1>
                        <Button className="text-slate-700 text-xl">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </Button>
                    </div>
                    <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Categorías</span>
                        <Input type="text" placeholder="buscar taller" />
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col items-center shadow-sm w-[250px]">
                            <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center mb-4">
                                <FaBasketball className="text-2xl text-yellow-500" />
                            </div>
                            <h3 className="font-bold text-xl text-slate-800">Básquet</h3>
                            <p className="text-sm text-slate-500 mt-1">Martes y Jueves</p>
                            <Link href={'/estudiante/talleres/detalle'} className="text-center mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded">VER</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};