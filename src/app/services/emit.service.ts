import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitService {

  constructor() { }
  public getImageSource: BehaviorSubject<string> = new BehaviorSubject('');

  public getImageData() {
    return this.getImageSource.asObservable();
  }
}
