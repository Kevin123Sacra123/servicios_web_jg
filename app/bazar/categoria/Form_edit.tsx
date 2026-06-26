"use client"

import axios from "axios";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FaRegFloppyDisk } from "react-icons/fa6";

function Form_edit() {
    const [categoria, setcategoria] = useState({
        nombre : "",
        descripcion : "",
    });

    const form = useRef(null);
    const router = useRouter()

    const handleChange = (e) => {
        setcategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    };

    const handleSumbit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/bazar/categorias/crear', categoria);
        console.log(res)
        router.refresh();
        router.push('/bazar/categoria');
    };

    return (
    <div className="w-[500px]">
        <form className="" action="" onSubmit={handleSumbit} ref={form}>
            <FieldGroup className="bg-white border rounded-xl p-7">
                <h2 className="text-4xl font-bold text-[#17337d]">Nueva Categoría</h2>
                <p className="text-sm text-slate-500 mt-2">Configure los detalles visuales y de organización.</p>
                <Field className="mt-4">
                    <FieldLabel htmlFor="nombre" className="block mb-2 font-medium">Nombre</FieldLabel>
                    <Input type="text" onChange={handleChange} value={categoria.nombre} id="nombre" name="nombre" placeholder="Ej: Uniformes" className="w-full border rounded-md px-4 py-3" />
                </Field>
                <Field className="mt-4">
                    <FieldLabel htmlFor="descripcion" className="block mb-2 font-medium"> Descripción</FieldLabel>
                    <Textarea rows={4}
                    onChange={handleChange} value={categoria.descripcion} id="descripcion" name="descripcion"
                    placeholder="Descripción breve de los productos en esta categoría..."
                    className="w-full border rounded-md px-4 py-3 resize-none"></Textarea>
                </Field>
                <Button className="w-full mt-7 bg-[#17337d] hover:bg-[#10265b] text-white rounded-lg py-4 font-medium">
                    <FaRegFloppyDisk />
                    Guardar Categoría
                </Button>
            </FieldGroup>
        </form>
    </div>
    );
}

export default Form_edit;