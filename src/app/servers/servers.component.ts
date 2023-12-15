import { Component, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[numbersAndDigits]'
})
export class DigitOnlyDirective {
  constructor(public el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    const isControlKey = e.ctrlKey || e.metaKey;

    if (
      isControlKey ||
      e.key === 'Backspace' ||
      e.key === 'Delete' ||
      e.key === 'Tab' ||
      e.key === 'Escape' ||
      e.key === 'Enter' ||
      e.key === 'Home' ||
      e.key === 'End' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      e.key === 'Clear' ||
      (e.key.match(/[a-zA-Z0-9]/) && !e.key.match(/\s/))
    ) {
      // Allow: navigation keys, control keys, and alphanumeric characters without spaces
      return;
    }

    e.preventDefault();
  }

  @HostListener('input', ['$event'])
  onInput(e: InputEvent) {
    const inputElement = e.target as HTMLInputElement;
    const inputValue = inputElement.value;
    
    // Remove spaces and non-alphanumeric characters
    const sanitizedValue = inputValue.replace(/[^\da-zA-Z]/g, '');

    // Update the input value only if it has changed
    if (inputValue !== sanitizedValue) {
      inputElement.value = sanitizedValue;
    }
  }
}


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
    let inputValue = event.target.value.trim();
    if (!alphanumericRegex.test(inputValue)) {
      event.target.value = this.serverName;
      console.log(this.serverName.length);
    } else {
      this.serverName = inputValue;
      console.log(this.serverName.length);
    }
  }
}
