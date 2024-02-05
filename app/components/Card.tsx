import Image from "next/image"
import React, { ReactNode } from "react"
import iconUp from "@/public/images/icon-up.svg"
import iconDown from "@/public/images/icon-down.svg"

type CardProps = {
  username: string
  title: string
  subtitle: string
  isUp: boolean
  change: number
  iconSrc: string
  iconAlt: string
  className?: string
}

const Card: React.FC<CardProps> = ({
  username,
  title,
  subtitle,
  isUp,
  change,
  iconSrc,
  iconAlt,
  className = "",
}) => {
  return (
    <div className={`${className} rounded-[0.3125rem] pt-1`}>
      <div className="bg-light-grayish-blue flex h-full flex-col items-center rounded-b-[0.3125rem] px-6 pb-6 pt-8">
        <div className="mb-7">
          <div className="flex items-center gap-2">
            <Image src={iconSrc} alt={iconAlt} width={20} height={20} />
            <p className="text-dark-grayish-blue text-xs font-bold">
              {username}
            </p>
          </div>
        </div>
        <div className="mb-[0.56rem] text-[3.5rem] font-bold leading-[3rem] tracking-[-0.125rem]">
          {title}
        </div>
        <div className="mb-[1.56rem] text-xs uppercase tracking-[0.3125rem]">
          {subtitle}
        </div>
        <div
          className={`text-xs font-bold ${
            isUp ? "text-lime-green" : "text-bright-red"
          }`}
        >
          <div className="flex items-center gap-1">
            <Image
              src={isUp ? iconUp : iconDown}
              alt="Icon"
              width={8}
              height={8}
            />
            <span>{change} Today</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
