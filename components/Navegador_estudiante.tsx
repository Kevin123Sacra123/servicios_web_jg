"use client"

import Link from 'next/link';
import Image from 'next/image';
import logo from '../img/logo.png'
import { FaHome } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { GiBrain } from "react-icons/gi";
import { TbDental } from "react-icons/tb";
import { CiMedicalCase } from "react-icons/ci";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

export default function Navegador() {
  return (
    <div className=''>
      <section className="w-64 h-full bg-[#142C7A] text-white flex flex-col">
        <div className="flex items-center justify-center gap-3.5 p-5 border-b border-blue-900">
          <div className=''>
            <Image className='w-[50px]' src={logo} alt='logo'></Image>
          </div>
          <div>
            <h1 className="font-bold text-xl">Panel de Estudiante</h1>
            <p className="text-xl text-gray-300"></p>
          </div>
        </div>
        <nav className="mt-5 flex-1">
            <Link href={'/estudiante'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <FaHome /> 
                <span>Inicio</span>
            </Link>
            <Link href={'/estudiante/psicologia'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <GiBrain />
                <span>Psicologia</span>
            </Link>
            <Link href={'/estudiante/dental'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <TbDental />
                <span>Dental</span>
            </Link>
            <Link href={'/estudiante/topico'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <CiMedicalCase />
                <span>Topico</span>
            </Link>
            <Link href={'/estudiante/talleres'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <MdOutlineSportsSoccer />
                <span>Talleres</span>
            </Link>
            <Link href={'/estudiante/eventos'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <FaRegCalendarAlt />
                <span>Eventos</span>
            </Link>
            <Link href={'/estudiante/bazar'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <CiShop />
                <span>Bazar</span>
            </Link>
            <Link href={'/estudiante/citas'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <FaClockRotateLeft  />
                <span>Mis citas</span>
            </Link>
            <Link href={'/estudiante/becas'} className="mx-2 mt-1 flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded">
                <FaGraduationCap />
                <span>Becas</span>
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
