import Navegador from "@/components/Navegador_estudiante";
import { Button } from "@/components/ui/button";
import fondo from "@/img/fondo_topico.jpg"
import axios from "axios";
import Image from "next/image";
import { CiClock1 } from "react-icons/ci";

async function loadCitas() {
  const { data } = await axios.get('http://localhost:4000/citas')
  return data;
}

async function Principal() {
    const citas = await loadCitas();
    return(
        <div className='flex min-h-screen bg-gray-100'>
            <Navegador />
            <section className="">
                <div className="max-w-3xl mx-auto p-5">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-4xl font-bold text-slate-900">Mis Citas</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {citas.map(cit =>(
                            <div key={cit.id_citas} className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                                <div className="h-44 bg-slate-200">
                                    <Image src={fondo} alt={cit.tipo} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-2xl font-bold text-slate-900 capitalize">{cit.tipo}</h3>
                                        <span className="px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-slate-200 text-slate-600 uppercase">{cit.estado}</span>
                                    </div>
                                    <p className="text-slate-500 mt-1">Consulta general</p>
                                    <div className="flex items-center gap-2 mt-5 text-slate-600">
                                        <CiClock1 />
                                        <span className="text-sm">{cit.fecha} • {cit.hora}</span>
                                    </div>
                                    <hr className="my-6" />
                                    <Button className="w-full text-center text-blue-900 font-medium hover:text-blue-700">Cancelar solicitud</Button>
                                </div>  
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Principal;