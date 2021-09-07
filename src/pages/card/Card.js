import { useContext, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/shop/shopContext'

export const Card = ({ match }) => {
  const { cards } = useContext(ShopContext)
  const card = cards[match.params.name]
  return (
    <Fragment>
      <Link to="/catalog" className="btn btn-link">
        Back
      </Link>
      <div className="card mb-4" style={{ textAlign: 'center' }}>
        <h1>{card.name}</h1>
        <div
          style={{
            display: 'flex',
          }}
        >
          <img
            src={card.img}
            style={{
              width: '600px',
              marginLeft: '100px',
            }}
            alt={card.img}
          />
          <h2
            style={{
              marginLeft: '100px',
            }}
          >
            {card.cost} $
          </h2>
        </div>
      </div>
    </Fragment>
  )
}
