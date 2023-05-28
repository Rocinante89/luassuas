import Image from 'next/image';


export const metadata = {
  title: "Sponsors",
}

interface Sponsor {
  name: string;
  image: string;
  tier: 'gold' | 'silver' | 'bronze' | 'special'
}

const sponsors: Sponsor[] = [
  {
    tier: 'special',
    name: 'Lister Machine Tools',
    image: '/images/Lister_Machine_Tools.png'
  }, 
  {
    tier: 'gold',
    name: 'Kiltorcan Raceway',
    image: '/images/Kiltorcan_Raceway.png'

  },
  {
    tier: 'gold',
    name: 'Fran Grincell Properties',
    image: '/images/Pauls_Kilkenny.png'

  },
  {
    tier: 'gold',
    name: 'Dalata Hotel Group',
    image: '/images/Dalata_Hotel_Group.png'

  },
  {
    tier: 'gold',
    name: 'Goods Kilkenny',
    image: '/images/Goods_Logo.png'

  },
  {
    tier: 'bronze',
    name: 'Pauls Kilkenny',
    image: '/images/Pauls_Kilkenny.png'

  },
  {
    tier: 'bronze',
    name: 'Michael Lyng Motors',
    image: '/images/Michael_Lyng_Motors.png'

  },
];

export default function SponsorsPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Sponsors and why we need them
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Sponsors play a vital role in the competition as all of the costs of building the car and our brand all add up to be quite expensive. We offer a high ROI (return on investment) to ensure our sponsors receive the best return for the money they invest. This includes promotion on our social media platforms, being displayed on our pit display at the national finals, being displayed on our car and much more.
        </p>
      </div>
      <div className='flex justify-center gap-3'>
        {sponsors.filter(sponsor => sponsor.tier === 'special').map(sponsor => <div className='flex items-center gap-2'>
          <Image alt={sponsor.name} src={sponsor.image} height={248} width={248}/>
          </div>)}
      </div>
      <div className='flex flex-col justify-start gap-3 rounded-2xl bg-gradient-to-r from-yellow-600 to-yellow-300 p-8  shadow-md transition duration-300 delay-150 ease-in-out hover:-translate-y-1  hover:scale-110 hover:bg-gradient-to-l hover:shadow-xl'>
        <div className='flex justify-between gap-1'>
        {sponsors.filter(sponsor => sponsor.tier === 'gold').map(sponsor => <div className='flex items-center justify-start gap-2'>
          <Image alt={sponsor.name} src={sponsor.image} height={124} width={124}/>
          </div>)}
        </div>
      </div>
      <div className='flex flex-col justify-start gap-3 rounded-2xl bg-gradient-to-r from-yellow-800 to-yellow-600 p-8 shadow-md transition duration-300 delay-150 ease-in-out hover:-translate-y-1  hover:scale-110 hover:bg-gradient-to-l hover:shadow-xl'>
          <div className='flex justify-between gap-1'>
          {sponsors.filter(sponsor => sponsor.tier === 'bronze').map(sponsor => <div className='flex items-center justify-start gap-2'>
          <Image alt={sponsor.name} src={sponsor.image} height={124} width={124}/>
          </div>)}
        </div>
      </div>
    </section>
  )
}
