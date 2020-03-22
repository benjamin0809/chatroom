import io from 'socket.io-client'
class Socket {
  socket: any
  connected = false
  constructor(url: string, path: string) {
    this.socket = io(url, {
      path: path
    })
  }

  listenOnLogined(fn: Function) {
    this.socket.on('login', (data: any) => {
      this.connected = true
      fn.call(fn, data)
    })
  }

  listenOnReceiveMsg(fn: Function) {
    this.socket.on('new message', (data: any) => {
      fn.call(fn, data)
    })
  }

  listenOnRefresh(fn: Function) {
    this.socket.on('refresh-list', (data: any) => {
      fn.call(fn, data)
    })
  }

  listenOnUserJoined(fn: Function) {
    this.socket.on('user joined', (data: any) => {
      fn.call(fn, data)
    })
  }

  listenOnUserLefted(fn: Function) {
    this.socket.on('user left', (data: any) => {
      fn.call(fn, data)
    })
  }

  listenOnUserTyping(fn: Function) {
    this.socket.on('typing', (data: any) => {
      fn.call(fn, data)
    })
  }
  listenOnDisconnect(fn: Function) {
    this.socket.on('typing', (data: any) => {
      fn.call(fn, data)
    })
  }
  listenOnReConnected(fn: Function) {
    this.socket.on('typing', (data: any) => {
      fn.call(fn, data)
    })
  }
  listenOnReconnectError(fn: Function) {
    this.socket.on('typing', (data: any) => {
      fn.call(fn, data)
    })
  }
  joinRoom(roomId: number) {
    this.socket.emit('join room', { roomId: roomId })
  }

  joinRooms(roomIds: number[]) {
    this.socket.emit('join room', { roomId: roomIds })
  }

  joinDefaultRoom(username: string) {
    this.socket.emit('add user', username)
  }
  sendMsgToRoom(roomId: number, message: string) {
    this.socket.emit('send room', { message: message, roomId: roomId })
  }

  sendMsg(message: string, type: string) {
    this.socket.emit('new message', { message: message, type: type })
  }

  typing(message: string) {
    this.socket.emit('typing', { message: message })
  }

  static genID(length: number) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
  }
}

export default Socket
