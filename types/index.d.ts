import { User } from "@prisma/client"
import type { Icon } from "lucide-react"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    tiktok: string
    instagram: string
    gmail: string
  }
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}

