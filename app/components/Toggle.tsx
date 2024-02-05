const Toggle = ({
  isOn,
  onToggle,
}: {
  isOn: boolean
  onToggle: () => void
}) => {
  return (
    <div
      className={`from-dark-toggle-from to-dark-toggle-to relative h-[1.5rem] w-[3rem] cursor-pointer rounded-full hover:bg-gradient-to-tr  ${
        isOn ? "bg-gradient-to-tr" : "bg-light-toggle"
      }`}
      onClick={onToggle}
    >
      <div
        className={`absolute top-[.2rem] h-[1.1rem] w-[1.1rem] rounded-full ${
          isOn ? "bg-very-dark-blue-top left-[.2rem]" : "right-[.2rem] bg-white"
        }`}
      ></div>
    </div>
  )
}

export default Toggle
