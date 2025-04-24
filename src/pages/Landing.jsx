
import { Hero, FeaturedProducts } from '../components';
import { customFetch } from '../utils';
const url = '/products?featured=true';

// const featuredProductsQuery = {
//   queryKey: ['featuredProducts'],
//   queryFn: () => customFetch(url),
// };

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;