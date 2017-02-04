import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';

import 'style-loader!./baPageTop.scss';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private _state:GlobalState) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      console.error("3 RECIBIO evento en SUBSCRIPCION (menu.isCollapsed) this.isMenuCollapsed="+this.isMenuCollapsed+"");
      console.error("4 RECIBIO evento en SUBSCRIPCION (menu.isCollapsed) isCollapsed="+isCollapsed+"");
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    console.error("5 EMITIENDO NOTIFICACION de datos NUEVOS para subscripcion (menu.isCollapsed) this.isMenuCollapsed="+this.isMenuCollapsed+"");
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
