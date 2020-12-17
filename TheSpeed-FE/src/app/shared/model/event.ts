import { SpeedObject } from "./speedObject";
import { User } from "./user";

export class Event  {
    eventName: string;
    scheduledTime: string; 
    place: string;
    rsvpd: User[];
    maybe: User[];
    constructor(object: string){
        let parsable= JSON.parse(object);
        this.eventName = parsable.eventName;
        this.scheduledTime = parsable.scheduledTime;
        this.place = parsable.place; 
        this.rsvpd = parsable.rsvpd;
        this.maybe = parsable.maybe; 
    }
}