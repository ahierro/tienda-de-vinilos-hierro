import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => (
  <div>
    <h1 class="text-center">
      <span class="badge bg-secondary">{greeting}</span>
    </h1>
  </div>
);

export default ItemListContainer;
