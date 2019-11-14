import { Injectable, EventEmitter } from '@angular/core';
import * as Twilio from 'twilio-chat';
import Client from 'twilio-chat';
import {Channel} from "twilio-chat/lib/channel";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chatClient: Client;
  public currentChannel: Channel;
  public chatConnectedEmitter: EventEmitter<any> = new EventEmitter<any>()
  public chatDisconnectedEmitter: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }
  
  getToken(username) {
    return this.http.get(`api/twilio/${username}`);
  }
  connect(token) {
    
    return Twilio.Client.create(token).then((client: Client) => {
      this.chatClient = client;
      console.log(this.chatClient);
      this.chatConnectedEmitter.emit(true);
    }).catch( (err: any) => {
      console.log(err);
      this.chatDisconnectedEmitter.emit(true);
    });      
  }
  getPublicChannels() {
    return this.chatClient.getPublicChannelDescriptors();
  }

  getChannel(sid: string): Promise<Channel> {
    return this.chatClient.getChannelBySid(sid);
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  
  createChannel() {
    return this.chatClient.getChannelByUniqueName('general').then((channel) => {
      this.currentChannel = channel;
      console.log("Found general channel:");
      console.log(this.currentChannel);

    }).catch(() => {
      this.chatClient.createChannel({
        uniqueName: "general",
        friendlyName: "General Chat Channel"
      }).then((channel) => {
        this.currentChannel = channel;
        console.log("create general channel:");
        console.log(this.currentChannel);
      });
    })
    
  }
  
}
