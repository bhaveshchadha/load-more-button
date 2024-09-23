import React from "react";

interface productItem {
  name: string;
  image: string[];
}
function ProductItem({ name, image }: productItem) {
  console.log(name, image[0], image.length);
  return (
    <div className="w-[200px] flex flex-col items-center justify-center  p-10">
      <img src={image[0]} className="h-[200px]"></img>
      <div>{name}</div>
    </div>
  );
}

export default ProductItem;
