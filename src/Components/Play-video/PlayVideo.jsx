import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { useEffect, useState } from 'react'
import { API_KEY } from '../../data'

// eslint-disable-next-line react/prop-types
const PlayVideo = ({ videoId }) => {

    const [apiData, setApiData] = useState([]);

    const fetchVideoData = async () => {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(response => response.json()).then(data => setApiData(data.items[0].snippet)).catch(err => console.log(err))
    }

    useEffect(() => {
        fetchVideoData();
    }, [])

    return (
        <div className='play-video'>
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3>{apiData ? apiData.title : "Title Here"}</h3>
            <div className="play-video-info">
                <p>69 M views &bull; 96 days ago</p>

                <div>
                    <span><img src={like} alt="" />100k </span>
                    <span><img src={dislike} alt="" /> 10</span>
                    <span><img src={share} alt="" /> Share</span>
                    <span><img src={save} alt="" /> save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>{apiData.channelTitle}</p>
                    <span>69M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData.description}</p>

                <hr />
                <h4>10k comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Ramanan B R</h3>
                        <span>1 day ago</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla fugiat itaque eius dolore, et repellendus quo. Delectus reprehenderit dolore hic.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>255</span>
                            <img src={dislike} alt="" />
                            <span>69</span>
                        </div>
                    </div>

                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Ramanan B R</h3>
                        <span>1 day ago</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla fugiat itaque eius dolore, et repellendus quo. Delectus reprehenderit dolore hic.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>255</span>
                            <img src={dislike} alt="" />
                            <span>69</span>
                        </div>
                    </div>

                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Ramanan B R</h3>
                        <span>1 day ago</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla fugiat itaque eius dolore, et repellendus quo. Delectus reprehenderit dolore hic.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>255</span>
                            <img src={dislike} alt="" />
                            <span>69</span>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default PlayVideo
