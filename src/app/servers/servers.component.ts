import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',
  // selector:'[app-servers]',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>

  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'test';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {}

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    const alphanumericRegex: RegExp = /^[a-zA-Z0-9]+$/;
    let inputValue = event.target.value;
    if (!alphanumericRegex.test(inputValue)) {
      event.target.value = this.serverName;
      console.log(this.serverName.length);
    } else {
      this.serverName = inputValue;
      console.log(this.serverName.length);
    }
  }
}
