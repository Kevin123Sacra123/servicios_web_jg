"use client"

import Navegador from "@/components/Navegador_bazar";
import { AiOutlineProduct } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { FaEye } from "react-icons/fa";

export default function Principal() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navegador />
      <div className="flex justify-center">
        <div className="flex-1 p-8">
          <div className="mb-6">
              <h2 className="text-4xl font-bold text-blue-900">Vista General</h2>
              <p className="text-gray-600 mt-1">Bienvenido de nuevo al centro de operaciones del Bazar Institucional.</p>
          </div>
          <div className="bg-white rounded-lg border shadow-sm p-5">
              <h3 className="text-lg font-medium text-blue-900 mb-4">Acciones Rápidas</h3>
              <div className="space-y-3">
                  <Link href={'/bazar/inventario/crear_producto'} className="w-full border rounded-lg p-4 flex items-center justify-between hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center">
                              <AiOutlineProduct />
                          </div>
                          <span className="font-medium text-blue-900">Agregar Producto</span>
                      </div>
                      <IoIosArrowForward />
                  </Link>
                  <Link href={'/bazar/reportes'} className="w-full border rounded-lg p-4 flex items-center justify-between hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-gray-200 text-gray-600 flex items-center justify-center">
                              <IoDocumentOutline />
                          </div>
                          <span className="font-medium text-blue-900">Generar Reporte</span>
                      </div>
                      <IoIosArrowForward />
                  </Link>
              </div>
          </div>
          <div className="bg-white rounded-lg border shadow-sm mt-6">
              <div className="flex items-center justify-between px-6 py-4 border-b">
                  <h3 className="text-lg font-medium text-blue-900">Pedidos Recientes</h3>
                  <Link href={'bazar/historial'} className="text-sm text-blue-800 font-medium hover:underline">Ver todos los pedidos</Link>
              </div>
              <div className="overflow-x-auto">
                  <Table className="w-full">
                      <TableHeader className="bg-gray-50 text-gray-600 text-sm">
                          <TableRow>
                              <TableCell className="text-left px-6 py-4">ID PEDIDO</TableCell>
                              <TableCell className="text-left px-6 py-4">CLIENTE</TableCell>
                              <TableCell className="text-left px-6 py-4">FECHA</TableCell>
                              <TableCell className="text-left px-6 py-4">ESTADO</TableCell>
                              <TableCell className="text-left px-6 py-4">TOTAL</TableCell>
                              <TableCell className="text-left px-6 py-4">ACCIÓN</TableCell>
                          </TableRow>
                      </TableHeader>
                      <TableBody className="divide-y">
                          <TableRow className="border-t">
                              <TableCell className="px-6 py-4 font-semibold text-blue-900">#BZ-8921</TableCell>
                              <TableCell className="px-6 py-4">Carlos Arboleda (Alumno)</TableCell>
                              <TableCell className="px-6 py-4">12 May, 2024</TableCell>
                              <TableCell className="px-6 py-4">
                                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Pagado</span>
                              </TableCell>
                              <TableCell className="px-6 py-4 font-semibold">$125.00</TableCell>
                              <TableCell className="px-6 py-4 ">
                                <Link href={'/bazar/vista/1'}><FaEye /></Link>
                              </TableCell>
                          </TableRow>
                      </TableBody>
                  </Table>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
