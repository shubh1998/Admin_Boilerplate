import { io } from 'socket.io-client'

const createSocketConnection = (connectionUrl, authToken) => {
  const ioConnection = io(connectionUrl, {
    transport: ['polling', 'webSocket'],
    ...(authToken
      ? {
          auth: {
            authorization: `Bearer ${authToken}`
          }
        }
      : {})
  })

  return ioConnection
}

export default createSocketConnection
