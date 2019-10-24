import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})

export class DarkenOnHoverDirevtive {

    constructor(private el: ElementRef,
        private render: Renderer
    ) { }

    @HostListener('mouseover')
    darkOn() {
        this.el.nativeElement,
            this.render.setElementStyle(this.el.nativeElement, 'filter', "brightness(70%)");
    }

    @HostListener('mouseleave')
    darkOf() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', "brightness(100%)");
    }

}