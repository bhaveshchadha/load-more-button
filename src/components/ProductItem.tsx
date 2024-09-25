import React from "react";

interface productItem {
  name: string;
  image: string;
}
function ProductItem({ name, image }: productItem): JSX.Element {
  // console.log(name, image[0], image.length);
  return (
    <div className="w-auto flex flex-col items-center justify-center  p-10">
      <img src={image} className="h-[200px]"></img>
      <div>{name}</div>
    </div>
  );
}

export default ProductItem;
