import "./Item.css";
import { useState } from "react";

const Item = ({ card }) => {
  const [showLogo, setShowLogo] = useState(true);
  const { name, img, options } = card;
  console.log(name);

//   const handleClick = () => {
//     return setShowLogo(!showLogo);
// };
  return (
    <div className="card" onClick={() => setShowLogo(!showLogo)}>
      {showLogo ? (
        <div>
          <img src={img} alt="" className="card-logo" />
          <h3 className="card-title"> {name} </h3>
        </div>
      ) : (
        <ul className="ul">
          {options.map((element, index) => {
            return <li key={index}> {element} </li>;
          })}
        </ul>
      )}
    </div>
  );
};
export default Item;
