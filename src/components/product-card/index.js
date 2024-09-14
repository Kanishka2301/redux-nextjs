"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

function ProductCard({ item }) {
  return (
    <Card>
      <CardContent>
        <div className="w-full aspect-w-8 aspect-h-8 lg:h-80">
          <img
            src={item?.thumbnail}
            alt={item?.title}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="p-6">
          <CardTitle className="text-lg font-bold text-gray-900">
            {item?.title}
          </CardTitle>
          <div className="mt-4 justify-between flex items-centerflex-wrap gap-2">
            <p className="text-lg font-extrabold text-gray-800">
              {item?.price}
            </p>
            <div>
              <Button>Details</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
