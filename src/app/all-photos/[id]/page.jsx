import { Button, Card } from "@heroui/react";
import Link from "next/link";
import React from "react";

const AllPhotosDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://pixen-demo-website.vercel.app/data.json");
  const photos = await res.json();

  // console.log(id);

  const photo = photos.find((photo) => photo.id == id);
  // console.log('Single Photos', photo);

  return (
    <Card className="my-5">
      <div>
        <p className="text-black font-bold text-3xl">{photo?.title}</p>
        <p>{photo?.prompt}</p>
        <p>{photo?.model}</p>
        <p>{photo?.tags}</p>
      </div>
      <Link href={'/'}>
      <Button>Go back</Button>
      </Link>
    </Card>
  );
};

export default AllPhotosDetails;
