import Container from "@/components/container";
import { GameProps } from "@/utils/types/games";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightSquare} from 'react-icons/bs'
import { Input } from "@/components/input";
import { GameCard } from "@/components/gameCard";

async function getDalyGames() {
 
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/next-api/?api=game_day`, {next: {revalidate: 320}});
  if(!res.ok){
    throw new Error("Failed to fetch data");
  }
  
  return res.json();
}

async function getGamesData() {
 
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/next-api/?api=games`, {next: {revalidate: 320}});
  if(!res.ok){
    throw new Error("Failed to fetch data");
  }
  
  return res.json();
}


export default async function Home() {
  const dalyGames: GameProps = await getDalyGames();
  const data: GameProps[] = await getGamesData();
  return (
    <main className="w-full">
      <Container>
         
         <h1 className="text-center font-bold text-xl mt-10 mb-7">Separamos jogos exclusivos para você</h1>
         <Link href={`/game/${dalyGames.id}`} className="mb-10">
          <section className="w-full bg-black rounded-lg">
           <div className="w-full max-h-96 h-96 relative rounded-lg">
            <div className="absolute z-1 bottom-0 p-3 flex justify-center items-center gap-3">
              <p className="font-bold text-xl text-white">{dalyGames.title}</p>
              <BsArrowRightSquare size={24} color="#fff"/>
            </div>
            <Image
              src={dalyGames.image_url}
              alt={dalyGames.title}
              priority={true}
              quality={100}
              fill={true}
              className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transtion-all duration-500"
              sizes="(max-width: 768px) 100vw, (min-width: 1200px) 33vw"
            />
           </div>
          </section>
         </Link>

        <Input />

        <h2 className="text-lg font-bold mt-8 mb-5">
          jogos para conhecer
        </h2>

      <section className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((i)=>(
          <GameCard key={i.id} data={i}/>
        ))}
      </section>

      </Container>
      </main>
  );
}
