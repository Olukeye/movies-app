import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            <video className="video" autoPlay onProgress controls src="" />
        </div>
    )
}

export default Watch