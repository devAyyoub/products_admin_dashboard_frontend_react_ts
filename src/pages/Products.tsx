import { Link } from "react-router-dom"

export default function Products() {
  return (
    <>
        <div className="flex justify-between">
            <h2 className="text-4xl font-black text-slate-500">productos</h2>
            <Link className="rounded-md bg-indigo-600 hover:bg-indigo-500 p-3 text-white font-bold text-sm shadow-sm" to="productos/nuevo">
                Agregar producto
            </Link>
        </div>
    </>
  )
}
