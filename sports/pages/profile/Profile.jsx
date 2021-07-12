import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"


function Profile() {
    return (
        <>
        <Topbar />
        <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img src="/assets/final2.jpg" alt="" className="profileCoverImg"/>
                <img src="/assets/jumpball.jpg" alt="" className="profileUserImg"/>
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Koby Vang</h4>
                    <span className="profileInfoDesc">my description</span>
                </div>
                <div className="profileRightBottom">
        <Feed />
        <Rightbar />
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Profile
