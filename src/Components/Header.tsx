import { useAppSelector } from "../StateManager/Store";


const Header = () => {
  const { number } = useAppSelector((state) => state.testslice);
  return (
    <div className="bg-gray-200 flex gap-10">
<h1 className="">this is header component</h1>
    <div>{number}</div>
    </div>
  )
}

export default Header