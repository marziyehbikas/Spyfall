import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

const Room = ({ location }) => {
    console.log(location.state);
    let data = location.state
    const [toggleDropdown, setToggleDropdown] = useState(false)
    
    return (
        <div className="room">
            <h2 className="room__code">کد اتاق: {data.roomCode}</h2>
            <div className="room__time">
                <span className="room__clock-icon"><i className="fas fa-clock"></i></span>

                <div className="room__drop-down">
                    <div>
                        <button
                            onClick={() => setToggleDropdown(!toggleDropdown)}
                            className="room__dropbtn"
                        >زمان مورد نظر را انتخاب کنید</button>
                        <i className="room__arrow-icon fas fa-chevron-down"></i>
                    </div>
                    <div className={toggleDropdown ? "room__activedrop" : "room__drop-content"}>
                        <a className="room__drop-link" href="#">6 دقیقه</a>
                        <a className="room__drop-link" href="#">7 دقیقه</a>
                        <a className="room__drop-link" href="#">8 دقیقه</a>
                        <a className="room__drop-link" href="#">9 دقیقه</a>
                        <a className="room__drop-link" href="#">10 دقیقه</a>
                    </div>
                </div>

            </div>

            <div className="room__player-list">
                <p className="room__ready-count">1 شرکت کننده آماده نیست!</p>
                <ul className="room__players">
                        {
                            data.userList.map(item => (
                                <li className="room__user" key={item.code}>
                                    <div>{item.isAdmin ? <i className="fas fa-user-shield"></i> : <i className="fas fa-user"></i>} {item.username}</div>
                                    <button className="room__readybtn">آماده</button>
                                </li>
                            ))
                        }


                    {/* <li className="room__user">
                        <div><i className="fas fa-user"></i> نام کاربر</div>
                        <button className="room__readybtn">آماده</button>
                    </li> */}
                </ul>
            </div>

            <div className="room__start-game">
                <Link to="/game-page" className="room__start-gamelink">شروع بازی</Link>
            </div>
        </div>
    )
}

export default Room