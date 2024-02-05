import Image from "next/image"
import React, { ReactNode } from "react"
import iconUp from "@/public/images/icon-up.svg"
import iconDown from "@/public/images/icon-down.svg"

type CardProps = {
  title: string
  subtitle: string
  isUp: boolean
  change: number
  iconSrc: string
  iconAlt: string
}

const OverviewCard: React.FC<CardProps> = ({
  title,
  subtitle,
  isUp,
  change,
  iconSrc,
  iconAlt,
}) => {
  return (
    <div className="bg-light-grayish-blue hover:bg-grayish-blue flex h-full cursor-pointer flex-col items-center rounded-[0.3125rem] pb-[1.19rem] pl-6 pr-[1.88rem] pt-[1.69rem]">
      <div className="mb-[1.44rem] flex w-full items-center justify-between">
        <h3 className="text-dark-grayish-blue text-sm font-bold leading-normal">
          {title}
        </h3>
        <Image src={iconSrc} alt={iconAlt} width={20} height={20} />
      </div>
      <div className="flex w-full items-end justify-between">
        <p className="text-[2rem] font-bold leading-normal">{subtitle}</p>
        <div
          className={`pb-[0.31rem] text-xs font-bold ${
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
            <span>{change}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewCard
