import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageListService {

  public messages: string[] = [];

  /**
   * addMsg
   */
  public addMsg(mess: string) {
    this.messages.push(mess);
  }

  /**
   * clrMsg
   */
  public clrMsg() {
    this.messages=[];
  }

  constructor() { }
}
