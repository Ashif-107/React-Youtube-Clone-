import { useParams } from 'react-router-dom'
import PlayVideo from '../../Components/Play-video/PlayVideo'
import Recomended from '../../Components/Recommended/Recomended'
import './Video.css'

const Video = () => {

    const { videoId, categoryId } = useParams();

    return (
        <div className='play-container'>
            <PlayVideo videoId={videoId} />
            <Recomended category={categoryId} videoId={videoId} />
        </div>
    )
}

export default Video
