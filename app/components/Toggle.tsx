const Toggle = ({
  isOn,
  onToggle,
}: {
  isOn: boolean
  onToggle: () => void
}) => {
  return (
    <div
      className={`hover:bg-custom-soft-cyan relative h-[1.5rem] w-[3rem] cursor-pointer rounded-full ${
        isOn ? "bg-custom-strong-cyan-2" : "bg-light-toggle"
      }`}
      onClick={onToggle}
    >
      <div
        className={`absolute top-[.2rem] h-[1.1rem] w-[1.1rem] rounded-full bg-white ${
          isOn ? "left-[.2rem]" : "right-[.2rem]"
        }`}
      ></div>
    </div>
  )
}

export default Toggle
