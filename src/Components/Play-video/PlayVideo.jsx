import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>Best In the Generation Bloodline - Ashif</h3>
            <div className="play-video-info">
                <p>15M viwes &bull; 2 Days Ago</p>
                <div>
                    <span><img src={like} alt="" /> 16M</span>
                    <span><img src={dislike} alt="" /> 0</span>
                    <span><img src={share} alt="" /> Share</span>
                    <span><img src={save} alt="" /> save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>Ashif-107</p>
                    <span>69M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, voluptas.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nam.</p>
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
