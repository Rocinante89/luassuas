import { Icons } from '@/components/icons'
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { FaInstagram, FaTiktok, FaMailBulk } from 'react-icons/fa';


export const metadata = {
  title: "Contact Us",
}

export default function ContactPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        Contact
        </h2>
        {/* <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Unlock all features including unlimited posts for your blog.
        </p> */}
      </div>
      <div
        className="container space-y-6 rounded-2xl bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-1 space-y-4 text-center">
        <ul className="grid grid-cols-1 gap-6 text-lg text-muted-foreground">
            <li className="flex items-center">
            <Link
            href={siteConfig.links.instagram}
            className="flex flex-row items-center gap-1 rounded-2xl px-4 py-1.5 text-sm font-medium hover:bg-muted"
            target="_blank"
          >
              <FaInstagram className="mr-2 h-8 w-8" /> Instagram
          </Link>
            </li>
            <li className="flex items-center">
            <Link
            href={siteConfig.links.tiktok}
            className="flex flex-row items-center gap-1 rounded-2xl px-4 py-1.5 text-sm font-medium hover:bg-muted"
            target="_blank"
          >
              <FaTiktok className="mr-2 h-8 w-8" /> TikTok
          </Link>
            </li>

            <li className="flex items-center">
            <Link
            href={`mailto:${siteConfig.links.gmail}`}
            className="flex flex-row items-center gap-1 rounded-2xl px-4 py-1.5 text-sm font-medium hover:bg-muted"
            target="_blank"
          >
              <FaMailBulk className="mr-2 h-8 w-8" /> Email
          </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
