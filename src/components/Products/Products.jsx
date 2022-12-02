import React, { useState } from 'react'

import Product from '../Product/Product'
import styles from './Products.module.css'

const Products = () => {
  const arrayProducts = [
    {
      name: 'Adidas',
      price: '$3000',
      image:
        'https://ae04.alicdn.com/kf/Sb42a9374bbc14b858ebb6c27ca8480d8e/Adidas.jpg',
    },
    {
      name: 'Nike',
      price: '$5000',
      image:
        'https://myreact.ru/wp-content/uploads/2020/08/img01-33-700x700.jpg.webp',
    },
    {
      name: 'Puma',
      price: '$2000',
      image:
        'https://static.rendez-vous.ru/files/catalog_models/resize_640x630/2/2611623_kedy_puma_380784_svetlo_bezhevyy_zamsha_natural_naya.JPG',
    },
    {
      name: 'Gucci',
      price: '$7000',
      image:
        'https://cdn1.justbutik.ru/styles/product_catalog_h294/openstack/externals/01/ed/01ed4659bdd8b069702657dfc1ddb8f5.jpg',
    },
    {
      name: 'Reebok',
      price: '$4000',
      image: 'https://www.basketshop.ru/files/catalog/26257/AR1215(10).JPG',
    },
    {
      name: 'Armani',
      price: '$4000',
      image:
        'https://krossovki-msk.ru/image/cache/catalog/!armani/02cca88685df1770e92388567f6d1b764be5c626-1000x600.jpg',
    },
  ]
  const [stateProduct, setStateProduct] = useState(arrayProducts)
  const [value, setValue] = useState('')
  const filteredSneakers = stateProduct.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <div className={styles.mainDiv}>
      <form className={styles.form} action="">
        <input type="text" onChange={(event) => setValue(event.target.value)} />
      </form>
      <div className={styles.sneakersDiv}>
        {filteredSneakers.map((item, index) => {
          return (
            <Product name={item.name} price={item.price} image={item.image} />
          )
        })}
      </div>
    </div>
  )
}

export default Products
