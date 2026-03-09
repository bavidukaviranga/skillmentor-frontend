import type { CardElement } from "../types";
import { Button } from "./ui/button";


function CustomCard({title,description,}:CardElement){
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
      <Button variant="secondary">schedule a session</Button>
    
    </div>
  );
}
export default CustomCard;