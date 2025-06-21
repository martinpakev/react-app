import { useState } from "react";
import Button from "./Button";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index)
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      
    <div className="mt-3">
     <Button
     onClick={()=> {
      setSelectedIndex(-1);
     }}
     >Remove</Button>
    </div>
    </>
  );
}

export default ListGroup;
