import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default async function IndexPage() {

  return (
    <div className='flex flex-col gap-3'>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.tiktok}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on TikTok
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Luas Suas Racing
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Lorettos first ever F1 schools team
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/the-team" className={cn(buttonVariants({ size: "lg" }))}>
              Get to know the team
            </Link>
            <Link
              href="/sponsors"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Meet the Sponsors
            </Link>
          </div>
        </div>
      </section>
      <section
        id="what-is-f1-in-schools"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            What is F1 in schools?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            F1 is an international STEM (science, technology, engineering, mathematics) competition for school children aged 9-19, in which students have to design and manufacture a miniature &quot;car&quot; out of the official F1 Model Block, using CAD/CAM design tools. F1 in Schools Ltd is a social enterprise working with committed industry partners to provide an exciting, yet challenging educational experience, through the magnetic appeal of Formula 1. It is an educational programme that raises awareness of STEM and Formula 1 among students worldwide. This competition looks at the overall performance of teams, simultaneously promoting STEM and inculcating entrepreneurship skills in the students
          </p>
        </div>
      </section>
      <section id="why-did-we-enter" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Why did we enter?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            When our teacher first mentioned F1 in schools to us we knew this competition was for us. We composed the perfect team with a mix of strengths. We were determined to be the first all-female team from Kilkenny to compete at National level. We have now reached that level and are hoping to represent both Loreto and Kilkenny at a Global level.
          </p>
        </div>
      </section>
    </div>
  )
}
