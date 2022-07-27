import "./ItemListContainer.css";
import ItemCount from './../ItemCount/ItemCount';

const ItemListContainer = ({ greeting }) => (
  <div>
    <h1 class="text-center">
      <span class="badge bg-secondary">{greeting}</span>
      <ItemCount stock={5} initial={0} ></ItemCount>
    </h1>
  </div>
);

export default ItemListContainer;
