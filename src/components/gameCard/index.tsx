
import Link from 'next/link';
import Image from 'next/image';
import { BiRightArrowCircle } from 'react-icons/bi';
import {GameProps} from '@/utils/types/games'

interface GameCardProps {
    data: GameProps
}
export function GameCard({data}:GameCardProps) {
    return(
       <Link href={`/game/${data.id}`}>
         <section className='w-full bg-slate-200 rounded-lg p-5 mb-5'>
           <div className='relative w-full h-56 hover:scale-103 transition-all duration-300'>
            <Image
              className='rounded-lg object-cover'
              src={data.image_url}
              alt={data.title}
              quality={100}
              fill={true}
              sizes="(max-width: 768px) 100vw, (min-width: 1200px) 33vw"              
            />
           </div>
           <div className='flex  items-center mt-4 justify-between'>
            <p className='text-sm font-bold px-2 text-black text-ellipsis truncate whitespace-nowrap overflow-hidden'>{data.title}</p>
            <BiRightArrowCircle size={24} color="#000"/>
           </div>
        </section>
       
       </Link>
    )
}