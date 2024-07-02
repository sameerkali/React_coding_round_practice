import { Link } from "react-router-dom";
import {useState} from "react"

const LikeButton = () => {
  const [like, setLike] = useState(false)
  console.log('====================================');
  console.log(like);
  console.log('====================================');

  const haddleClick = () => {
    setLike(x => !x)
  }
return(
  <>
  <h1>Fifteen (Like Button)</h1>
  <button onClick={haddleClick} className={` px-7 rounded-full py-1 ${like ? 'bg-red-800' : 'bg-gray-800'}`}>like</button>

  <Link to={`/`}>Home</Link>
  </>
)
}

export default LikeButton;