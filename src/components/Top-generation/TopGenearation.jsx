import PhotosCard from "../PhotosCard/PhotosCard";



const TopGenearation  = async() => {
    const res = await fetch('https://pixen-demo-website.vercel.app/data.json');
    const photos = await res.json();
    const topPhotos = photos.slice(0,8);
    // console.log('Total Photos', photos);
    
    return (
        <div className="my-10">
            <h2 className="text-3xl font-bold my-6 text-black">Top Generation Photos : {topPhotos.length}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                  topPhotos.map((photo) => <PhotosCard key={photo.id} photo={photo}></PhotosCard>)  
                }
            </div>
        </div>
    );
};

export default TopGenearation;