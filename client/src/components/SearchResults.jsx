import ProductCard from "./ProductCard";

function SearchResults({ products }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default SearchResults;
