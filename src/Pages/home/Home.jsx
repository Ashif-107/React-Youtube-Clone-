import Feed from '../../Components/Feed/Feed'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.css'


// eslint-disable-next-line react/prop-types
const Home = ({ sidebar }) => {
    return (
        <>
            <Sidebar sidebar={sidebar} />
            <div className={`container ${sidebar?"":"large-container"}`}>
                <Feed/>
            </div>
        </>
    )
}

export default Home
