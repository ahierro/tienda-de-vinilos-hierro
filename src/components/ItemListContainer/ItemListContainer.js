import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "./../ItemList/ItemList";
import { DummyApi } from "./../../api/DummyApi";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({ greeting , onSelect}) => {
  const [itemsResponse, setItemsResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await DummyApi.getItems(); 

        const responseJson = await response.json();
        setItemsResponse(responseJson.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div>
      <h1 className="text-center">
        <span className="badge bg-secondary">{greeting}</span>
        {loading ? <Spinner /> : <ItemList items={itemsResponse} onSelect={onSelect} />}
      </h1>
    </div>
  );
};

export default ItemListContainer;
