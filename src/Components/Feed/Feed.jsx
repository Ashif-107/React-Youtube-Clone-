import './Feed.css'
import { Link } from 'react-router-dom'
import { API_KEY, value_conventor } from '../../data'
import { useEffect, useState } from 'react'
import moment from 'moment';

// eslint-disable-next-line react/prop-types
const Feed = ({ category }) => {

    const [data, setData] = useState([])

    const fetchVideos = async () => {
        //const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=75&regionCode=In&videoCategoryId=${category}&key=${API_KEY}`
        // await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items)).catch(err => console.log(err))

        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=75&regionCode=In&videoCategoryId=${category}&key=${API_KEY}`)
        const data = await response.json();
        setData(data.items)
    }

    useEffect(() => {
        fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    return (
        <div className="feed">
            {data.map((item) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{value_conventor(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                )
            })}


        </div>

    )
}

export default Feed
