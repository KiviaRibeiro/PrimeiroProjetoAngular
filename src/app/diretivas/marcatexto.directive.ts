import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Directive({
  selector: '[appMarcatexto]'
})
export class MarcatextoDirective implements OnInit {

  @Input() cordeFundo: string = 'yellow'; 
  @Input() cordeTexto: string = 'blue'; 

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    this.mudarFundo()
    
  }
  private mudarFundo(cor: string = 'yellow'){
    this.elemento.nativeElement.style.backgroundColor = this.cordeFundo || cor;
    this.elemento.nativeElement.style.color = this.cordeTexto;
    this.elemento.nativeElement.style.fontWeight = 'bold';
  }

}


