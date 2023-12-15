import { Component, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[numbersAndDigits]'
})
export class DigitOnlyDirective {
  private navigationKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'Clear',
    'Copy',
    'Paste'
  ];

  inputElement: HTMLInputElement;

  constructor(public el: ElementRef) {
    this.inputElement = el.nativeElement;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (
      this.navigationKeys.indexOf(e.key) > -1 || // Permite: teclas de navegación: retroceso, suprimir, flechas, etc.
      (e.key === 'a' && e.ctrlKey === true) || // Permite: Ctrl+A
      (e.key === 'c' && e.ctrlKey === true) || // Permite: Ctrl+C
      (e.key === 'v' && e.ctrlKey === true) || // Permite: Ctrl+V
      (e.key === 'x' && e.ctrlKey === true) || // Permite: Ctrl+X
      (e.key === 'a' && e.metaKey === true) || // Permite: Cmd+A (Mac)
      (e.key === 'c' && e.metaKey === true) || // Permite: Cmd+C (Mac)
      (e.key === 'v' && e.metaKey === true) || // Permite: Cmd+V (Mac)
      (e.key === 'x' && e.metaKey === true) || // Permite: Cmd+X (Mac)
      (e.key.match(/[a-zA-Z0-9]/)) // Permite: letras y números
    ) {
      // Deja que suceda, no hagas nada
      return;
    }
    // Asegura que sea un número y detiene la pulsación de tecla
    e.preventDefault();
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
