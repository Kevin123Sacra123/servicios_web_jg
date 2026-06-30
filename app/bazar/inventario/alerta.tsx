"use client"

import {  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";

async function deleteProduct(id_product) {
    try {
        await axios.delete(`http://localhost:4000/bazar/inventario/${id_product}`);
    } catch (error) {
        console.error(error);
    }
}

function Alerta({id, nombre}) {
    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="text-gray-600 border border-red-600 rounded-2xl hover:text-red-600 hover:text-white hover:bg-red-600"><FaTrashAlt /> </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
            <AlertDialogHeader className="">
                <AlertDialogTitle className="">
                <p className="text-red-500 text-2xl ">¿Estas seguro de eliminar el producto? </p>
                <p className="text-red-500 text-center text-xl">{nombre}</p>
                </AlertDialogTitle>
                <AlertDialogDescription className="text-left text-lg">
                Esta acción no se puede deshacer.
                ¿Estás seguro de que deseas eliminar permanentemente este producto del inventario?
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex items-center justify-center">
                <AlertDialogAction className="bg-red-600 text-white" onClick={() => deleteProduct(id)}>Eliminar</AlertDialogAction>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default Alerta;