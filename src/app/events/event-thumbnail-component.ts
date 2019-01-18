import { Component, Input, EventEmitter } from '@angular/core'
import { Output } from '@angular/core';

@Component({
    selector:'event-thumbnail',
    template: `
    <div class = "well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div> Date : {{event?.date}} </div>
        <div> Time: {{event?.time}}</div>
        <div> Price : \${{event.price}} </div>
        <div *ngIf="event?.location">
            <span> Location : {{event.location.address}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            <span>OnlineUrL : {{event?.onlineUrl}} </span>
        </div>
    
    `
    
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
}