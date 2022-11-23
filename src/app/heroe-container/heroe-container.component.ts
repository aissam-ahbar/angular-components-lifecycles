import { Component } from '@angular/core';

import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'heroe-container',
  templateUrl: './heroe-container.component.html',
  providers:  [ LoggerService ]
})
export class HeroeContainerComponent {

  hasChild = false;
  hookLog: string[] = [];

  heroName = 'Aissam';
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Aissam';
      this.logger.clear(); // clear log on create
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

}
