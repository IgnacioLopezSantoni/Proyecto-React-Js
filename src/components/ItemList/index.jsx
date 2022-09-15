import { Item } from "../ItemList";

const ItemList = ({ listProducts }) => {
  return (
    <>
      {listProducts.map((prod, i) => (
        <Item key={`${prod.product}-$(i)`} />
      ))}
    </>
  );
};

export {ItemList}
