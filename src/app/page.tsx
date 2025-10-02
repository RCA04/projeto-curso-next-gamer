import Container from "@/components/container";
import { GameProps } from "@/utils/types/games";
import Link from "next/link";
import Image from "next/image";

async function getDalyGames() {
 
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/next-api/?api=game_day`, {cache: "no-store"});
  if(!res.ok){
    throw new Error("Failed to fetch data");
  }
  
  return res.json();
}


export default async function Home() {
  const dailyGames: GameProps = await getDalyGames();
  console.log(dailyGames);
  return (
    <main className="flex">
      <Container>
         
         <h1 className="text-center font-bold text-xl mt-10 mb-7">Separamos jogos exclusivos para você</h1>

      </Container>
      </main>
  );
}
