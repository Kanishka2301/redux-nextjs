"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

function ProductCard({ item }) {
  return (
    <Card>
      <CardContent>
        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
          <img
            src={item?.thumbnail}
            alt={item?.title}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <CardTitle>{item?.title}</CardTitle>
        <CardDescription>{item?.brand}</CardDescription>
        <CardFooter>{`Price: $${item?.price}`}</CardFooter>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
