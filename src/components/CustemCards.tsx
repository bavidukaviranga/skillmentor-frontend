import type { CardElement } from "../types";
import { Button } from "./ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "./ui/card";

function CustomCard({ cardProperties }: { cardProperties: CardElement }) {
  
  const[count, setCount] = useState (0);

  return (
    <Card  className="w-full bg-black text-white">
              <CardHeader>
                <CardTitle>{cardProperties.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white">
                  {cardProperties.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="secondary">Schedule a Call</Button>
              </CardFooter>
            </Card>
  );
}

export default CustomCard;