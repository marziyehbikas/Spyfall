import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { context } from './context'
import { toast } from 'react-toastify'
import { io } from "socket.io-client";

const Context = ({ children,history }) => {
    const [username, setUsername] = useState('')
    const [roomCode, setRoomCode] = useState()

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
        <context.Provider value={{
            socket,
            username,
            setUsername,
            roomCode,
            setRoomCode,
            joinGame,
            createGame
        }}>
            {children}
        </context.Provider>
    )
}

export default withRouter(Context)