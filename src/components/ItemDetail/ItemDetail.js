import styles from "./ItemDetail.module.css";
import ItemCount from "./../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const onAdd = () => {
    console.log("onAdd");
  };
  return (
    <div className={styles.ItemDetail}>
      <div>
        <img
          className={styles.ItemImg}
          src={item.pictureUrl}
          alt={item.title}
        />
      </div>
      <div className={styles.ItemDetailColumn}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.price}>${item.price}</div>
        <div className={styles.description}>{item.description}</div>
        <div className={styles.stock}>
          <span>Stock:</span>
          {item.stock}
        </div>
        <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
