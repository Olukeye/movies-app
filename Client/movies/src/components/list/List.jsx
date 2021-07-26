import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../listItem/ListItem';
import { useRef, useState} from "react";
import  './list.scss';

const List = () => {

    const [slider, setSlider] = useState(0);
    const [showArrow, setShowArrow] = useState(false)   //only show pointed arrow when item is clicked
    const listRef = useRef()

    const handleClick = (direction) => {
        setShowArrow(true);
        let distance = listRef.current.getBoundingClientRect().x - 50

        if(direction === "left" && slider > 0) {
            // if slider item is more than 0, stop sliding 
            setSlider(slider - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        
        if(direction === "right" && slider < 3) {
             // if slider item is on 5 slides, stop sliding
            setSlider(slider + 1);
            listRef.current.style.transform = `translateX(${- 230 + distance}px)`
         
        }
    }

    return (
        <div className="list">
            <span className="listTitle">Watch More!</span>
            <div className="wrapper">
                <ArrowBackIosOutlined onClick={()=>handleClick("left")}
                style={{display:!showArrow && "none"}} className="sliderArrow left"/>
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                </div>
                < ArrowForwardIosOutlined onClick={()=> handleClick("right")} 
                 className="sliderArrow right"/>
            </div>
        </div>
    )
}

export default List
