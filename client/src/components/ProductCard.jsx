function ProductCard({ product }) {
  return (
    <div className="border rounded shadow p-4 w-full sm:w-64">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover mb-2"
      />
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p className="text-green-600 font-semibold">৳ {product.price}</p>
      <p className="text-sm text-gray-500">Views: {product.views}</p>
    </div>
  );
}

export default ProductCard;
