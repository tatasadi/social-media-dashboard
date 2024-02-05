"use client"
import Card from "./components/Card"
import OverviewCard from "./components/OverviewCard"
import Reference from "./components/Reference"
import Toggle from "./components/Toggle"
import useTheme from "./hooks/useTheme"

export default function Home() {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <main className="relative flex h-full min-h-screen w-full max-w-[90rem] flex-col items-center bg-white px-6 pt-9 text-black lg:min-h-0 lg:px-40 dark:bg-black dark:text-white">
      <div className="bg-very-pale-blue-top absolute left-0 right-0 top-0 z-0 h-[14.6875rem] rounded-b-[1.25rem]"></div>
      <div className="relative z-10 w-full">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between">
          <div className="border-gray mb-4 border-b pb-6 sm:border-none">
            <h1 className="mb-1 text-2xl font-bold leading-normal lg:text-[1.75rem]">
              Social Media Dashboard
            </h1>
            <p className="text-dark-grayish-blue text-sm font-bold">
              Total Followers: 23,004
            </p>
          </div>
          <div className="mb-10 flex items-center justify-between gap-[0.81rem]">
            <p className="text-gray text-sm font-bold leading-normal">
              Dark Mode
            </p>
            <Toggle isOn={darkMode} onToggle={toggleDarkMode} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[1.87rem]">
          <Card
            className="bg-facebook"
            iconSrc="/images/icon-facebook.svg"
            iconAlt="Facebook Icon"
            username="@nathanf"
            title="1987"
            subtitle="Followers"
            isUp={true}
            change={12}
          />
          <Card
            className="bg-twitter"
            iconSrc="/images/icon-twitter.svg"
            iconAlt="Twitter Icon"
            username="@nathanf"
            title="1044"
            subtitle="Followers"
            isUp={true}
            change={99}
          />

          <Card
            className="from-instagram-from to-instagram-to bg-gradient-to-r"
            iconSrc="/images/icon-instagram.svg"
            iconAlt="Instagram Icon"
            username="@realnathanf"
            title="11k"
            subtitle="Followers"
            isUp={true}
            change={1099}
          />
          <Card
            className="bg-youtube"
            iconSrc="/images/icon-youtube.svg"
            iconAlt="Youtube Icon"
            username="Nathan F."
            title="8239"
            subtitle="Subscribers"
            isUp={false}
            change={144}
          />
        </div>

        <h2 className="text-dark-grayish-blue mb-[1.5rem] mt-[2.88rem] text-2xl font-bold leading-normal">
          Overview - Today
        </h2>
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[1.87rem]">
          <OverviewCard
            iconSrc="/images/icon-facebook.svg"
            iconAlt="Facebook Icon"
            title="Page Views"
            subtitle="87"
            isUp={true}
            change={3}
          />
          <OverviewCard
            iconSrc="/images/icon-facebook.svg"
            iconAlt="Facebook Icon"
            title="Likes"
            subtitle="52"
            isUp={false}
            change={2}
          />
          <OverviewCard
            iconSrc="/images/icon-instagram.svg"
            iconAlt="Instagram Icon"
            title="Likes"
            subtitle="5462"
            isUp={true}
            change={2257}
          />
          <OverviewCard
            iconSrc="/images/icon-instagram.svg"
            iconAlt="Instagram Icon"
            title="Profile Views"
            subtitle="52k"
            isUp={true}
            change={1375}
          />
          <OverviewCard
            iconSrc="/images/icon-twitter.svg"
            iconAlt="Twitter Icon"
            title="Retweets"
            subtitle="117"
            isUp={true}
            change={303}
          />
          <OverviewCard
            iconSrc="/images/icon-twitter.svg"
            iconAlt="Twitter Icon"
            title="Likes"
            subtitle="507"
            isUp={true}
            change={553}
          />
          <OverviewCard
            iconSrc="/images/icon-youtube.svg"
            iconAlt="Youtube Icon"
            title="Likes"
            subtitle="107"
            isUp={false}
            change={19}
          />
          <OverviewCard
            iconSrc="/images/icon-youtube.svg"
            iconAlt="Youtube Icon"
            title="Total Views"
            subtitle="1407"
            isUp={false}
            change={12}
          />
        </div>
      </div>
      <Reference />
    </main>
  )
}
