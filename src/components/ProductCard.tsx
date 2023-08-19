type ProductCardProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
};

const ProductCard = ({
  id,
  title,
  description,
  price,
  image,
  rating,
}: ProductCardProps) => {
  return (
    <li>
      <span>{id}</span>
      <span>{title}</span>
      <span>{description}</span>
      <span>{price}</span>
      <span>{image}</span>
      <span>{JSON.stringify(rating)}</span>
    </li>
  );
};

export default ProductCard;
