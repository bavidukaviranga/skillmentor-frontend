import type { CardElement } from "../types";
import { Button } from "./ui/button";

function CustomCard({ cardProperties }: { cardProperties: CardElement }) {
  return (
    <div className="bg-black text-white p-2 rounded-2xl flex flex-col items-center">
      <h1 className="text-cyan-500 text-center text-2xl">
        {cardProperties.title}
      </h1>
      <p className="text-center">{cardProperties.description}</p>
      <Button variant="secondary">Schedule a Call</Button>
    </div>
  );
}

export default CustomCard;