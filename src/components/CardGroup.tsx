import type { CardElement } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export default function CardGroup({
  cardElements,
}: {
  cardElements: CardElement[];
}) {
  return (
    <div>
      <h1 className="text-4xl">Schedule a Call</h1>

      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {cardElements.map((cardProperties, index) => {
          return (
            <Card key={index} className="w-full bg-black text-white">
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
        })}

        {/* {cardElements.map((cardProperties, index) => {
          return <CustomCard key={index} cardProperties={cardProperties} />;
        })} */}
      </div>
    </div>
  );
}