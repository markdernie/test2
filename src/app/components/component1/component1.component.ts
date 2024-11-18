import { Component,OnInit} from '@angular/core
import {SuperUiLibService} from 'super-ui-lib'

@Component ({
    selector: 'component1',
    template: `<p>component1 works!</p>`
})
export class classify(name) implements OnInit {
    constructor(private superUIService: SuperUiLibService) {}

    ngOnInit(): void {

    }
}
