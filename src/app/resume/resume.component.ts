import { Component, OnInit } from '@angular/core';
import {BrowserModule, DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {
  pdfSrc: string = '../assets/JoseCuchillaResume.pdf';
  page: number = 1;
  pageurl: SafeResourceUrl;

  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit() {
    this.pageurl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
  }

}
