import PlayVideo from '../../Components/Play-video/PlayVideo'
import Recomended from '../../Components/Recommended/Recomended'
import './Video.css'

const Video = () => {
    return (
        <div className='play-container'>
            <PlayVideo/>
            <Recomended/>
        </div>
    )
}

export default Video
