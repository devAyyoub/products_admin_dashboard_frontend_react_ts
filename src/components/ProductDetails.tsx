import {
  ActionFunctionArgs,
  Form,
  redirect,
  useNavigate,
} from "react-router-dom";
import { Product } from "../types";
import formatCurrency from "../utils";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
  product: Product;
};

export async function action({ params }: ActionFunctionArgs) {
  if (params.id !== undefined) {
    await deleteProduct(+params.id);
    return redirect("/");
  }
}

export default function ProductDetails(product: ProductDetailsProps) {
  const navigate = useNavigate();

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.product.name}</td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800">
        <form action="" method="post">
          <button
            type="button"
            name="availability"
            value={product.product.availability.toString()}
            className={`${product.product.availability ? 'text-black' : 'text-red-600'} rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100 hover:cursor-pointer`}
          >
            {product.product.availability ? "Disponble" : "No disponible"}
          </button>
        </form>
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => navigate(`/productos/${product.product.id}/editar`)}
            className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
          >
            Editar
          </button>
          <Form
            method="DELETE"
            className="w-full"
            action={`productos/${product.product.id}/eliminar`}
            onSubmit={(e) => {
              if (!confirm("Eliminar ?")) {
                e.preventDefault();
              }
            }}
          >
            <input
              type="submit"
              value="Eliminar"
              className="bg-red-600 hover:bg-red-500 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
            />
          </Form>
        </div>
      </td>
    </tr>
  );
}
