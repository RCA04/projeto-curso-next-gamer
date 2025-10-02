import { GameProps } from "@/utils/types/games";
import { redirect } from "next/navigation";
import Image from "next/image";
import Container from "@/components/container";
import { Label } from "./components/label";
import { GameCard } from "@/components/gameCard";

async function getData(id:string){
    
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/next-api/?api=game&id=${id}`)
        return res.json();
    }catch(error){
        throw new Error('Failed to fetch data')
    }
}

async function getGameSorted(){
    try{
        const rest = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/next-api/?api=game_day`)
        return rest.json() 
    }catch(error){
        throw new Error("Failed to fetch data")
    }
}


export default async function Game({
    params:{id}

}: {
    params: {id:string}
}
){
    const data:GameProps = await getData(id);
    const sortedGame: GameProps = await getGameSorted();

    if(!data){
        redirect('/')
    }

    return(
        <main className="w-full text-black">
            <div className="bg-black w-full h-80 sm:h-96 relative">
            <Image
            className="object-cover w-full h-80 sm:h-96 opacity-80"
            src={data.image_url}
            alt={data.title}
            priority={true}
            fill={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (min-width: 1200px) 33vw"
            />
            </div>
        <Container>
            <h1 className="font-bold text-xl my-4">{data.title}</h1>
            <p>{data.description}</p>

            <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>
            <div className="flex gap-2 flex-wrap"> 
                {data.platforms.map((i)=>(
                    <Label key={i} name={i}/>
                ))}

            </div>

            <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
            <div className="flex gap-2 flex-wrap"> 
                {data.categories.map((i)=>(
                    <Label key={i} name={i}/>
                ))}
            </div>
                <p className="mt-7 mb-2"><strong>DATA DE LANÇAMENTO</strong>{data.release}</p>

            <h2 className="font-bold text-lg mt-7 mb-2">jogo recomendado</h2>
            <div className="flex">
                <div className="flex-grow">
                    <GameCard data={sortedGame}/>
                </div>
            </div>
                
        </Container>
        
            
        </main>
    )
}