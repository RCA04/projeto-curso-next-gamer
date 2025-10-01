import Container from "@/components/container";

async function getDailyGames() {
  try{
    const res = await fetch(``);

    return res.json

  }catch(error){
    throw new Error('failed to fetch data')
  }
}



export default async function Home() {
  const dailyGames = await getDailyGames();
  console.log(dailyGames);
  return (
    <main className="flex">
      <Container>
         <h1 className="text-center font-bold text-xl mt-10 mb-7">Separamos jogos exclusivos para você</h1>
      </Container>
      </main>
  );
}
