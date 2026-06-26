"use client"

import Link from 'next/link';
import Image from 'next/image';
import logo from '../img/logo.png'
import { FaHome } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";;
import { CiCalendar } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdOutlineSportsBasketball } from "react-icons/md";

export default function Navegador() {
  return (
    <div className=''>
      <section className="w-64 h-full bg-[#142C7A] text-white flex flex-col">
        <div className="flex items-center justify-center gap-3.5 p-5 border-b border-blue-900">
          <div className=''>
            <Image className='w-[50px]' src={logo} alt='logo'></Image>
          </div>
          <div>
            <h1 className="font-bold text-xl">Panel de Admin</h1>
            <p className="text-xl text-gray-300"></p>
          </div>
        </div>
        <nav className="mt-5 flex-1">
            <Link href={'/admin'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <FaHome /> 
                <span>Inicio</span>
            </Link>
            <Link href={'/admin/estudiantes'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <IoPerson />
                <span>Estudiantes</span>
            </Link>
            <Link href={'/admin/docentes'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <FaGraduationCap />
                <span>Docentes</span>
            </Link>
            <Link href={'/admin/talleres'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <MdOutlineSportsBasketball />
                <span>Talleres</span>
            </Link>
            <Link href={'/admin/eventos'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <CiCalendar />
                <span>Eventos</span>
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
