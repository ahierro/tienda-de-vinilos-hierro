import styles from "./Item.module.css";

const Item = ({ item, onSelect }) => {

  const goToDetail = () => {
    onSelect(item.id);
  };
  return (
    <div className={styles.Item}>
      <div><img className={styles.itemImg} src={item.pictureUrl} alt={item.title} /></div>
      <div>{item.title}</div>
      <div>${item.price}</div>
      <div><button className="btn btn-primary" onClick={goToDetail}>Ver Detalle del Producto</button></div>
    </div>
  );
};

export default Item;
