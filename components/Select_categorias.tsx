"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import axios from "axios";
import { useEffect, useState } from 'react';

function Select_categorias() {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        async function loadCategorias() {
            try {
                const { data } = await axios.get('http://localhost:4000/bazar/categorias')
                setCategorias(data);
            } catch (error) {
                console.log(error);
                console.error(error);
            }
        }
        loadCategorias();
    }, []);
    
    return(
        
            <SelectGroup className="bg-white">
                {categorias.map(categoria =>(
                    <SelectItem key={categoria.id_categoria} value={categoria.nombre}>
                        {categoria.nombre}
                    </SelectItem>
                ))}
            </SelectGroup>
        
    )
}
export default Select_categorias;