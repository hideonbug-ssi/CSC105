import Navbar from "./Navbar"
import Profile from "./Profile"
import "../Style/Home.css"
function Home() {
    return(
        <div className = "layout">
            <Profile />
            <Navbar />
        </div>
    );
}
export default Home