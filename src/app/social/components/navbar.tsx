'use client'
const Navbar= () => {
    
    return (
        <nav className="navbar">
            <div className="nav-left">
                <img className="logo" src="images/logo.png" alt="" />
                <ul className="navlogo">
                    <li><img src="images/notification.png" alt="" /></li>
                    <li><img src="images/inbox.png" alt="" /></li>
                    <li><img src="images/video.png" alt="" /></li>
                </ul>
            </div>
            <div className="nav-right">
                <div className="search-box">
                    <img src="images/search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="profile-image online">
                    <img src="images/profile-pic.png" alt="" />
                </div>
            </div>
            <div className="user-settings">
                <div className="profile-darkButton">
                    <div className="user-profile">
                        <img src="images/profile-pic.png" alt="" />
                        <div>
                            <p> Alex Carry</p>
                            <a href="#">See your profile</a>
                        </div>
                    </div>
                    <div id="dark-button" >
                        <span></span>
                    </div>
                </div>
                <hr />
                {/* ... rest of your user settings */}
            </div>
        </nav>
    );
};

export default Navbar;