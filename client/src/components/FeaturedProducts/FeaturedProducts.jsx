import './FeaturedProducts.scss'
import Card from '../Card/Card.jsx'
import useFetch from '../../hooks/useFetch.js'

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} Products </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>

      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default FeaturedProducts