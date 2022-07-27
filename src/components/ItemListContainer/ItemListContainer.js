import "./ItemListContainer.css";
import ItemCount from "./../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  const onAdd = (count) =>{
    if(count>1){
      console.log(`Se han agregado ${count} items al carrito`);
    }else{
      console.log(`Se ha agregado ${count} item al carrito`);
    }
  }
  return (
    <div>
      <h1 className="text-center">
        <span className="badge bg-secondary">{greeting}</span>
        <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
      </h1>
    </div>
  );
};

export default ItemListContainer;
