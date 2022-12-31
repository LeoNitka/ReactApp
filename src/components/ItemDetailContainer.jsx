import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  useEffect(() => {
    console.log('received itemId to: ', itemId);
    return () => {
      console.log('Will change itemId: ', itemId);
    }
  }, [itemId]);

  return (
    <div>
      <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer