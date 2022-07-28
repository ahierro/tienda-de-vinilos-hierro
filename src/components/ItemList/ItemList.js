import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items }) => (
  <div className={styles.ItemList}>
    {items.map(item => <Item key={item.id} item={item} />)}
  </div>
);

export default ItemList;
