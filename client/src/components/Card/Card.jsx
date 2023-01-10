import './Card.scss'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import { Link } from 'react-router-dom'



const Card = ({ item }) => {
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 3
    }).format(number);
  }

  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className='card'>
        <div className="image">
          {item?.attributes.isNew &&
            <span>
              New Fashion
              < LocalFireDepartmentOutlinedIcon />
            </span>}
          <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img1?.data?.attributes?.url} alt="" className="mainImg" />
          <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img2?.data?.attributes?.url} alt="" className="secondImg" />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3> {rupiah(item?.attributes.price)}</h3>
        </div>

      </div>
    </Link>
  )
}

export default Card