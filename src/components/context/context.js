import React, { createContext } from 'react'

export const context = createContext({
    username: '',
    setUsername: () => { },
    roomCode: '',
    setRoomCode: () => { },
    joinGame: () => {},
    createGame: () => {}
})