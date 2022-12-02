import React from 'react'
import styles from './Product.module.css'

const Product = (props) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.imageNamePriceDiv}>
        <img src={props.image} alt="picture" />

        <div className={styles.namePriceButton}>
          <div className={styles.nameAndPriceLorem}>
            <div className={styles.productName}>{props.name}</div>
            <div className={styles.productPrice}>{props.price}</div>
            <hr />
            <div className={styles.loremIpsum}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam!
            </div>
            <button className={styles.button2}>Добавить в корзину</button>
          </div>
          <div className={styles.buttonDiv}>
            <button className={styles.button}>Детали</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
