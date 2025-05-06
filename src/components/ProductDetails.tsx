import { Product } from "../types";
import formatCurrency from "../utils";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails(product: ProductDetailsProps) {
  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.product.name}</td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800">
        {product.product.availability ? "Disponble" : "No disponible"}
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div>
          <button className="flex gap-2 items-center">Editar</button>
        </div>
      </td>
    </tr>
  );
}
