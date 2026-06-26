import Navegador from "@/components/Navegador_estudiante";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from '@/img/logo.png'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
/*text-red-500 font-semibold*/

export default function Principal() {
    return(
  <div className="flex min-h-screen bg-gray-100">
    <Navegador />
      <section className="bg-gray-100 font-sans">
        <div className="max-w-5xl mx-auto p-6">
          <Breadcrumb className="pl-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/estudiante/taller">Taller</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbPage className="font-bold text-blue-900">Sobre el taller</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
          <h1 className="mt-5 mb-5 text-xl font-semibold text-gray-800">Talleres</h1>
          </Breadcrumb> 
          <div className="bg-white rounded-2xl shadow overflow-hidden mb-6">
            <Image src={logo} className="w-full h-64 object-cover" alt="logo"/>
            <div className="p-5">
              <span className="text-xs bg-yellow-200 text-yellow-800 px-3 py-1 rounded">DEPORTES</span>
              <h2 className="text-2xl font-bold text-gray-800 mt-3">Fútbol</h2>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Desarrolla tus habilidades en el deporte más popular del mundo.
                Este taller está diseñado para potenciar tu capacidad física y técnica individual.
              </p>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Horarios Disponibles</h3>
          <Table className="bg-white rounded-xl shadow overflow-hidden">
            <TableHeader className="text-xs text-gray-500 bg-gray-50 px-4 py-3 font-semibold">
              <TableHead>DÍAS</TableHead>
              <TableHead>HORA</TableHead>
              <TableHead>LUGAR</TableHead>
              <TableHead>PROFESOR</TableHead>
              <TableHead>AFORO</TableHead>
              <TableHead className="text-center">ACCIÓN</TableHead>
            </TableHeader>
            <TableBody className="px-4 py-4 border-t text-sm">
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <FaRegCalendarAlt />
                  <span className="font-medium">Lunes y Miércoles</span>
                </TableCell>
                <TableCell>4:00 PM - 6:00 PM</TableCell>
                <TableCell>Campo Deportivo Principal</TableCell>
                <TableCell>Prof. Carlos Méndez</TableCell>
                <TableCell>20/25</TableCell>
                <TableCell className="flex justify-center">
                  <Button className="bg-blue-700 text-white px-4 py-2 rounded text-xs font-medium">
                    INSCRIBIRSE
                  </Button>
                </TableCell>
              </TableRow>
              
            </TableBody>
          </Table>
        </div>
      </section>
  </div>
  )
};