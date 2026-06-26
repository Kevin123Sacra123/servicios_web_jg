import Navegador from "@/components/Navegador_bazar";
import Image from "next/image";
import Logo from '@/img/logo.png'
import { Button, Input } from "@base-ui/react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

import { FaEye } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TbLock } from "react-icons/tb";
import Link from "next/link";
export default function Home() {
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
                <form className="mt-8 space-y-5">
                    <Field>
                        <FieldLabel className="block text-sm font-semibold text-gray-800 mb-2">
                            Usuario o Correo
                        </FieldLabel>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400"><FaUser /></span>
                            <Input className="w-full border border-gray-300 rounded px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                              type="text" placeholder="Ingresa tu ID o correo" 
                            />
                        </div>
                    </Field>
                    <Field>
                        <FieldLabel className="block text-sm font-semibold text-gray-800 mb-2">Contraseña</FieldLabel>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400"><TbLock /> </span>
                            <Input className="w-full border border-gray-300 rounded px-10 py-3 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              type="password" placeholder="ingrese su contraseña" />
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
                    <Link href={"/bazar"}>
                      <Button className="w-full bg-indigo-800 hover:bg-indigo-900 text-white font-semibold py-3 rounded-lg transition" >
                        Iniciar Sesión
                      </Button>
                    </Link>
                    
                    
                </form>
            </div>
        </section>
      </div>
    </div>
  );
}
