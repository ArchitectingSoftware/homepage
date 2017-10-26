import { Component, OnInit } from '@angular/core';

import {CourseList}  from '../../assets/db/course';

interface Course{
  Title: string;
  Description: string;
  ImageURL: string
}

type CourseType = {Title: string, Description: string, ImageURL: string}



@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {

  /*
  courseList: CourseType[] = [
    { Title: 'CS575: Software Design', Description: 'foo', ImageURL: '/assets/soft-design-icon.png'},
    { Title: 'CS680: Foundations of CS', Description: 'foo', ImageURL: '/assets/big-o-n.png' },
    { Title: 'CS720: Operating Systems', Description: 'foo', ImageURL: '/assets/os-3.png'},
    { Title: 'CS721: Distributed Systems', Description: 'foo', ImageURL: '/assets/dist-sys.png' },
    { Title: 'CS281/2: Systems Architecture I/II', Description: 'foo', ImageURL: '/assets/cpu-small.png' },
    { Title: 'CS451: Software Engineering', Description: 'foo', ImageURL: '/assets/se-small.png' },
    { Title: 'CS350: Object Oriented Programming', Description: 'foo', ImageURL: '/assets/oop-2.png' }
  ];
  */
  courseList = CourseList;

  constructor() { }

  ngOnInit() {
  }

}
