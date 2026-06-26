"use client"

import { CiWarning } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function ModalCategorias({ open, onClose, nombre }){
  return (
    <div 
      onClick={onClose} 
      className={`fixed inset-0 flex items-center justify-center bg-black/20 ${open ? "visible bg-black/20" : "invisible" } `} >
      <div className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-2xl">
      <div className="h-1 bg-red-600"></div>
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
            <CiWarning className="h-5 w-5 text-red-500" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900">
            ¿Eliminar {nombre}?
          </h2>
        </div>
        <p className="mt-6 text-base text-gray-700">
          Esta acción no se puede deshacer
        </p>
        <p className="mt-6 text-base text-gray-700">
          ¿Estás seguro de que deseas eliminar
          este producto?
        </p>
        <div className="mt-5 flex gap-3 rounded border border-gray-200 bg-gray-100 p-4">
          <CiCircleInfo className="mt-0.5 h-5 w-5 shrink-0 text-gray-600"/>
          <p className="text-sm text-gray-600">
            Esta categoría no tiene productos asociados actualmente.
          </p>
        </div>
        <div className="mt-6 flex gap-3">
          <button className="flex-1 rounded border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50" >
            Cancelar
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded bg-red-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800">
            <RiDeleteBin6Line className="h-4 w-4"/>
            Eliminar producto
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}