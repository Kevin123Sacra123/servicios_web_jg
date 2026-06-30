import Navegador from "@/components/Navegador_estudiante";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import logo from "@/img/logo.png"
import axios from "axios";
import Image from "next/image";

async function loadProduct() {
    const id_product = 1 
  const { data } = await axios.get(`http://localhost:4000/bazar/inventario/edit/${id_product}`)
  return data;
}

async function Principal() {
    const producto = await loadProduct();

    return(
    <div className="flex min-h-screen bg-gray-100">
        <Navegador />
        <section className="bg-slate-100 min-h-screen flex justify-center py-10">
            <div className="w-full max-w-md">
                <div className="flex items-center gap-3 mb-5 px-2">
                    <Breadcrumb className="pb-5">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/estudiante/bazar">Bazar</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="font-bold text-blue-900">Detalles del producto</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>  
                </div>
                <div>
                    {producto.map(prod =>(
                        <div key={prod.id_product} className="bg-white rounded-3xl shadow border border-slate-200 p-4">
                            <div className="overflow-hidden rounded-3xl bg-slate-100">
                                <Image src={logo} className="w-full h-72 object-cover" alt="Producto" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mt-1">{prod.nombre}</h2>
                            <div className="flex justify-between items-center mt-3">
                                <h3 className="text-3xl font-bold text-blue-900">{prod.precio}</h3>
                            </div>
                            <div className="bg-slate-100 rounded-2xl p-5 mt-6">
                                <h4 className="font-bold text-blue-900 mb-4">Descripción</h4>
                                <p className="text-sm text-slate-600 leading-7">
                                    {prod.descripcion}
                                </p>
                            </div>
                            <Button className="mt-6 w-full bg-[#243b87] hover:bg-[#1d3173] text-white font-bold py-4 rounded-xl transition duration-300 uppercase">
                                Añadir al carrito
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
    )
}

export default Principal;