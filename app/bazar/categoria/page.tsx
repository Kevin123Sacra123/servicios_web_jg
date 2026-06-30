import Navegador from "@/components/Navegador_bazar";
import axios from "axios";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb";
import {  Table,  TableBody,  TableCaption,  TableCell,  TableFooter,  TableHead,  TableHeader,  TableRow,} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import {  InputGroup,  InputGroupAddon,  InputGroupInput,} from "@/components/ui/input-group"
import { LuSearch } from "react-icons/lu";
import Form_edit from "./Form_edit";
import Alerta_categoria from "./alerta_cate";

async function loadCategorias() {
  const { data } = await axios.get('http://localhost:4000/bazar/categorias')
  return data;
}

async function Principal() {
    const categorias = await loadCategorias();

    return (
    <div className="flex bg-[#f5f6fa] min-h-screen">
        <Navegador />
        <section className="w-full p-5 pb-4">
            <Breadcrumb className="p-5 pb-5">
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/bazar">Bazar</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbPage className="font-bold text-blue-900">Categorias</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>  
            <div className="p-5 flex gap-6">
                <div className="bg-[#f5f6fa]">
                   <Form_edit />
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center pr-8">
                        <h2 className="text-4xl font-bold text-[#17337d]">Resumen de Categorías</h2>
                         <InputGroup className="w-1/2">
                            <InputGroupInput placeholder="Buscar..." />
                                <InputGroupAddon>
                                <LuSearch />
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <div className="bg-white border rounded-xl mt-6 overflow-hidden">
                        <Table className="w-full">
                            <TableHeader className="bg-slate-300 text-slate-600">
                                <TableRow className="border border-slate-300">
                                    <TableHead className="text-left">Categoría</TableHead>
                                    <TableHead className="text-left">Descripcion</TableHead>
                                    <TableHead className="text-left">Productos</TableHead>
                                    <TableHead className="text-left">Acciones</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y">
                                {categorias.map(categoria => (
                                <TableRow key={categoria.id_categoria} className="hover:bg-slate-50">
                                    <TableCell className="font-semibold text-[#17337d]">{categoria.nombre}</TableCell>
                                    <TableCell className="text-sm text-slate-500">{categoria.descripcion}</TableCell>
                                    <TableCell>{categoria.productos}</TableCell>
                                    <TableCell>
                                        <ButtonGroup>
                                            <Button className="text-slate-400 hover:text-[#17337d] border border-[#17337d]" >
                                                <FaPencilAlt />
                                            </Button>
                                            <ButtonGroupSeparator />
                                            <Alerta_categoria id={categoria.id_categoria} nombre={categoria.nombre} ></Alerta_categoria>
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter className="bg-slate-50">
                                <TableRow className="">
                                    <TableCell className="text-sm text-slate-500">Mostrando 5 de 12 categorías</TableCell>
                                    <TableCell>
                                        <Button>
                                            <FaArrowLeft />
                                        </Button>
                                        <Button>
                                            <FaArrowRight />
                                        </Button>
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8 p-5">
                <div className="bg-white border rounded-xl p-6">
                    <div className="w-12 h-12 rounded-md bg-slate-200text-slate-700 flex items-center justify-center"></div>
                    <h3 className="font-semibold text-[#17337d] mt-5">Métricas de Venta</h3>
                    <p className="text-slate-500 mt-3">Próximamente podrá ver el rendimiento de ventas por categoría.</p>
                </div>
                <div className="bg-white border rounded-xl p-6">
                    <div className="w-12 h-12 rounded-md bg-yellow-700 text-white flex items-center justify-center"></div>
                    <h3 className="font-semibold text-[#17337d] mt-5">Ayuda y Soporte</h3>
                    <p className="text-slate-500 mt-3">¿Necesita asistencia para organizar su inventario? Contacte al departamento de TI institucional.</p>
                </div>
            </div>
        </section>
    </div>
    );
}

export default Principal;