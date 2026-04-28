import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { CiSaveDown2 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const PhotosCard = ({ photo }) => {
  return (
    <Card>
      <div className="w-full relative aspect-square">
        <Image
          src={photo.imageUrl}
          fill
          //   width={300}
          //   height={300}
          alt={photo.name}
          className="object-cover rounded-xl"
        ></Image>
        <Chip className="absolute top-2 right-2">{photo.category}</Chip>
      </div>
      <div>
        <h2 className="font-medium">{photo.title}</h2>
      </div>

      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <p>{photo.likes}</p>
          <p>
            <FaHeart />
          </p>
        </div>
        <Separator orientation="vertical"></Separator>
        <div className="flex items-center gap-2">
          <p>{photo.downloads}</p>
          <p>
            <CiSaveDown2 />
          </p>
        </div>
      </div>
      <Link href={`/all-photos/${photo.id}`}>
        <Button variant="outline" className="w-full">
          Veiw
        </Button>
      </Link>
    </Card>
  );
};

export default PhotosCard;
