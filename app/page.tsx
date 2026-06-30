"use client"

import axios from "axios";
import Image from "next/image";
import Logo from '@/img/logo.png'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { FaUser } from "react-icons/fa";
import { TbLock } from "react-icons/tb";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import data from "@/app/data.json"


function Home() {
  const [usuario, setusuario] = useState({
    correo : "",
    password : "",
  });

  const form = useRef(null);
  const router = useRouter()

  const handleChange = (e) => {
    setusuario({
    ...usuario,
    [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:4000/login', usuario);
    console.log(res)
    const rol = res.data.error.rol;
    const id_user = res.data.error.id_usuarios;
    console.log("rol:", rol)
    console.log("id:", id_user)
    if (rol != null && id_user != null ){
      if (rol == 1){
        data.id_users = id_user
        router.push('/admin');
      }
      else if (rol == 2){
        data.id_users = id_user
        router.push('/estudiante');
      }
      else if (rol == 3){
        data.id_users = id_user
        router.push('/bazar');
      }
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#eef1f5]">
      <div className="">
        <section className="min-h-screen flex items-center justify-center">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-sm px-8 py-10">
                <div className="flex justify-center mb-4">
                    <Image src={Logo} alt="Logo Johannes Gutenberg" className="h-32 object-contain" />
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 leading-tight">
                      Johannes
                        <br />
                      Gutenberg
                    </h1>
                    <p className="mt-4 text-gray-500">¡Bienvenido! Por favor, ingresa tus datos.</p>
                </div>
                <form className="mt-8 space-y-5" action="" onSubmit={handleSumbit} ref={form} >
                    <Field>
                        <FieldLabel className="block text-sm font-semibold text-gray-800 mb-2">
                            Usuario o Correo
                        </FieldLabel>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400"><FaUser /></span>
                            <Input className="w-full border border-gray-300 rounded px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                              type="text" id="correo" name="correo" value={usuario.correo} onChange={handleChange} placeholder="Ingresa tu ID o correo" 
                            />
                        </div>
                    </Field>
                    <Field>
                        <FieldLabel className="block text-sm font-semibold text-gray-800 mb-2">Contraseña</FieldLabel>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400"><TbLock /> </span>
                            <Input className="w-full border border-gray-300 rounded px-10 py-3 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              type="password" id="password" name="password" value={usuario.password} onChange={handleChange} placeholder="ingrese su contraseña" />
                        </div>
                    </Field>
                    <FieldGroup className="grid grid-cols-2 text-sm">
                        <FieldLabel className="flex items-center gap-2 text-gray-700">
                            <Input type="checkbox" className="rounded border-gray-300"/>
                            Recordarme
                        </FieldLabel>
                        <Link href={"/"} className="text-blue-800 hover:underline">
                          ¿Olvidaste tu contraseña?
                        </Link>
                    </FieldGroup>
                    <Button className="w-full bg-indigo-800 hover:bg-indigo-900 text-white font-semibold py-3 rounded-lg transition" >
                      Iniciar Sesión
                    </Button>
                </form>
            </div>
        </section>
      </div>
    </div>
  );
}

export default Home;