import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <img className="product-image" src={product.image} alt={product.title} />
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
