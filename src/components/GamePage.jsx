import React, { useState } from 'react'

const GamePage = () => {
    const [togglePic, setTogglePic] = useState(false)
    const [togglePuase, setTogglePuase] = useState(false)
    const [toggleLocation, setToggleLocation] = useState(false)
    const [sel, setSel] = useState()

    let array = [
        { id: 1, name: "resturant" }, { id: 2, name: "ship" }, { id: 3, name: "cinem" }, { id: 4, name: "airplane" }
    ]

    return (
        <div className="game">
            <span className="game__time">29:30</span>
            <h3 className="game__loaction-title">مکان قرار: رستوران</h3>
            <div className="game__role">
                <p className="game__hide" onClick={() => setTogglePic(!togglePic)}>برای مخفی کردن تصویر کلیک کنید!</p>

                <div className={togglePic ? "game__hide-role" : "game__show-role"}>
                    <div className="game__role-image">
                        <img src="/images/spy.svg" alt="spy" className="game__role-img" />
                    </div>
                    <p className="game__role-name">جاسوس</p>
                </div>

                <div className={togglePic ? "game__nothing-show" : "game__replace-role"}>
                    <div className="game__replace-image">
                        <img src="/images/nothing.jpg" alt="spy" className="game__replace-img" />
                    </div>
                    <p className="game__replace-name">مخفی شده</p>
                </div>
            </div>

            <div className="game-finish">
                <button className="game__finishbtn">پایان بازی</button>
                <button
                    onClick={() => setTogglePuase(!togglePuase)}
                    className="game__puase" className={togglePuase ? "game__puase-hide" : "game__puase"}>وقفه</button>
                <button
                    onClick={() => setTogglePuase(!togglePuase)}
                    className="game__puase" className={togglePuase ? "game__puased" : "game__puase-hide"}>ادامه</button>
            </div>

            <div className="game__player-list">
                <p>لیست بازیکنان</p>
                <ul className="game__player-ul">
                    <li className="game__player-li">بازیکن 1</li>
                    <li className="game__player-li">بازیکن 2</li>
                    <li className="game__player-li">بازیکن 3</li>
                    <li className="game__player-li">بازیکن 4</li>
                    <li className="game__player-li">بازیکن 1</li>
                    <li className="game__player-li">بازیکن 2</li>
                    <li className="game__player-li">بازیکن 3</li>
                    <li className="game__player-li">بازیکن 4</li>
                </ul>
            </div>
            <p className="game__message">در صورتی که جاسوس را می شناسید روی نام آن کلیک کنید</p>

            <div className="game__locations">
                <h3>لیست مکان ها</h3>
                <div className="game__location-list">
                    <div className="game__location">
                        <div className="game__location-image" onClick={() => setToggleLocation(!toggleLocation)}>
                            <img src="/images/resturant.png" alt="resturant" className="game__location-img" />
                            <img src="/images/z.png" alt="" className={toggleLocation ? "location-selected" : "location-select"} />
                        </div>
                        <p className="game__location-name">رستوران</p>
                    </div>
                </div>
            </div>

            {/* just for test dont worry */}
            <div> 
                {array.map(item => (
                    <p key={item.id}
                        onClick={() =>setSel(item.id)}
                        className={sel === item.id ? "aa" : ""}
                    >{item.name}</p>
                ))}
            </div>
        </div>
    )
}

export default GamePage