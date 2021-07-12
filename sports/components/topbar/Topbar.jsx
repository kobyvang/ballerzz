import "./topbar.css"



function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarleft">
                <span className="logo"> Ballerz</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                <i class="bibi-search"></i>
                <svg xmmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bibi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg> 
                 <input placeholder="Search here" className="searchinput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                    <i class="bibi-people-fill"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" fill="currentColor" class="bibi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                </svg>
                <span className="topbarIconbadge">1</span>
                    </div>
                    <img src="/assets/running.jpg" alt="" className="topbarImg"/>
                </div>

            </div>
            
        </div>
    )
}

export default Topbar
