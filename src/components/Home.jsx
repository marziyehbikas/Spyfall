import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { context } from './context/context';

const Home = () => {
    const { username, setUsername, roomCode, setRoomCode, joinGame, createGame } = useContext(context)
    console.log(username);
    const [confirmUsername, setConfirmUsername] = useState(false)

    return (
        <div className="home">
            <div className="home__logo">
                <img src="/images/logo6.jpg" alt="spyfall" className="home__logo-img" />
            </div>

            <div className="home__content">

                {
                    confirmUsername ? null : <Fragment>
                        <label htmlFor="home__usename-input" className="home__username-lbl">لطفا نام خود را وارد کنید</label>
                        <input type="text" id="home__username-input" onChange={e => setUsername(e.target.value)} />
                        <button className="home__confirmbtn" onClick={() => setConfirmUsername(true)}>تایید</button>
                    </Fragment>
                }
                {
                    confirmUsername ?
                        <Fragment>
                            <button onClick={() => createGame()} className="home__new-game">بازی جدید</button>

                            <label htmlFor="home__room-code" className="home__rome-code-lbl">کد اتاق</label>
                            <input type="text" id="home__room-code" onChange={e => setRoomCode(e.target.value)} />
                            <button onClick={() => joinGame()} className="home__join-game">پیوستن به بازی</button>
                        </Fragment> :
                        null
                }
                <Link className="home__link" to="/">چگونه بازی کنیم؟</Link>
            </div>
        </div>
    )
}

export default Home