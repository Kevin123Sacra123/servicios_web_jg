import Navegador from "@/components/Navegador_admin"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import Image from "next/image";
import logo from "@/img/logo.png"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LuPencilLine } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { ButtonGroup } from "@/components/ui/button-group";
import { FaArrowLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbConfettiFilled } from "react-icons/tb";
import Link from "next/link";


export default function Principal() {
  return (
  <div className="flex min-h-full bg-gray-100">
    <Navegador />
    <section className="bg-slate-100">
      <div className="flex min-h-screen">
        <div className="flex-1 p-10">
          <div className="flex justify-between">
            <div>
              <h1 className="text-5xl font-bold text-slate-800">Gestión de Eventos</h1>
              <p className="text-slate-500 mt-3">Administre el calendario académico y eventos especiales de la institución.</p>
            </div>
            <div className="flex gap-4">
              <Button className="border border-white px-7 py-4 rounded-xl flex items-center gap-3 bg-white text-[#19398A] h-[50px]"><FaRegCalendarAlt />Ver Calendario</Button>
              <Link href={'/admin/eventos/crear'} className="bg-[#19398A] text-white px-7 pt-2 pb-2  rounded-xl font-bold h-[50px] ">+ Crear Nuevo Evento</Link>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5 mt-10">
            <div className="col-span-3 bg-white rounded-2xl p-6 border border-slate-500">
              <div className="flex justify-between">
                <div className="text-2xl text-[#19398A]"><FaRegCalendarCheck /></div>
                <span className="text-green-600 text-sm">+12%</span>
              </div>
              <p className="uppercase text-xs text-slate-400 mt-6">Activos</p>
              <h2 className="text-5xl font-bold mt-3">24</h2>
            </div>
            <div className="col-span-3 bg-white rounded-2xl p-6 border border-slate-500">
              <div className="flex justify-between">
                <div className="text-2xl text-[#19398A]">
                  <RiCalendarScheduleLine />
                </div>
                <span className="text-slate-400 text-sm">Estable</span>
              </div>
              <p className="uppercase text-xs text-slate-400 mt-6"> Pendientes</p>
              <h2 className="text-5xl font-bold mt-3">08</h2>
            </div>
            <div className="col-span-6 bg-[#19398A] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute right-0 top-0 text-[170px] opacity-10 rotate-12">
                <TbConfettiFilled />
              </div>
              <h2 className="text-4xl font-bold">Próximo Gran Evento</h2>
              <p className="mt-3 text-blue-100">Día del Padre - 15 de Junio, 2024</p>
              <div className="flex gap-3 mt-8">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">85% Confirmados</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Auditorio A</span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-500 rounded-2xl mt-8 overflow-hidden p-4">
            <Field className="max-w-sm flex items-center">
              <InputGroup className="border border-slate-400">
                <InputGroupInput className="border border-slate-400 " id="inline-start-input" placeholder="Buscar eventos por nombre..." />
                <InputGroupAddon align="inline-start">
                  <FaMagnifyingGlass className="text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
              <Button className="outline">Filtar</Button>
            </Field>
            <Table className="w-full">
              <TableHeader className="bg-slate-50">
                <TableRow  className="uppercase text-xs text-slate-400">
                  <TableHead className="text-left px-6 py-5">Evento</TableHead>
                  <TableHead className="text-left">Estado</TableHead>
                  <TableHead className="text-left">Fecha</TableHead>
                  <TableHead className="text-left">Participantes</TableHead>
                  <TableHead className="text-center">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y">
                <TableRow className="hover:bg-slate-50">
                  <TableCell className="px-6 py-5">
                    <div className="flex gap-4">
                      <Image src={logo} alt="logo" className="w-16 h-16 rounded-lg object-cover" />
                      <div>
                        <h3 className="font-bold">Día del Padre</h3>
                        <p className="text-slate-400">Celebración Anual Escolar</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell><span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">● Active</span></TableCell>
                  <TableCell >15 Jun 2024</TableCell>
                  <TableCell>
                    <div className="flex">
                      <Image src={logo} alt="logo" className="w-10 h-10 rounded-full border-2 border-white" />
                      <Image src={logo} alt="logo" className="w-10 h-10 rounded-full border-2 border-white -ml-3" />
                      <Image src={logo} alt="logo" className="w-10 h-10 rounded-full border-2 border-white -ml-3" />
                      <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white -ml-3 flex items-center justify-center text-xs">+140</div>
                    </div>
                  </TableCell>
                  <TableCell className="flex items-center p-10">
                    <ButtonGroup >
                      <Button className="text-slate-600 hover:bg-blue-500 hover:text-white" ><LuPencilLine /></Button>
                      <Button className="text-slate-600 hover:bg-red-500 hover:text-white" ><FaRegTrashAlt /></Button>  
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableFooter className="">
                <TableRow>
                  <TableCell className="text-slate-400">Mostrando 3 de 32 eventos</TableCell>
                  <TableCell ></TableCell>
                  <TableCell ></TableCell>
                  <TableCell className="">
                    <ButtonGroup>
                      <Button className="w-10 h-10 border rounded-lg"><FaArrowLeft /></Button>
                      <Button  className="w-10 h-10 rounded-lg bg-[#19398A] text-white">1</Button>
                      <Button className="w-10 h-10">2</Button>                  
                      <Button className="w-10 h-10">3</Button>                  
                      <Button className="w-10 h-10 border rounded-lg"><FaLongArrowAltRight /></Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
          <div className="flex items-center justify-center mt-4">
              <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6">
                <h3 className="uppercase text-sm font-bold text-yellow-700">Atención Requerida</h3>
                <p className="mt-3 text-slate-600">
                  Hay 2 solicitudes de eventos estudiantiles
                  que aún no han sido revisadas.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
  )
}