// Import React and styles
'use client';
import React, { useState } from 'react';
import './styles/global.css';
import styles from './styles/style.module.css'; // Replace with the correct path to your styles

// Define a component
const YourComponent: React.FC = () => {
    const [userSettingsVisible, setUserSettingsVisible] = useState(false);

    const handleUserSettingToggle = () => {
        console.log(userSettingsVisible);

        setUserSettingsVisible(!userSettingsVisible);
    };
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navLeft}>
                    <img className={styles.logo} src="/images/logo.png" alt="" />
                    <ul className={styles.navlogo}>
                        <li><img src="/images/notification.png" alt="" /></li>
                        <li><a href='/home'><img src="/images/inbox.png" alt=""  /></a></li>
                        <li><img src="/images/video.png" alt="" /></li>
                    </ul>
                </div>
                <div className={styles.navRight}>
                    <div className={styles['search-box']}>
                        <img src="/images/search.png" alt="" />
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className={styles['profile-image']} onClick={handleUserSettingToggle}>
                        <img src="/images/nhatvuong.jpg" alt="" />
                    </div>
                </div>
                {/* user-setting-showup-toggle */}
                {userSettingsVisible && (
                    <div className={`${styles['user-settings']} ${styles['user-setting-showup-toggle']}`}>
                        <div className={styles['profile-darkButton']}>
                            <div className={styles['user-profile']}>
                                <img src="/images/nhatvuong.jpg" alt="" />
                                <div>
                                    <p> Nguyễn Nhất Vương</p>
                                    <a href="/profile">See your profile</a>
                                </div>
                            </div>
                            <div id="dark-button" >
                                <span></span>
                            </div>
                        </div>
                        <hr />
                        <div className={styles['user-profile']}>
                            <img src="/images/feedback.png" alt="" />
                            <div>
                                <p> Give Feedback</p>
                                <a href="#">Help us to improve</a>
                            </div>
                        </div>
                        <hr />
                        <div className={styles['settings-links']}>
                            <img src="/images/setting.png" alt="" className={styles['settings-icon']} />
                            <a href="#">Settings & Privary <img src="/images/arrow.png" alt="" /></a>
                        </div>

                        <div className={styles['settings-links']}>
                            <img src="/images/help.png" alt="" className={styles['settings-icon']} />
                            <a href="#">Help & Support <img src="/images/arrow.png" alt="" /></a>
                        </div>

                        <div className={styles['settings-links']}>
                            <img src="/images/Display.png" alt="" className={styles['settings-icon']} />
                            <a href="#">Display & Accessibility <img src="/images/arrow.png" alt="" /></a>
                        </div>

                        <div className={styles['settings-links']}>
                            <img src="/images/logout.png" alt="" className={styles['settings-icon']} />
                            <a href="#">Logout <img src="/images/arrow.png" alt="" /></a>
                        </div>

                    </div>
                )}

                {/* ... user-settings component ... */}
            </nav>

            <div className={styles['profile-container']}>
                <img src="images/cover.png" className={styles['coverImage']}></img>
                <div className={styles['dashboard']}>
                    <div className={styles['left-dashboard']}>
                        <img src="images/nhatvuong.jpg" className={styles['dashboard-img']}></img>
                        <div className={styles['left-dashboard-info']}>
                            <h3>Nguyễn Nhất Vương</h3>
                            <p>120 Friends - 20 mutuals</p>
                            <div 
                            style={{'display':'flex'}}
                            className={styles['mutual-friend-images']}>
                                <img src="images/member-1.png"></img>
                                <img src="images/member-2.png"></img>
                                <img src="images/member-3.png"></img>
                                <img src="images/member-5.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles['container']} ${styles['content-profile-container']}`}>
                    <div className={`${styles['left-sidebar']} ${styles['profile-left-sidebar']}`}>


                        <div className={styles['left-profile-sidebar-top']}>
                            <div className={styles['intro-bio']}>
                                <h4>intro</h4>
                                <p>Belive in yourself and you do unbelievable things <i className={styles['far fa-smile-beam']}></i></p>
                                <hr />
                            </div>
                            <div className={styles['background-details']}>

                                <a href="#"><i className={`${styles['fas']} ${styles['fa-briefcase']}`}></i>
                                    <p>Freelancer on Fiverr</p>
                                </a>
                                <a href="#"><i className={styles['fas fa-graduation-cap']}></i>
                                    <p>Studied bsc at Choumuhoni Collage</p>
                                </a>
                                <a href="#"><i className={styles['fas fa-user-graduate']}></i>
                                    <p>Went to Technical School & Collage</p>
                                </a>
                                <a href="#"><i className={styles['fas fa-home']}></i>
                                    <p>Lives in Noakhali, Chittagong</p>
                                </a>
                                <a href="#"><i className={styles['fas fa-map-marker-alt']}></i>
                                    <p>From Chittagong, Bangladesh</p>
                                </a>
                            </div>
                        </div>
                        <div className={`${styles['left-profile-sidebar-top']} ${styles['gallery']}`}>
                            <div className={`${styles['heading-link']} ${styles['profile-heading-link']}`}>

                                <h4>Photos</h4>
                                <a href="">All Photos</a>
                            </div>

                            <div className={styles['gallery-photos']}>
                                <div className={styles['gallery-photos-rowFirst']}>
                                    <img src="images/photo1.png"></img>
                                    <img src="images/photo2.png"></img>
                                    <img src="images/photo3.png"></img>

                                    <img src="images/photo4.png"></img>
                                    <img src="images/photo5.png"></img>
                                    <img src="images/photo6.png"></img>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['left-profile-sidebar-top']} ${styles['gallery']}`}>
                        <div className={`${styles['heading-link']} ${styles['profile-heading-link']}`}>
                                <h4>Friends</h4>
                                <a href="">All Friends</a>
                            </div>

                            <div className={styles['gallery-photos']}>
                                <div className={styles['gallery-photos-rowFirst']}>
                                    <div className={styles['first-friend']}>
                                        <img src="images/member-1.png"></img>
                                        <p>Nathan M</p>
                                    </div>
                                    <div className={styles['second-friend']}>
                                        <img src="images/member-2.png"></img>
                                        <p>Joseph N</p>
                                    </div>
                                    <div className={styles['third-friend']}>
                                        <img src="images/member-3.png"></img>
                                        <p>Blondie K</p>
                                    </div>
                                    <div className={styles['forth-friend']}>
                                        <img src="images/member-4.png"></img>
                                        <p>Jonathon J</p>
                                    </div>
                                    <div className={styles['fifth-friend']}>
                                        <img src="images/member-5.png"></img>
                                        <p>Mark K</p>
                                    </div>
                                    <div className={styles['sixth-friend']}>
                                        <img src="images/member-6.png"></img>
                                        <p>Emilia M</p>
                                    </div>
                                    <div className={styles['seventh-friend']}>
                                        <img src="images/member-7.png"></img>
                                        <p>Max P</p>
                                    </div>
                                    <div className={styles['eighth-friend']}>
                                        <img src="images/member-8.png"></img>
                                        <p>Layla M</p>
                                    </div>
                                    <div className={styles['ninth-friend']}>
                                        <img src="images/member-9.png"></img>
                                        <p>Edward M</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={`${styles['content-area']} ${styles['profile-content-area']}`}>


                        <div className={styles['write-post-container']}>
                            <div className={styles['user-profile']}>
                                <img src="images/nhatvuong.jpg"></img>
                                <div>
                                    <p> Nguyễn Nhất Vương</p>
                                    <small>Public <i className={styles['fas fa-caret-down']}></i></small>
                                </div>
                            </div>

                            <div className={styles['post-upload-textarea']}>
                                <textarea name="" placeholder="What's on your mind, Alex?" id="" cols={30} rows={3}></textarea>
                                <div className={styles['add-post-links']}>
                                    <a href="#"><img src="images/live-video.png"></img>Live Video</a>
                                    <a href="#"><img src="images/photo.png"></img>Photo/Video</a>
                                    <a href="#"><img src="images/feeling.png"></img>Feeling Activity</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['status-field-container']} ${styles['write-post-container']}`}>
                            <div className={styles['user-profile-box']}>
                                <div className={styles['user-profile']}>
                                    <img src="images/nhatvuong.jpg"></img>
                                    <div>
                                        <p> Nguyễn Nhất Vương</p>
                                        <small>August 13 1999, 09.18 pm</small>
                                    </div>
                                </div>
                                <div>
                                    <a href="#"><i className={styles['fas fa-ellipsis-v']}></i></a>
                                </div>
                            </div>
                            <div className={styles['status-field']}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores praesentium dicta
                                    laborum nihil accusantium odit laboriosam, sed sit autem! <a
                                        href="#">#This_Post_is_Better!!!!</a>
                                </p>
                                <img src="images/feed-image-1.png"></img>

                            </div>
                            <div className={styles['post-reaction']}>
                                <div className={styles['activity-icons']}>
                                    <div><img src="images/like-blue.png"></img>120</div>
                                    <div><img src="images/comments.png"></img>52</div>
                                    <div><img src="images/share.png"></img>35</div>
                                </div>
                                <div className={styles['post-profile-picture']}>
                                    <img src="images/nhatvuong.jpg "></img> <i className={styles[' fas fa-caret-down']}></i>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['status-field-container']} ${styles['write-post-container']}`}>
                            <div className={styles['user-profile-box']}>
                                <div className={styles['user-profile']}>
                                    <img src="images/nhatvuong.jpg"></img>
                                    <div>
                                        <p> Nguyễn Nhất Vương</p>
                                        <small>August 13 1999, 09.18 pm</small>
                                    </div>
                                </div>
                                <div>
                                    <a href="#"><i className={styles['fas fa-ellipsis-v']}></i></a>
                                </div>
                            </div>
                            <div className={styles['status-field']}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores praesentium dicta
                                    laborum nihil accusantium odit laboriosam, sed sit autem! <a
                                        href="#">#This_Post_is_Bigger!!!!</a>
                                </p>
                                <img src="images/feed-image-2.png"></img>

                            </div>
                            <div className={styles['post-reaction']}>
                                <div className={styles['activity-icons']}>
                                    <div><img src="images/like-blue.png"></img>120</div>
                                    <div><img src="images/comments.png"></img>52</div>
                                    <div><img src="images/share.png"></img>35</div>
                                </div>
                                <div className={styles['post-profile-picture']}>
                                    <img src="images/nhatvuong.jpg "></img> <i className={styles[' fas fa-caret-down']}></i>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['status-field-container']} ${styles['write-post-container']}`}>
                            <div className={styles['user-profile-box']}>
                                <div className={styles['user-profile']}>
                                    <img src="images/nhatvuong.jpg"></img>
                                    <div>
                                        <p> Nguyễn Nhất Vương</p>
                                        <small>August 13 1999, 09.18 pm</small>
                                    </div>
                                </div>
                                <div>
                                    <a href="#"><i className={styles['fas fa-ellipsis-v']}></i></a>
                                </div>
                            </div>
                            <div className={styles['status-field']}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores praesentium dicta
                                    laborum nihil accusantium odit laboriosam, sed sit autem! <a
                                        href="#">#This_Post_is_faster!!!!</a>
                                </p>
                                <img src="images/feed-image-3.png"></img>

                            </div>
                            <div className={styles['post-reaction']}>
                                <div className={styles['activity-icons']}>
                                    <div><img src="images/like-blue.png"></img>120</div>
                                    <div><img src="images/comments.png"></img>52</div>
                                    <div><img src="images/share.png"></img>35</div>
                                </div>
                                <div className={styles['post-profile-picture']}>
                                    <img src="images/nhatvuong.jpg "></img> <i className={styles[' fas fa-caret-down']}></i>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['status-field-container']} ${styles['write-post-container']}`}>
                            <div className={styles['user-profile-box']}>
                                <div className={styles['user-profile']}>
                                    <img src="images/nhatvuong.jpg"></img>
                                    <div>
                                        <p> Nguyễn Nhất Vương</p>
                                        <small>August 13 1999, 09.18 pm</small>
                                    </div>
                                </div>
                                <div>
                                    <a href="#"><i className={styles['fas fa-ellipsis-v']}></i></a>
                                </div>
                            </div>
                            <div className={styles['status-field']}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores praesentium dicta
                                    laborum nihil accusantium odit laboriosam, sed sit autem! <a
                                        href="#">#This_Post_is_perfect!!!!</a>
                                </p>
                                <img src="images/feed-image-4.png"></img>

                            </div>
                            <div className={styles['post-reaction']}>
                                <div className={styles['activity-icons']}>
                                    <div><img src="images/like-blue.png"></img>120</div>
                                    <div><img src="images/comments.png"></img>52</div>
                                    <div><img src="images/share.png"></img>35</div>
                                </div>
                                <div className={styles['post-profile-picture']}>
                                    <img src="images/nhatvuong.jpg"></img> <i className={styles[' fas fa-caret-down']}></i>
                                </div>
                            </div>
                        </div>
                        <button type="button" className={styles['btn-LoadMore" onclick="LoadMoreToggle()']}>Load More</button>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <p>&copy; Copyright 2023 - Socialbook All Rights Reserved</p>
            </footer>
        </>
    );
};

export default YourComponent;
