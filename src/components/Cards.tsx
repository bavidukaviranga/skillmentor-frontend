import type { CardElement } from "../types";

function Card({title,description,}:CardElement){
  return (
    <div style={{
       maxWidth: '20rem',
       backgroundColor:"black",
       color:"white",
       padding:"1rem",
       borderRadius:"0.5rem",

    }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
export default Card;