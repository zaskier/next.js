import Image from 'next/image';
import Loader from 'public/loaders.svg';

export default function Loading() {
  return (
    <main className="text-center ">
      <Image className="center-image" src={Loader} alt="loader" width={70} />
      <h2 className="text-primary">Loading...</h2>
    </main>
  );
}
