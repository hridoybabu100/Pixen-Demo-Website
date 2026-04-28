import PhotosCard from "@/components/PhotosCard/PhotosCard";

const AllPhotos = async () => {
  const res = await fetch("https://pixen-demo-website.vercel.app/data.json");
  const photos = await res.json();
  // console.log(photos);

  return (
    <div className="my-6">
      <h2 className="text-4xl text-black font-bold">
        Total Photos : {photos.length}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6">
        {photos.map((photo) => (
          <PhotosCard photo={photo} key={photo.id}></PhotosCard>
        ))}
      </div>
    </div>
  );
};

export default AllPhotos;
