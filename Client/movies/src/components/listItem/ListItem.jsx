import   "./listItem.scss"
import { PlayArrow, Add, ThumbUpAltOutlined,ThumbDownAltOutlined} from '@material-ui/icons';
import { useState } from "react";


const Listitem = ({index}) => {
    const [ atHovered, setAtHovered ] = useState(false);
    const thriller ="";
    return (
        <div className="listItem"
        // hover when a mouse is entered, and unhover when a mouse leaves 
        style={{left:atHovered && index * 225 -50 + index * 2.5}}
        onMouseEnter={()=> setAtHovered(true)}
        onMouseLeave={()=> setAtHovered(false)}>
            <img src="https://render.fineartamerica.com/images/rendered/medium/acrylic-print/20/30/hangingwire/break/images-medium-5/space-alex-malikov.jpg" alt=""/>
            {atHovered && (
                <>
                 <video src={thriller} autoPlay={true} loop />
                 <div className="itemDatas">
                     <div className="icons">
                         <PlayArrow className="icon"/>
                         <Add className="icon"/>
                         <ThumbUpAltOutlined className="icon"/>
                         <ThumbDownAltOutlined className="icon"/>
                     </div>
                     <div className="itemDataUp">
                         <span> 1hr 14ms</span>
                         <span className="ageLimit"> +13</span>
                         <span>2000</span>
                     </div>
                     <div className="desc">
                         Lorem ipsum dolor, sit amet consectetur 
                         adipisicing elit.
                     </div>
                     <div className="genre">Action</div>
                 </div>
             </>
            )}
        </div>
    )
}

export default Listitem
