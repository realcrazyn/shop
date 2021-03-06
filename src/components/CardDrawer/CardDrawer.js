import classes from './CardDrawer.module.css'
import { Link } from 'react-router-dom'

export const CardDrawer = (props) => {
  return (
    <div className={classes.CardDrawer}>
      {props.cards.map((card, i) => {
        return (
          <Link to={'/card/' + card.hash} key={i}>
            <div className={classes.Card}>
              <h1 className={classes.Card_Title}>{card.name}</h1>
              <img className={classes.Card_Img} alt={card.img} src={card.img} />
              <p className={classes.Card_Cost}>
                Price: <span className={classes.Card_Price}>{card.cost}</span> $
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
