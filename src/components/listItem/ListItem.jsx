import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useState } from "react";

const ListItem = (index) => {
  const [isHover,setIsHover]=useState(false);
  const trailer=" className="
  return (
    <div className="listItem"
        style={{left: isHover && (index.index * 225) - 50 +  index.index * 2.5}}
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}>
        <img src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe-EAKTogupa1E7zwgnUEanp8EbVO2W6bRTy5PAesvwajYgmwwuj0d41sX5igToHLbKnv_dZRHfeLpqzQ-tqboOwU4T-W-oFXaY.jpg?r=409"
         alt="" />
    { isHover && (
        <>
          <video src={trailer} autoPlay={true} loop/>
        <div className="iteminfo">
          <div className="icons">
            <PlayArrowIcon className="icon"/>
            <AddIcon className="icon"/>
            <ThumbUpAltOutlinedIcon className="icon"/>
            <ThumbDownAltOutlinedIcon className="icon"/>
          </div>
          <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Maxime aspernatur, earum laudantium sint dolores .
          </div>
          <div className="genre">Action</div>
        </div>
      </>
    )}
    </div>
  )
}

export default ListItem