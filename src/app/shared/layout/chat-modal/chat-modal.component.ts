import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ChatService } from 'src/app/services/chat.service';

import { Channel } from "twilio-chat/lib/channel";
import {Message} from "twilio-chat/lib/message";
import {Member} from "twilio-chat/lib/member";
import { Observable, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'smart-chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.scss']
})
export class ChatModalComponent{
  @ViewChild('template', { static: true }) template: any;

  modalRef: BsModalRef;

  public isConnected: boolean = false;
  public isConnecting: boolean = false;
  public isGettingChannels: boolean = false;
  public channels: any[] = [];
  public channelObj: any;
  public chatMessage: string;
  public currentChannel: Channel;
  public typeObservable: any;
  public messages: Message[] = [];
  public currentUsername: string = localStorage.getItem('twackUsername');
  public isMemberOfCurrentChannel: boolean = false;
  public membersTyping: any = [];

  private conSub: any;
  private disconSub: any;

  @ViewChild('chatElement', {static: false}) chatElement: any;
  @ViewChild('chatDisplay', {static: false}) chatDisplay: any;


  constructor(
    private modalService: BsModalService,
    private chatService: ChatService,

  ) {
  }

  public showModal() {
    this.connect();
    this.modalRef = this.modalService.show(this.template, {
      class: 'modal-dialog-right chat-modal'
    });
  }

  public hideModal() {
    if (this.modalRef) {
      this.modalRef.hide();
      this.modalRef = null;
    }
  }

  connect() {
    this.isConnecting = true;
    console.log("chat-modal");
    this.chatService.connect('Test User');

    this.conSub = this.chatService.chatConnectedEmitter.subscribe(() => {
      this.isConnected = true;
      this.isConnecting = false;
      this.getChannels();
      this.chatService.chatClient.on('channelAdded', () => {
        this.getChannels();
      });
      this.chatService.chatClient.on('channelRemoved', () => {
        this.getChannels();
      });
      this.chatService.chatClient.on('tokenExpired', () => {
        // this.authService.refreshToken();
      });
    })

    this.disconSub = this.chatService.chatDisconnectedEmitter.subscribe(() => {
      this.isConnecting = false;
      this.isConnected = false;
    });
  }

  getChannels() {
    this.isGettingChannels = true;
    this.chatService.getPublicChannels().then((channels: any) => {
      this.channelObj = channels;
      this.channels = this.channelObj.items;
      console.log(channels);
      this.isGettingChannels = false;
      /* clean em up
      this.channels.forEach( c => {
        this.chatService.getChannel(c.sid).then(ch => {
          ch.delete();
        })
      })
      */
    });
  }

  leaveChannel() {
    if (this.typeObservable) {
      this.typeObservable.unsubscribe();
    }
    if (this.currentChannel) {
      return this.currentChannel.leave().then((channel: Channel) => {
        channel.removeAllListeners('messageAdded');
        channel.removeAllListeners('typingStarted');
        channel.removeAllListeners('typingEnded');
      });
    }
    else {
      return Promise.resolve();
    }
  }

  enterChannel(sid: string) {
    this.messages = [];
    this.membersTyping = [];

    this.leaveChannel()
      .then(() => {
        this.chatService.getChannel(sid).then(channel => {
          this.currentChannel = channel;
          console.log(channel);
          this.currentChannel.join()
            .then(r => {
              this.initChannel();
            })
            .catch(e => {
              if (e.message.indexOf('already exists') > 0) {
                this.initChannel();
              }
            });
        });
      });
  }

  initChannel() {
    this.typeObservable = fromEvent(this.chatElement.nativeElement, 'keyup')
    .pipe(
      debounceTime(100)
    ).subscribe(() => {
      this.typing();
    });

    this.currentChannel.on('messageAdded', (m) => {
      this.messages.push(m);
      const el = this.chatDisplay.nativeElement;
      setTimeout(() => {
        el.scrollTop = el.scrollHeight;
      });
    });
    this.currentChannel.on('typingStarted', (m) => {
      this.membersTyping.push(m);
    });
    this.currentChannel.on('typingEnded', (m) => {
      const mIdx = this.membersTyping.findIndex(mem => mem.identity === m.identity);
      this.membersTyping = this.membersTyping.splice(mIdx, 0);
    });
  }

  typing() {
    this.currentChannel.typing();
  }

  whosTyping() {
    return this.membersTyping.map(m => {
      if (m.identity !== this.currentUsername) {
        return m.identity;
      }
    }).join(', ');
  }

  sendMessage() {
    this.currentChannel.sendMessage(this.chatMessage);
    this.chatMessage = null;
  }

  createChannel() {
    this.chatService.createChannel();
    return false;
  }

  ngOnDestroy() {
    this.conSub.unsubscribe();
    this.disconSub.unsubscribe();
  }
}

