import "./rightbar.css"

export default function Rightbar({profile}) {


    const ProfileRightbar = () => {
        return(
            <>
            <h4 className="rightbarTitle">User info</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey"> City: </span>
                    <span className="rightbarInfoVaule"> Milwaukee,WI </span>
                </div>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey"> From: </span>
                <span className="rightbarInfoVaule"> Milwaukee,WI </span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey"> Favorite sport: </span>
                <span className="rightbarInfoVaule"> Football </span>
            </div>
            <h4 className="rightbarTitle"> Groups</h4>
            <div className="rightbarGroups">
                <div className="rightbarGroup"></div>
                <img src="/assets/league.jpg" alt="" className="rightbarGroupImg"/>
                <span className="rightbargroupName">Local league</span>
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <ProfileRightbar />
            </div>
        </div>
    )
}


