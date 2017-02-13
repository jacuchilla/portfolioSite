import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {
  pdfSrc: string = '../assets/JoseCuchillaResume.pdf';
  page: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
