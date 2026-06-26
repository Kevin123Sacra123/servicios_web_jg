"use client"

import Link from 'next/link';
import Image from 'next/image';
import logo from '../img/logo.png'
import { FaHome } from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { HiOutlineDocumentReport } from "react-icons/hi";

export default function Navegador() {
  return (
    <div className=''>
      <section className="w-64 h-full bg-[#142C7A] text-white flex flex-col">
        <div className="flex items-center justify-center gap-3.5 p-5 border-b border-blue-900">
          <div className=''>
            <Image className='w-[50px]' src={logo} alt='logo'></Image>
          </div>
          <div>
            <h1 className="font-bold text-xl">Bazar Escolar</h1>
            <p className="text-xl text-gray-300">Panel Administrativo</p>
          </div>
        </div>
        <nav className="mt-5 flex-1">
            <Link href={'/bazar'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <FaHome /> 
                <span>Inicio</span>
            </Link>
            <Link href={'/bazar/inventario'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <MdOutlineInventory2 />
                <span>Inventario</span>
            </Link>
            <Link href={'/bazar/categoria'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <MdOutlineCategory />
                <span>Categorías</span>
            </Link>
            <Link href={'/bazar/historial'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <FaHistory />
                <span>Historial de Pedidos</span>
            </Link>
            <Link href={'/bazar/reportes'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <HiOutlineDocumentReport />
                <span>Reportes</span>
            </Link>
        </nav>
        <div className="p-4 border-t border-blue-900">
            <Link href={'/'} className="flex items-center gap-3 text-sm text-white hover:text-gray-200">
                <CiLogin />
                Cerrar Sesión
            </Link>
        </div>
      </section>
    </div>
  )
}
