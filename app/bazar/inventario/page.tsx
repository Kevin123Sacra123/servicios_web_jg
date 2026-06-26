/*"use client" */

import Navegador from "@/components/Navegador_bazar";
import axios from "axios";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuInbox } from "react-icons/lu";
import { CgDanger } from "react-icons/cg";
import { GiReceiveMoney } from "react-icons/gi";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import logo from '../../../img/logo.png'
import { ScrollArea } from "@/components/ui/scroll-area";
import ModalProducto from "@/components/ModalProducto";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { GoAlertFill } from "react-icons/go";

async function loadProducts() {
  const { data } = await axios.get('http://localhost:4000/bazar/inventario')
  return data;
}

async function Principal() {
  const products = await loadProducts();

  return (
    <div className="flex">
      <Navegador />
      <div className="flex justify-center">
        <div className="min-h-screen border-l-4 border-blue-900">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-8">Inventario</h1>
            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
              <div className="flex items-center justify-between md:flex-row gap-4">
                <ButtonGroup>
                    <Input className="w-full pl-2 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Buscar por nombre de producto..." />
                    <Button variant="outline" aria-label="Search">
                      <FaMagnifyingGlass />
                    </Button>
                </ButtonGroup>
                <Select>
                  <SelectTrigger className="px-4 py-3 border rounded-lg bg-white min-w-[180px]">
                    <SelectValue placeholder="Todas las categorias" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="bg-white">
                      <SelectItem value="todo">Todas las categorias</SelectItem>
                      <SelectItem value="uniformes">Uniformes</SelectItem>
                      <SelectItem value="libros">Libros</SelectItem>
                      <SelectItem value="deportes">deportes</SelectItem>
                      <SelectItem value="robotica">robotica</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>    
                <Link className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                href={'/bazar/inventario/crear_producto'}>
                  <span className="text-lg"><CiCirclePlus /></span>
                Agregar Producto
                </Link>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table className="w-full">
                  <ScrollArea className="h-[400px] w-full rounded-md p-4">

                    <TableHeader className="bg-gray-50">
                      <TableRow className="text-left text-sm text-blue-900">
                        <TableHead className="px-6 py-4">Producto</TableHead>
                        <TableHead className="px-4 py-4">Categoría</TableHead>
                        <TableHead className="px-4 py-4">Precio</TableHead>
                        <TableHead className="px-4 py-4">Stock</TableHead>
                        <TableHead className="px-4 py-4">Estado</TableHead>
                        <TableHead className="px-6 py-4 text-center">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map(product => (
                      <TableRow className="border-t" key={product.id_product} >
                        <TableCell className="px-6 py-4">
                          <div className="flex items-center gap-4 ">
                            <Image  src={logo} alt='logo' className="w-[50px] rounded-lg object-cover" />
                            <span className="font-semibold text-blue-900">{product.nombre}</span>
                          </div>
                        </TableCell>
                        <TableCell className="px-4">{product.categoria}</TableCell>
                        <TableCell className="px-4 font-bold text-blue-900">{product.precio}</TableCell>
                        <TableCell className="px-4">{product.stock}</TableCell>
                        <TableCell className="px-4">
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">{product.estado}</span>
                        </TableCell>
                        <TableCell className="px-6">
                          <ButtonGroup className="flex justify-center items-center ">
                            <Button className="text-gray-600 border border-blue-700 hover:text-blue-700 hover:text-white hover:bg-blue-700">
                              <Link href={`/bazar/inventario/edit/${product.id_product}`} > 
                                <FaPencilAlt /> 
                              </Link>
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button className="text-gray-600 border border-red-600 rounded-2xl hover:text-red-600 hover:text-white hover:bg-red-600"><FaTrashAlt /> </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent className="bg-white">
                                <AlertDialogHeader className="">
                                  <AlertDialogTitle className="">
                                    <p className="text-red-500 text-2xl ">¿Estas seguro de eliminar el producto? </p>
                                    <p className="text-red-500 text-center text-xl">{product.nombre}</p>
                                  </AlertDialogTitle>
                                  <AlertDialogDescription className="text-left text-lg">
                                    Esta acción no se puede deshacer.
                                    ¿Estás seguro de que deseas eliminar permanentemente este producto del inventario?
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter className="flex items-center justify-center">
                                  <AlertDialogAction className="bg-red-600 text-white" >
                                    Eliminar
                                  </AlertDialogAction>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>

                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                      ))}
                      
                    </TableBody>
                    
                    </ScrollArea>
                    <TableFooter className="">
                      <TableRow className="text-sm text-gray-500 flex items-center justify-end">
                        <TableCell>Mostrando 4 de 142 productos</TableCell>
                        <TableCell>
                          <ButtonGroup className="flex items-center gap-2 mt-4 md:mt-0">
                            <Button className="w-9 h-9 border rounded text-gray-500"> <FaLongArrowAltLeft /> </Button>
                            <Button className="w-9 h-9 rounded bg-blue-900 text-white">1</Button>
                            <Button className="w-9 h-9 border rounded text-gray-500">2</Button>
                            <Button className="w-9 h-9 border rounded text-gray-500"> <FaLongArrowAltRight /> </Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    </TableFooter>
                </Table>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mt-6 max-w-2xl">
              <div className="bg-blue-800 text-white rounded-xl p-6">
                <p className="text-blue-200 text-sm mb-4">Valor Total Inventario</p>
                <div className="flex justify-between items-center">
                  <h2 className="text-4xl font-bold"> S/150.00</h2>
                  <span className="text-4xl text-white"><GiReceiveMoney /></span>
                </div>
              </div>
              <div className="bg-white border rounded-xl p-6">
                <p className="text-gray-500 text-sm mb-4">Alertas de Stock</p>
                <div className="flex justify-between items-center"><h2 className="text-4xl font-bold text-blue-900">12 Productos</h2>
                  <span className="text-4xl text-gray-400"><CgDanger /></span>
                </div>
              </div>
              <div className="bg-white border rounded-xl p-6">
                <p className="text-gray-500 text-sm mb-4">Productos sin Stock</p>
                <div className="flex justify-between items-center"><h2 className="text-4xl font-bold text-blue-900">2 Productos</h2>
                  <span className="text-4xl text-gray-400"><LuInbox /></span>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>     
  );
}

export default Principal;