import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productService";
function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}
export default useProducts;