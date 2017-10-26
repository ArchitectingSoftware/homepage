import { Component, OnInit } from '@angular/core';

import {PublicationsList}  from '../../assets/db/publications';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  publicationsList = PublicationsList;
  showAbstract = false;
  showAbstractArray : boolean[]

  constructor() { }

  ngOnInit() {
    this.showAbstractArray = new Array(this.publicationsList.length)
    for (let i in this.showAbstractArray){
      this.showAbstractArray[i] = false;
    }

    console.log('size',this.showAbstractArray)
  }

  toggleVisibility($event,idx:number){
    event.preventDefault()
    console.log(idx)
    this.showAbstract = !this.showAbstract
    this.showAbstractArray[idx] = !this.showAbstractArray[idx]
  }

}
