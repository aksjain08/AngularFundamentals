import { Component, Input, EventEmitter } from '@angular/core'
import { Output } from '@angular/core';

@Component({
    selector:'event-thumbnail',
    template: `
    <div class = "well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div> Date : {{event?.date}} </div>
        <div [ngStyle]="getStyles()" [ngSwitch]="event?.time"> Time: {{event?.time}}
        <span *ngSwitchCase="'08:00 am'">(Early start)</span>
        <span *ngSwitchCase="'10:00 am'">(Normal Start)</span>
        <span *ngSwitchDefault> (LateStart)</span>
        </div>
        <div> Price : \${{event.price}} </div>
        <div *ngIf="event?.location">
            <span> Location : {{event.location.address}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            <span>OnlineUrL : {{event?.onlineUrl}} </span>
        </div>
    `,
    styles:[
        `
        .green { color:#003300 !important}
        .bold {font-weight:bold;}
        `
    ]
    
})

export class EventThumbNailComponent{
    @Input() event:any;
    @Output() eventClick = new EventEmitter();
//     someProperty:any = "template handle";
//     ClickHandle()
//     {
//         this.eventClick.emit(this.event.name);
//     }
//     logfoo()
// {
//     console.log("foo");
// }

    getStyles():any
    {
        if(this.event && this.event.time === '10:00 am') 
            return {color:'#003300', 'font-weight': 'bold'}
        return {}
    }
}