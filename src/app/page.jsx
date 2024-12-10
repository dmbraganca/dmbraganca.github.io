import Image from 'next/image'

export const metadata = {
  title: "Abby's clue",
  description: "",
};

export default function Home() {
  return (
    <div>
      <Image fill={true} src={"/matrix.jpg"}/>
      <div
        className="absolute flex top-[25%] left-[25%] w-[50%] h-[175px] text-center text-3xl justify-center items-center rounded-lg border-2 bg-white">
        What is Mike&apos;s girlfriend&apos;s name in Stranger Things?
      </div>
      <div
        className="absolute top-[50%] left-[25%] w-[50%] text-center items-center rounded-full border-2 bg-white align-middle">
        LAT: 43.8187433 LON: -111.7832061
      </div>
    </div>
  );
}
