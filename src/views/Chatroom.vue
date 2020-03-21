<style lang="scss" scoped>
.left {
  width: max-content;
  border-right: 1px solid #80808038;
  padding: 0.5rem;
  background-color: #80808038;
  ul {
    padding: 0;
    margin: 0;
    height: 100%;
    background-color: #ffffff;
  }

  li {
    list-style: none;
    width: 200px;
    vertical-align: middle;
    line-height: 60px;
    height: 60px;
    border-right: 1px solid #80808038;
    border-top: 1px solid #80808038;
    overflow: hidden;
    &:first-child {
      border-top: none;
    }

    &:last-child {
       border-bottom: 1px solid #80808038;
    }
  }
}
  
 

.right {
  flex-grow: 1;
  text-align: center;
  position: relative;
  border-right: 1px solid #80808038;
  background-color: #80808038;
  ul {
    padding: 1rem;
  }
}

.extra{
  display: flex;
  flex-direction: column;
  header {
      height: 35px;
      border-bottom: 1px solid #80808038;
      padding :8px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      &:nth-child(n + 1){
        border-top: 1px solid #80808038;
      }
    }
    
  .online-list,
  .other-room{ 
    flex-grow: 1; 
    width: max-content;
    min-width: 200px; 
    position: relative;
    overflow: hidden;
    section{
      height: 100%;
      position: relative;
      overflow: auto;
      margin-top: 35px;
      ul {
          padding-left: 8px;
          
          li {
            padding: 4px;
            cursor: pointer;
            list-style: none;
            .online-contact{
              display: flex;
              align-items: center;
              .avatar{
                width: 24px;
                height: 24px;
                border-radius: 50%;
              }

              span{
                padding-left: 8px;
                flex-grow: 1;
              }

              i{
                width: max-content;
                font-size: 20px;
              }
            }
          }
        }
    }
  
  } 
}

 
.chat {
  position: absolute;
  margin: 2rem auto;
  left: 10vw;
  right: 10vw;
  top: 10vh;
  bottom: 10vh;
  display: flex;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  max-width: 1024px;
}

.liselected {
  background: #80808038;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 3px;
  vertical-align: middle;
  margin-left: 8px;
}

.list-item {
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  .inner-item {
    flex-grow: 1;
    height: 48px;
    text-align: left;
  }

  .inner-item .nick {
    margin: 0 0 0 4px;
    line-height: 32px;
    font-weight: 500;
  }

  .inner-item .last-chat {
    margin: 0 0 0 4px;
    line-height: 16px;
    font-size: 12px;
  }
}


.right header {
  border-bottom: 1px solid #80808038;
}
.right .content-box {
  position: relative;
  overflow: auto;
}
.right {
  header h1 {
    margin: 1rem auto;
  }

  .input-box {
    flex-direction: column;
    background: #fff;
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    top: 70%;
    border-top: 1px solid #80808038;
    .input {
      flex-grow: 1;
      textarea {
        &:focus {
          outline: none;
        }
        width: 100%;
        border: none;
        resize: none;
        padding: 16px;
        height: 100%;
      }
    }
    .buttons {
      #submit {
        padding: 4px 12px;
        float: right;
        border-radius: 4px;
        margin-right: 8px;
        margin-bottom: 8px;
      }
      height: max-content;
    }
    .tools {
      height: max-content;
    }
  }
}

.buttons::after {
  content: '';
  display: block;
  clear: both;
}

.right li {
  list-style: none;
  margin-bottom: 8px;
}

.msg-left {
  text-align: left;
}

.msg-left .msg-left-box {
  display: flex;
}

.msg-left .msg-left-content {
  display: inline-block;
}

.msg-left .msg-left-content p {
  margin: 4px 12px;
}

.msg-content {
  display: inline-block;
  padding: 8px;
  background: #fff;
  border-radius: 5px;
  position: relative;
}

.left-triangle {
  margin-left: 10px;
}

.right-triangle {
  margin-right: 10px;
  margin-right: 10px;
  background: #2196f3;
  color: #fff;
}

.right-triangle:after {
  content: '';
  position: absolute;
  right: -20px;
  top: 8px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 10px solid #2196f3;
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

.left-triangle:after {
  content: '';
  position: absolute;
  left: -20px;
  top: 4px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid #fff;
  border-bottom: 10px solid transparent;
}

.msg-right {
  text-align: right;
}

.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
}

.header-box {
  display: flex;
  margin: auto;
  height: 100%;
  margin-right: 2rem;
  align-items: center;
  justify-content: flex-end;
}

.header-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
</style>
<template>
  <div>
    <div class="header">
      <div class="header-box">
        <span class="nickname">{{username}}</span>
        <img
          class="header-avatar"
          :src="getImgUrl(username)"
        />
      </div>
    </div>
    <div class="chat">
      <div class="left">
        <ul>

           <li  @click="selectRoom()" :class="0 === currentRoomId ? 'liselected' : ''">
            <div class="list-item">
              <img
                class="avatar"
                src="http://image.popochiu.com/32845622-3-thread_28272798_20200307142236_s_70454_o_w_690_h_1211_9965.png"
              />
              <div class="inner-item">
                <p class="nick">技術性調整</p>
                <p class="last-chat">精神小夥</p>
              </div>
            </div>
          </li> 

           <li v-for="(item,index) in myRooms" :key="index" @click="selectRoom(item)" :class="item.id === currentRoomId ? 'liselected' : ''">
            <div class="list-item">
              <img
                class="avatar"
                src="http://image.popochiu.com/32845622-3-thread_28272798_20200307142236_s_70454_o_w_690_h_1211_9965.png"
              />
              <div class="inner-item">
                <p class="nick">{{item.name}}</p>
                <p class="last-chat">{{item.lastMsg}}</p>
              </div>
            </div>
          </li> 
        </ul>
      </div>
      <div class="right">
        <header>
          <h1 class="chat-title">{{title}}</h1>
        </header>
        <div class="content-box">
          <ul>
            <li
              :class="item.isSend ? 'msg-right' : 'msg-left'"
              v-for="(item, index) in messages"
              :key="index"
            >
              <div class="msg-left-box" v-if="!item.isSend">
                <img class="avatar" :src="getImgUrl(item.username)" />
                <div class="msg-left-content">
                  <p>{{item.username}}</p>
                  <div class="msg-content left-triangle">
                    {{item.msg}}
                  </div>
                </div>
              </div>

              <div v-if="item.isSend">
                <div class="msg-content right-triangle">
                       {{item.msg}}
                </div>
                <img class="avatar" :src="getImgUrl(username)" />
              </div>
            </li>
          </ul>
        </div>
        <footer class="input-box">
          <div class="tools"></div>
          <div class="input">
            <textarea
              placeholder="..."
              name=""
              id="inputMessage"
              cols="30"
              v-model="inputValue"
              @keyup.13="submit($event)"
            ></textarea>
          </div>
          <div class="buttons">
            <button id="submit" @click="submit">发送</button>
          </div>
        </footer>
      </div>

      <div class="extra">
        <div class="online-list">
          <header>房間老友({{CurrentRoomsObject.users.length}})</header>
          <section>
                  <ul>
            <li v-for="(item, index) in CurrentRoomsObject.users" :key="index"> 
                <el-popover
                placement="top-start"
                :title="item.name"
                width="200"
                trigger="hover"
                :content="item.id">
                  <div slot="reference" class="online-contact">
                    <img class="avatar" :src="getImgUrl(item.name)">
                    <span>{{item.name}} </span> 
                </div> 
              </el-popover>
              
              </li>  
          </ul>
          </section> 
        </div>

        <div class="other-room">
           <header>其他房間(2)</header>
           <section>
                  <ul>
            <li v-for="(item, index) in rooms" :key="index"> 
                <div slot="reference" class="online-contact" >
                    <img class="avatar" :src="getImgUrl(item.name)">
                    <span>{{getUserName(item.id)}} </span> 
                    <i class=" el-icon-circle-plus-outline" @click="joinRoom(item, index)"></i> 
                </div>  
              </li>  
          </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Action } from 'vuex-class'
import { DesHelper } from '@/utils/des'
import { LANGUAGES, LOGIN_HINTS } from '@/constant'
import { moduleUser } from '@/store/user'
import Socket from '../utils/socketio'
import { Message } from '@/models/message'
@Component
export default class extends Vue {
  inputValue = ''
  currentRoomId = 0
  messages: any[] = []
  msgBox = new Map()
  onlineList: any[] = []
  userlist: any[] = []
  CurrentRoomsObject = {
    messages: [],
    users: []
  }
  myRooms: any[] = []
  rooms: any[] = []
  title = '技術性調整'
  instance: Socket = new Socket('localhost?token=12', '/chat')
  username = ''
  created() {
    this.msgBox.set(0, [])
    this.rooms = [{
      name: 'Room 1',
      id: 1
    },{
      name: 'Room 2',
      id: 2
    }]
    this.username = localStorage.getItem('username') || ''
    if (!this.username) {
      this.username = Socket.genID(5)
      localStorage.setItem('username', this.username)
    } else {
      let myRooms: any[] = JSON.parse(localStorage.getItem(this.username + '-myRooms') || '[]')

      if (myRooms && myRooms.length > 0) {
        this.myRooms.push(...myRooms)
        this.rooms = this.rooms.filter((item) => {
          return !myRooms.find(my => my.id === item.id)
        })
        let ids = this.myRooms.map(item => {
          return item.id
        })
        this.instance.joinRooms(ids)
      }
    }
    this.instance.joinDefaultRoom(this.username)
    this.instance.listenOnLogined((data: any) => {
      console.log(data)
    })

    this.instance.listenOnReceiveMsg((data: Message) => {
      console.log(data)
      const msg = {
        msg: data.message,
        username: data.username,
        isSend: false
      }

      if (data.roomId === this.currentRoomId) {
        this.messages.push(msg)
        this.msgBox.set(this.currentRoomId, this.messages)
      } else {
        let messages = this.msgBox.get(data.roomId) || []
        messages.push(msg)
        this.msgBox.set(data.roomId, messages)
      }
    })

    this.instance.listenOnRefresh((data: any) => {
      this.onlineList = data.rooms
      this.userlist = data.data
      this.refreshRoomUsers()
      console.log(this.onlineList)
    })
  }

  getUserName(id: string) {
    if (!id) return ''
    if (this.userlist && this.userlist.length > 0) {
      const user = this.userlist.find(item => item.id === id)
      if (user) {
        return user.name
      }
    }
    return 'y游客'
  }
  refreshRoomUsers() {
    const room = this.onlineList.find(item => item.room === this.currentRoomId)
    if (room && room.users) {
      this.CurrentRoomsObject.users = room.users
    }
  }
  submit() {
    console.log(this.inputValue)

    if (!this.inputValue) {
      return
    }
    if (this.currentRoomId === 0) {
      this.instance.sendMsg(this.inputValue, 'text')
    } else {
      this.instance.sendMsgToRoom(this.currentRoomId,this.inputValue)
    }
    this.messages.push({
      roomId: this.currentRoomId,
      msg: this.inputValue,
      username: 'benjamin',
      isSend: true
    })
    this.msgBox.set(this.currentRoomId, this.messages)
    this.inputValue = ''
  }

  joinRoom(item: any,index: number) {
    this.rooms.splice(index,1)
    this.myRooms.push(item)
    localStorage.setItem(this.username + '-myRooms', JSON.stringify(this.myRooms))
    this.selectRoom(item)
    this.instance.joinRoom(item.id)
  }

  selectRoom(item: any) {
    if (!item) {
      item = {
        id: 0,
        name: '技術性調整'
      }
    }
    this.title = item.name
    this.currentRoomId = item.id
    this.refreshRoomUsers()
    this.messages = this.msgBox.get(this.currentRoomId) || []
  }

  getImgUrl(username: string) {
    return `/avatar/${username}`
  }
}
</script>

