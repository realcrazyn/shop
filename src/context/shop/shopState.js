import { useReducer } from 'react'
import { ShopContext } from './shopContext'
import { shopReducer } from './shopReducer'

export const ShopState = ({ children }) => {
  const initialState = {
    cards: [
      {
        hash: 0,
        name: 'Моноблок Apple iMac 24 M1/8/512GB SSD Purple',
        cost: 1220,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-27-cto-hero-202008?wid=627&hei=522&fmt=jpeg&qlt=95&.v=1594932848000',
        amount: 10,
      },
      {
        hash: 1,
        name: 'Моноблок Apple iMac 22 M1/16/512GB SSD Gold',
        cost: 1680,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-silver-cto-hero-202104?wid=1254&hei=1132&fmt=jpeg&qlt=80&.v=1617479510000',
        amount: 10,
      },
      {
        hash: 2,
        name: 'Моноблок Apple iMac 24 M1/16/512GB SSD White',
        cost: 1440,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/IMac_Pro.svg/1200px-IMac_Pro.svg.png',
        amount: 20,
      },
      {
        hash: 3,
        name: 'Моноблок Apple iMac 24 M1/8/128GB SSD Silver',
        cost: 1050,
        img: 'https://img.mvideo.ru/Pdb/30029197b.jpg',
        amount: 20,
      },
      {
        hash: 4,
        name: 'Моноблок Apple iMac 24 M1/8/512GB SSD Red',
        cost: 1420,
        img: 'https://www.iqmac.ru/upload/resize_cache/iblock/a5a/800_600_140cd750bba9870f18aada2478b24840a/iMac_21_5_2019.png',
        amount: 12,
      },
      {
        hash: 5,
        name: 'Моноблок Apple iMac 24 M1/8/256GB SSD Blue',
        cost: 1200,
        img: 'https://onlyphones.ru/wp-content/uploads/2020/08/imac-27-2020.png',
        amount: 11,
      },
      {
        hash: 6,
        name: 'Моноблок Apple iMac 24 M1/8/512GB SSD Purple',
        cost: 1220,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-27-cto-hero-202008?wid=627&hei=522&fmt=jpeg&qlt=95&.v=1594932848000',
        amount: 10,
      },
      {
        hash: 7,
        name: 'Моноблок Apple iMac 22 M1/16/512GB SSD Gold',
        cost: 1680,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-silver-cto-hero-202104?wid=1254&hei=1132&fmt=jpeg&qlt=80&.v=1617479510000',
        amount: 10,
      },
      {
        hash: 8,
        name: 'Моноблок Apple iMac 24 M1/16/512GB SSD White',
        cost: 1440,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/IMac_Pro.svg/1200px-IMac_Pro.svg.png',
        amount: 20,
      },
      {
        hash: 9,
        name: 'Моноблок Apple iMac 24 M1/8/128GB SSD Silver',
        cost: 1050,
        img: 'https://img.mvideo.ru/Pdb/30029197b.jpg',
        amount: 20,
      },
      {
        hash: 10,
        name: 'Моноблок Apple iMac 24 M1/8/512GB SSD Red',
        cost: 1420,
        img: 'https://www.iqmac.ru/upload/resize_cache/iblock/a5a/800_600_140cd750bba9870f18aada2478b24840a/iMac_21_5_2019.png',
        amount: 12,
      },
      {
        hash: 11,
        name: 'Моноблок Apple iMac 24 M1/8/256GB SSD Blue',
        cost: 1200,
        img: 'https://onlyphones.ru/wp-content/uploads/2020/08/imac-27-2020.png',
        amount: 11,
      },
      {
        hash: 12,
        name: 'Моноблок Apple iMac 24 M1/8/512GB SSD Purple',
        cost: 1220,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-27-cto-hero-202008?wid=627&hei=522&fmt=jpeg&qlt=95&.v=1594932848000',
        amount: 10,
      },
      {
        hash: 13,
        name: 'Моноблок Apple iMac 22 M1/16/512GB SSD Gold',
        cost: 1680,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-silver-cto-hero-202104?wid=1254&hei=1132&fmt=jpeg&qlt=80&.v=1617479510000',
        amount: 10,
      },
      {
        hash: 14,
        name: 'Моноблок Apple iMac 24 M1/16/512GB SSD White',
        cost: 1440,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/IMac_Pro.svg/1200px-IMac_Pro.svg.png',
        amount: 20,
      },
      {
        hash: 15,
        name: 'Моноблок Apple iMac 24 M1/8/128GB SSD Silver',
        cost: 1050,
        img: 'https://img.mvideo.ru/Pdb/30029197b.jpg',
        amount: 20,
      },
      {
        hash: 16,
        name: 'Моноблок Apple iMac 24 M1/8/512GB SSD Red',
        cost: 1420,
        img: 'https://www.iqmac.ru/upload/resize_cache/iblock/a5a/800_600_140cd750bba9870f18aada2478b24840a/iMac_21_5_2019.png',
        amount: 12,
      },
      {
        hash: 17,
        name: 'Моноблок Apple iMac 24 M1/8/256GB SSD Blue',
        cost: 1200,
        img: 'https://onlyphones.ru/wp-content/uploads/2020/08/imac-27-2020.png',
        amount: 11,
      },
    ],
  }
  const [state, dispatch] = useReducer(shopReducer, initialState)

  const { cards } = state

  return (
    <ShopContext.Provider
      value={{
        cards,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
