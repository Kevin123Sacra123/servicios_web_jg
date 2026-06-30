import Navegador from "@/components/Navegador_estudiante";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from '@/img/logo.png'
import { CiCirclePlus } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { MdOutlineFavorite } from "react-icons/md";
import axios from "axios";
import Link from "next/link";

async function loadProducts() {
  const { data } = await axios.get('http://localhost:4000/bazar/inventario')
  return data;
}

async function Principal() {
    const productos = await loadProducts();
    return(
        <div className="flex min-h-screen bg-gray-100">
            <Navegador />
            <section className="bg-slate-100">
                <div className="p-4">
                    <h1 className="text-4xl font-bold text-slate-900 mb-10">Bazar</h1>
                    <div className="flex gap-3 mb-8">
                        <Input type="text" placeholder="buscar por nombre" />
                        <Button className="px-5 py-3 rounded-lg bg-blue-900 text-white font-semibold">Todos</Button>
                        <Button className="px-5 py-3 rounded-lg bg-slate-200 text-slate-600">Uniformes
                        </Button>
                        <Button className="px-5 py-3 rounded-lg bg-slate-200 text-slate-600">Plantas</Button>
                    </div>
                    <div className="grid grid-cols-6 gap-4 overflow-x-auto pb-4">
                        {productos.map(product =>(
                            <div key={product.id_product} className="min-w-[220px] bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                                <div className="relative h-56 bg-teal-400">
                                    <Image className="w-full h-full object-cover" src={logo} alt="Uniforme de Gala"/>
                                    <Button className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white shadow flex items-center justify-center">
                                        <MdOutlineFavorite className="text-blue-900" />
                                    </Button>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-slate-900">{product.nombre}</h3>
                                    <span className="text-gray-700 text-sm">{product.descripcion}</span>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-blue-900 font-bold text-2xl">S/ {product.precio}</span>
                                        <Link href={`/estudiante/bazar/${product.id_product}`} className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center">+</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <div className="bg-indigo-50 rounded-[30px] p-8 flex justify-between items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">Próximamente</h2>
                                <p className="mt-2 text-slate-500">Mas productos en el bazar...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )  
};

export default Principal;