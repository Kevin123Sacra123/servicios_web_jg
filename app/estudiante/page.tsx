"use client"

import Navegador from "@/components/Navegador_estudiante";
import { AiOutlineProduct } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { FaEye } from "react-icons/fa";
import datos from "@/app/data.json"
import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

export default function Principal() {
  const [Datausers, setDatauser] = useState([]);
  const data_user = datos
  useEffect(() => {
      async function loadData() {
          try {
              const { data } = await axios.get(`http://localhost:4000/users/${data_user.id_users}`)
              setDatauser(data);
          } catch (error) {
              console.log(error);
              console.error(error);
          }
      }
      loadData();
  }, []);

  const handleChange = (e) => {
    setDatauser({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navegador />
      <div className="flex justify-center">
        <div className="flex-1 p-8">
          <div className="mb-6">
              <h2 className="text-4xl font-bold text-blue-900">Inicio</h2>
              <p className="text-gray-600 mt-1">.</p>
          </div>
          <div className="bg-white rounded-lg border shadow-sm p-5 w-[500px]">
              <h3 className="text-lg font-medium text-blue-900 mb-4">Mi Perfil</h3>
              <div className="space-y-3">
                {Datausers.map(datos_user =>(
                <div key={datos_user.id_usuarios} className="flex items-center justify-between gap-5">
                    <div className="">
                        <p className="text-2xl font-semibold ">{datos_user.nombre_apellido}</p>
                        <p className="">DNI: {datos_user.DNI}</p>
                    </div>
                    <div className="">
                        <Link href={`/estudiante/ver/${data_user.id_usuarios}`} className="w-full rounded-lg p-4 flex items-center justify-between bg-indigo-100 hover:bg-gray-50">
                            <div className="flex items-center gap-4 ">
                                <span className="font-medium text-blue-900">Ver perfil</span>
                            </div>
                        </Link>
                    </div>
                </div>
                ))} 
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
