export class SpeedObject {
    timeDateStamp: string; 
    lastActivity: string; 
    object: any; 
    type: string; 
    description: string; 

    /*constructor(object: string){
        let parsable= JSON.parse(object);
        this.timeDateStamp = parsable.timeDateStamp;
        this.lastActivity = parsable.lastActivity;
        this.object = parsable.object; 
        this.type = parsable.type;
        this.description = parsable.description; 
    }*/
}