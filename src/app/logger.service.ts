import { Injectable } from '@angular/core';

// with the optional option, there is no need to provide injectable in specific service
export class LoggerService {

  constructor() { }

  log(msg: string){
    console.warn(msg)
  }
}
