import { useEffect, useState } from "react";
import styles from "./ItemDetailContainer.module.css";
import { DummyApi } from './../../api/DummyApi';
import Spinner from './../Spinner/Spinner';
import ItemDetail from './../ItemDetail/ItemDetail';

const ItemDetailContainer = ({id}) => {
  const [itemResponse, setItemResponse] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const response = await DummyApi.getDetail(id); 
        const responseJson = await response.json();
        setItemResponse(responseJson[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);
  return (
    <div className={styles.ItemDetailContainer}>
      {loading ? <Spinner /> : <ItemDetail item={itemResponse} />}
    </div>
  );
};

export default ItemDetailContainer;
