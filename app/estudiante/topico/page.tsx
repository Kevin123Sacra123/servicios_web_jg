import Navegador from "@/components/Navegador_estudiante";
import Image from "next/image";
import logo from '@/img/logo.png'
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { FaPaperPlane } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

export default function Principal() {
    return(
        <div className="flex min-h-screen bg-gray-100">
            <Navegador />
            <section className="bg-slate-100 min-h-screen w-full flex justify-center">
                <div className="">
                <div className="relative h-80 min-w-full overflow-hidden rounded-b-xl">
                    <Image src={logo} alt="Atención Médica" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75">
                    </div>
                    <div className="absolute bottom-14 left-10 text-white">
                        <h1 className="text-5xl font-bold">Atención Médica</h1>
                        <p className="text-2xl font-semibold opacity-90">Cuidado integral</p>
                    </div>
                </div>
                <br />
                <div className="max-w-4xl mx-auto mt-4 px-6 pb-20">
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-6">
                            <FaPen />
                            <h2 className="font-extrabold text-2xl text-slate-900 uppercase">Causa o Motivo</h2>
                        </div>
                        <Separator className="mb-8" />
                        <h3 className="text-xs uppercase tracking-wider font-bold text-slate-700 mb-3">Registrar Atención</h3>
                        <Field>
                            <Textarea className="w-full rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm outline-none focus:ring-2 focus:ring-blue-800 "
                                placeholder="Describa brevemente el motivo de su visita o los síntomas que presenta..."
                                rows={10} />
                            <div className="text-right text-[11px] tracking-widest uppercase text-slate-400 mt-2">
                                Entrada requerida
                            </div>
                        </Field>
                        <div className="mt-6 bg-indigo-50 rounded-lg px-4 py-5 flex items-center gap-3">
                            <FaInfoCircle />
                            <p className="text-sm text-slate-600">
                                Al enviar este aviso, el personal de tópico recibirá una
                                notificación inmediata.
                            </p>
                        </div>
                        <Button className="w-full mt-6 bg-indigo-800 hover:bg-indigo-900 transition-all text-white font-bold py-4 rounded-lg uppercase tracking-wide flex items-center justify-center gap-3">
                            Enviar Aviso
                            <FaPaperPlane />
                        </Button>
                    </div>
                </div>
                </div>

            </section>        
        </div>
    )
};