import { GameProps } from "@/utils/types/games";
import  Container  from "@/components/container";
import { Input } from "@/components/input";
import { GameCard } from "@/components/gameCard";

async function getData(title: string){
try{
 const decodeTitle = decodeURI(title)
 const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/next-api/?api=game&title=${decodeTitle}`)
    return res.json();
}catch(error){
    return null;
 }
}

type RouteParams = { title: string }

export default async function Search({
    params
}:{
    params: Promise<RouteParams>
}){
    const { title } = await params;
    const games: GameProps[] = await getData(title);
    return(
    <main>
    <Container>
        <Input/>
        <h1 className="font-bold text-xl mt-8 mb-5">Veja o que encontramos na nossa base</h1>
            {!games &&(
                <p>esse jogo não foi encontrado</p>
            )}
        <section className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {games && games.map((i)=>(
                <GameCard key={i.id} data={i}/>
            ))}
        </section>
    </Container>
    </main>
)

}