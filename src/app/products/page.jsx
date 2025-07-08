import { getProducts } from "../../_service/getProduct";
export default async function ProductsPage() {
  const data = await getProducts(id);
  console.log(data);
  return (
    <div className="container mx-auto min-h-screen p-8 bg-gray-100 text-black">
      <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1>

      <div className="grid gap-6 grid-cols-4">
        {/* Card 1 */}
        {data.products.map((singleProduct) => (
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl">
            <img
              src={singleProduct.images[0]} // Place image in public/images/
              alt="Leather Bag"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                {singleProduct.title}
              </h2>
              <p className="text-gray-600 mb-4">{singleProduct.description}</p>
              <h4 className="text-xl font-bold pb-3">
                Price: {singleProduct.price}
              </h4>
              <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
