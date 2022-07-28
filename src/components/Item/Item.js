import styles from "./Item.module.css";
import ItemCount from "./../ItemCount/ItemCount";

const Item = ({ item }) => {
  const onAdd = (count) => {
    if (count > 1) {
      console.log(`Se han agregado ${count} items al carrito`);
    } else {
      console.log(`Se ha agregado ${count} item al carrito`);
    }
  };
  return (
    <div className={styles.Item}>
      <div><img className={styles.itemImg} src={item.pictureUrl} /></div>
      <div>{item.title}</div>
      <div>${item.price}</div>
      <div><button className="btn btn-primary">Ver Detalle del Producto</button></div>
    </div>
  );
};

export default Item;
