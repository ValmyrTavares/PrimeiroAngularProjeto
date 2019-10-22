import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})

export class DarkenOnHoverDirevtive {

    constructor(private el: ElementRef,
        private render: Renderer) { }

    @HostListener('mouseon')
    darkOn() {
        console.log("Darken On")
    }

    @HostListener('mouseLeave')
    darkOf() {
        console.log('DarkenOf')
    }

}