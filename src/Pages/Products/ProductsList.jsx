import ProductCard from "../../Components/Product Card/ProductCard";
import SectionTitle from "../../Components/Section Title/SectionTitle";
import { products } from "../../Data/Products";

export default function ProductsList() {
  return (
    <>
      <SectionTitle title="محصولات" />

      <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-3 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((i) => (
          <ProductCard
            key={i.id}
            img={i.img}
            name={i.name}
            count={i.count}
            sell={i.sell}
            regPrice={i.regPrice}
            salePrice={i.salePrice}
          />
        ))}
      </div>
    </>
  );
}
