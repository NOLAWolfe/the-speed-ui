import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Event } from 'src/app/shared/model/event';
import { SpeedObject } from 'src/app/shared/model/speedObject';
import { HttpService } from 'src/app/shared/service/http.service';
import {Renderer2 } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  backEndValues: Array<SpeedObject> = [];
  backEndValuesCopy: Array<SpeedObject> = [];
  cardArray: Array<SpeedObject> = [];
  eventsIndex: number = 0;
  primaryFilter:string = "lastActivity"
  //--search bar variables
  

  pushFromEager(data):SpeedObject{
    let dat = new SpeedObject();
        dat.description = data.description
        dat.lastActivity = data.lastActivity;
        dat.timeDateStamp = data.lastActivity;
        dat.type = data.type;
        dat.object = data.object;
        return dat
  }
  constructor(@Inject(DOCUMENT) private document: Document, private service: HttpService, private renderer: Renderer2 ) {

    this.service.loadInitial().subscribe(data => {

      for (let i = 0; i < data.length; i++) {
        
        this.backEndValues.push(this.pushFromEager(data[i]));

      }
      for (let i = 0; this.eventsIndex < 4; this.eventsIndex++) {
        if (this.backEndValues[this.eventsIndex].type == "event") {

          this.cardArray.push(this.backEndValues[this.eventsIndex]);
        }

      }
      this.backEndValues.forEach( data=> {

        this.backEndValuesCopy.push(this.pushFromEager(data))
      });

    });
    this.sortByLastActivity(); 
    
  }
 

  sortByDates(){
    let selec:HTMLSelectElement= document.getElementById("sorter") as HTMLSelectElement; 
    let opts:HTMLCollectionOf<HTMLOptionElement> = selec.options
    if(opts[selec.selectedIndex].value == "dateCreated"){
      this.sortByDateCreated()
    }else {
      this.sortByLastActivity()
    }
  }
  filterPostsEvents(){
   let selec:HTMLSelectElement= document.getElementById("filter") as HTMLSelectElement; 
   let opts:HTMLCollectionOf<HTMLOptionElement> = selec.options
  // console.log(opts)
   this.cardArray=this.backEndValues
   if( opts[selec.selectedIndex].value == "posts"){
      for(let k =0 ; k< this.cardArray.length; k++){
          if(this.cardArray[k].type == "event"){
         //   console.log("splicing")
            this.cardArray.splice(k,1);
            
            
          }
      }
   } else if( opts[selec.selectedIndex].value == "events"){
    for(let k =0 ; k< this.cardArray.length; k++){
        if(this.cardArray[k].type == "post"){
         // console.log("splicing")
         
          this.cardArray.splice(k,1);
          
        }
      }
   }else {
    for (let i = 0; i < this.eventsIndex; i++) {

        this.cardArray.push(this.pushFromEager(this.backEndValues[i]));
    }
   }
   this.eventsIndex == this.cardArray.length-1
   this.resort();
  }
  resort(){
    if(this.primaryFilter == "lastActivity"){
      this.sortByLastActivity()
    }else{
      this.sortByDateCreated()
    }
  }

  ngAfterViewInit(){


  }
  doTheWork(i:number):number{
    if(document.getElementById(i+"-modal") == null ){
    let modList = document.getElementById("modal-list");
    let copy: SpeedObject[] = this.backEndValues; 
 console.log(modList)
      modList.innerHTML =  modList.innerHTML.toString() +`<div id="${i}-modal" class="modal fade" role="dialog">
     <div class="modal-dialog">
   
       <div class="modal-content">
         <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal">&times;</button>
           <h4 class="modal-title">${copy[i].type}</h4>
         </div>
         <div class="modal-body">
           <p>${copy[i].description}</p>
           
         </div>
         <div class="modal-footer">
         <button class="btn btn-primary">Go to Full Event </button>  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
         </div>
       </div>
   
     </div>
     </div>`;     
    }
   return i
  }

  sortByDateCreated(){
    this.cardArray.sort((a,b) => this.dateCreatedCompare(a, b))
    this.primaryFilter = "dateCreated"
  }
  dateCreatedCompare(a:SpeedObject, b:SpeedObject) : number{
    let rtrn:number = 0
      let dateA:Date = new Date()
      let dateB:Date = new Date()
      dateA.setUTCFullYear(parseInt(a.timeDateStamp.substring(0, 4)),parseInt(a.timeDateStamp.substring(5, 7))
      , parseInt(a.lastActivity.substring(8, 10) ) );

      let time:string[] = a.timeDateStamp.substring(11).split(":")
      dateA.setHours(parseInt(time[0]), parseInt(time[1]),parseInt(time[2]) )
      dateB.setUTCFullYear(parseInt(b.timeDateStamp.substring(0, 4)),parseInt(b.timeDateStamp.substring(5, 7))
      , parseInt(b.timeDateStamp.substring(8, 10) ) );
      let timeb:string[] = b.timeDateStamp.substring(11).split(":")
      dateA.setHours(parseInt(timeb[0]), parseInt(timeb[1]),parseInt(timeb[2]) );
      
      rtrn = (dateA.getUTCFullYear() === dateB.getUTCFullYear() )? 0 : (dateA.getUTCFullYear() < dateB.getUTCFullYear()? 1:-1);
     // console.log("A: "+dateA.getUTCFullYear() +" B: "+dateB.getUTCFullYear()+ " = "+rtrn);
     // console.log("A: "+dateA.toTimeString() +" B: "+dateB.toTimeString()+ " = "+rtrn);
    
      return rtrn; 
  }
  sortByLastActivity(){
    this.cardArray.sort((a,b) => this.lastActvityCompare(a, b))
    this.primaryFilter = "lastActivity"
  }
  lastActvityCompare(a:SpeedObject, b:SpeedObject) : number{
    let rtrn:number = 0
  
      let dateA:Date = new Date()
      let dateB:Date = new Date()
      dateA.setUTCFullYear(parseInt(a.lastActivity.substring(0, 4)),parseInt(a.lastActivity.substring(5, 7))
      , parseInt(a.lastActivity.substring(8, 10) ) );

      let time:string[] = a.lastActivity.substring(11).split(":")
      dateA.setHours(parseInt(time[0]), parseInt(time[1]),parseInt(time[2]) )
      dateB.setUTCFullYear(parseInt(b.lastActivity.substring(0, 4)),parseInt(b.lastActivity.substring(5, 7))
      , parseInt(b.lastActivity.substring(8, 10) ) );
      let timeb:string[] = b.lastActivity.substring(11).split(":")
      dateA.setHours(parseInt(timeb[0]), parseInt(timeb[1]),parseInt(timeb[2]) );
      console.log("date stuff")
      rtrn = (dateA.getUTCFullYear() === dateB.getUTCFullYear() )? 0 : (dateA.getUTCFullYear() < dateB.getUTCFullYear()? 1:-1);
     
    
      return rtrn; 
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    //                                                                       -v- this will need to be incremented if we add more elements with this class, potentially
    this.setTheTable(false)
  }
  
  mouseOver(type: string, i:number, created:number){
    if(created == -1){
      document.getElementById(type+"-"+i).className = "animated fadeIn";
      document.getElementById(type+"-"+i).style.visibility = "visible"
    }else {
      document.getElementById(i+"-"+type+"-"+i).className = "animated fadeIn";
      document.getElementById(i+"-"+type+"-"+i).style.visibility = "visible"
    }
  }
  mouseLeave(type: string, i:number, created:number){
    if(created == -1){
      document.getElementById(type+"-"+i).className = "animatedOut fadeOut";
      //document.getElementById(type+"-"+i).style.visibility = "invisible"
    }else{
      document.getElementById(i+"-"+type+"-"+i).className = "animatedOut fadeOut";
      document.getElementById(i+"-"+type+"-"+i).style.visibility = "invisible"
    }
  }
  onKeyDownEvent(event: any){
    this.setTheTable(true)

  }
  
  setTheTablePass(i:number):boolean{
    this.setTheTable(true)
    return (i <= 3) ? false :  true ; 
  }

  setTheTable(pass: boolean){
    let test: HTMLElement = document.getElementsByClassName("mat-grid-tile")[1] as HTMLElement
    test.style.overflow = "unset";
    
    this.eventsIndex = this.cardArray.length-1;
    //console.log("bottom: "+bottom +" vs "+ Math.round(this.document.documentElement.scrollTop) )
  //  console.log("index is: "+this.eventsIndex , " backend "+  this.backEndValues.length)
    let bottom: number = this.document.documentElement.scrollHeight - this.document.documentElement.clientHeight
 /*   console.log(Math.round(bottom)+1 == Math.round(this.document.documentElement.scrollTop))
    console.log(Math.round(bottom)+1)
    console.log(Math.round(this.document.documentElement.scrollTop) ) */
    if ( (Math.round(bottom)+1 ==Math.round(this.document.documentElement.scrollTop)|| Math.round(bottom)==Math.round(this.document.documentElement.scrollTop) ) && this.eventsIndex < this.backEndValues.length) {
    //  console.log("inside scroll")
      let dat:SpeedObject = new SpeedObject();
        dat.description = this.backEndValues[this.eventsIndex].description
        dat.lastActivity = this.backEndValues[this.eventsIndex].lastActivity;
        dat.timeDateStamp = this.backEndValues[this.eventsIndex].lastActivity;
        dat.type =  this.backEndValues[this.eventsIndex].type;
        dat.object = this.backEndValues[this.eventsIndex].object;
      this.cardArray.push(dat);
      this.eventsIndex++;
      //this.sortByLastActivity(); 
      this.backEndValues = [] 
    this.backEndValues = this.backEndValuesCopy
    }
  }



  ngOnInit() {
  }

}
