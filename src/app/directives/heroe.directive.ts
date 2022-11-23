import { Directive, OnInit } from '@angular/core';

import { LoggerService } from '../services/logger.service';

let nextId = 1;

/**
 * Logger
 */
@Directive({selector: '[appHeroe]'})
export class HeroeDirective implements OnInit {
  constructor(private logger: LoggerService) { }

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    this.logIt('OnInit');
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}
