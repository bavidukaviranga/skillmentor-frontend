import type { CardElement } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";


export default function CardGroup({
  cardElements,
}: {
  cardElements: CardElement[];
}) {
  return (
    <div>
      <h1 className="text-4xl">Schedule a Call</h1>
  
<div className="mt-2 grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

      {cardElements.map((cardProperties, index) => {
          return (
            <Card  key={index} className=" w-full bg-black text-white">
              <CardHeader>
                <CardTitle>{cardProperties.title}</CardTitle>
                <CardDescription>
                  {cardProperties.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>{cardProperties.description} </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="secondary">Schedule a Session</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}