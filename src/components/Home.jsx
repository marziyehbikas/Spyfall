import React, { Fragment, useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import { io } from "socket.io-client";

const Home = ({ history }) => {
    const [username, setUsername] = useState('')
    const [roomCode, setRoomCode] = useState()
    const [confirmUsername, setConfirmUsername] = useState(false)

    const socket = io("http://localhost:3000/");

    const joinGame = async () => {
        if (!username) {
            toast.error("برای شروع بازی یک نام برای خود انتخاب کنید")
            return;
        }

        if (!roomCode) {
            toast.error("برای پیوستن به بازی کد اتاق را وارد کنید")
            return;
        }

        socket.auth = { username };
        await socket.connect();
        socket.emit('joinRoom', roomCode, (err, userList) => {
            if (err) {
                console.log(err);
            } else {
                history.push({ pathname: '/new-game', state: { roomCode, userList } })
            }
        });
    }

    const createGame = async () => {
        if (!username) {
            toast.error("برای شروع بازی یک نام برای خود انتخاب کنید")
            return;
        }

        socket.auth = { username };
        await socket.connect();
        socket.emit('createRoom', (roomCode, userList) => {
            console.log("create");
            history.push({ pathname: '/new-game', state: { roomCode, userList } })
        });
    }

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
                            {/* path = /new-game */}
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