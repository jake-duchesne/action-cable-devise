import { Controller } from "@hotwired/stimulus"
import consumer from "channels/consumer"

// Connects to data-controller="room"
export default class extends Controller {
  static targets = [ "roomData", "joinList" ]

  connect() {
    let roomId = this.roomDataTarget.dataset.roomId
    this.sub = this.createActionCableChannel(roomId)
    
    console.log(this.sub)
  }

  createActionCableChannel(roomId) {
    return consumer.subscriptions.create(
      { channel: "RoomChannel", room_id: roomId },
    
      {
      connected() {
        // Called when the subscription is ready for use on the server'
        this.perform("get_user_data")
      },

      disconnected() {
        // Called when the subscription has been terminated by the server
      },

      received(data) {
        // Called when there's incoming data on the websocket for this channel
        console.log(data)
        this.createJoinNotification(data)
      },

      createJoinNotification(data) {
        const element = document.querySelector("[data-room-target='joinList']")
        const newNode = document.createElement("p")
        const newContent = document.createTextNode(`Welcome ${data.username}`)

        newNode.appendChild(newContent)
        element.appendChild(newNode)
      }
    });
  }

  
}
