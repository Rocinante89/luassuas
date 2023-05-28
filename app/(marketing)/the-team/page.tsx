import Image from 'next/image'


export const metadata = {
  title: "The Team",
}

interface Person {
  name: string
  role: string
  imageUrl: string
  bio: string
  tikTokUrl?: string
  instagramUrl?: string;
}

const people: Person[] = [
  {
    name: 'Tiah O’ Neill',
    role: 'Team Manager',
    imageUrl:
      '/images/avatars/tiah.jpg',
    bio: 'Tiah assumes the vital role of overseeing the project and managing all the team operations. Her responsibilities include organising the team’s work tasks, Gantt charts and weekly meetings. She made sure we are ‘on track’ (no pun intended) and meeting all of our deadlines. Tiahs holds a motorsport licence and has followed F1 since she was ten.',
    tikTokUrl: undefined,
    instagramUrl: undefined,
  },
  {
    name: 'Emer Gladney',
    role: 'Finance Manager',
    imageUrl:
      '/images/avatars/emer.jpg',
    bio: 'Emer holds the responsibility of meticulously tracking all team finances. She collaborates closely with our school finance department to oversee the sponsorship money received and team spending from our account. She deftly prepares the budget and closely monitors team expenditures. Additionally, Emer conducts thorough research to secure the best possible prices for all the resources we require.',
    tikTokUrl: undefined,
    instagramUrl: undefined,
  },
  {
    name: 'Nora McCarthy',
    role: 'Design Engineer',
    imageUrl:
      '/images/avatars/nora.jpg',
    bio: 'Nora dedicated a significant portion of her time to researching the technical aspects of the model F1 car and rapidly familiarising herself with Solidworks. She effectively applied the knowledge she gained to the design of our car, taking care to ensure that it adhered to all regulations and was optimized for aerodynamic performance. Nora  is an accomplished basketball player and excelled at tech graphics in her junior certificate.',
    tikTokUrl: undefined,
    instagramUrl: undefined,
  },
  {
    name: 'Laura Walshe',
    role: 'Media & Marketing',
    imageUrl:
      '/images/avatars/laura.jpg',
    bio: 'Laura assumes the role of managing all of our social media accounts and spearheading our marketing efforts. She ensures a steady stream of content is posted on our social media platforms and proactively reaches out to local influencers to collaborate with us and help expand our following. Laura is passionate about team spirit and teamwork from her experience playing camogie.',
    tikTokUrl: undefined,
    instagramUrl: undefined,
  },
  {
    name: 'Aine White',
    role: 'Manufacturing Engineer',
    imageUrl:
      '/images/avatars/aine.jpg',
    bio: `Aine's role involved conducting extensive research and closely monitoring the manufacturing process once the car design was finalised. She was also responsible for completing the final stages of the model car's construction. Her role demanded close collaboration with our design engineer, Nora, to ensure that the construction process was executed seamlessly. Aines interest in motorsport grew from her family who host a rally every year.`,
    tikTokUrl: undefined,
    instagramUrl: undefined,
  },
  {
    name: 'Ena Lawlor',
    role: 'Graphic Designer',
    imageUrl:
      '/images/avatars/ena.jpg',
      bio: 'Ena was in charge of researching the psychology behind different colours for our colour scheme. She designed our logo, team jerseys, the background for our portfolios and our pit display. Ena played a vital role in organising these aesthetically pleasing aspects of the project.',
      tikTokUrl: undefined,
    instagramUrl: undefined,
  },
  // More people...
]


export default function TeamPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          About Us
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        At the outset of our F1 schools project, we formed a team based on our trust in each other’s abilities to dedicate the necessary effort and diligence to create a winning project.  We had faith in one another to grasp the requirements of our individual roles and to support each other in achieving success. As a cohesive unit, we relished collaborating on the project and had a lot of fun during the project. We had a lot of learning to do as there was no one in our school who had competed at the F1 in schools national final but we proved that persistence and effective communication were integral in accomplishing the milestones on our journey. From our countless amounts of shared docs, classroom meetings, instant messaging and group chats, we constantly keep each other updated on our progress. We continuously show determination and ambition in everything we do, working for our goals and accomplishing them together.

        Meet some of our team members below 👇
        </p>
      </div>
      {/* <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:px-8 xl:col-span-2 xl:grid-cols-3"> */}
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image width={300} height={500} className="aspect-square w-full rounded-2xl object-top" src={person.imageUrl} alt="" />
              <h3 className="mt-6 font-heading text-lg font-semibold leading-8">{person.name}</h3>
              <p className="text-base leading-7 text-muted-foreground">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{person.bio}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                {person.tikTokUrl && (
                  <li>
                  <a href={person.tikTokUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                )}
                {person.instagramUrl && (
                <li>
                  <a href={person.instagramUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      {/* </div> */}
    </section>
  )
}
