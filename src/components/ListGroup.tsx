import { useState } from "react";
import Alerts from "./Alerts";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>There are no cities in the list</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === item
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItem(item);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <Alerts>
        <>
          {selectedItem == "" ? (
            <h2>Keep Watching!</h2>
          ) : (
            <>
              <h2>Everyone Alert, </h2>
              <h1>{selectedItem}</h1>
              <h2> is coming!</h2>
            </>
          )}
        </>
      </Alerts>
    </>
  );
}

export default ListGroup;
