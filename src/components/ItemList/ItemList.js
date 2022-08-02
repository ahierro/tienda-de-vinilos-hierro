import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onSelect }) => (
  
  <div className={styles.ItemList}>
    {items.map(item => <Item key={item.id} item={item} onSelect={onSelect} />)}
  </div>
);

export default ItemList;
