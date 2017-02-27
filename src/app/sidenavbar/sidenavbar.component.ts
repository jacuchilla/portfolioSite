import { Component, OnInit, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  @ViewChildren('sidebar') sideNavBar;

  onResize(event) {
    // console.log(event.target.innerWidth === 703)
    // console.log(this.elRef.nativeElement.querySelector('#sidenavbar'))
    if (event.target.innerWidth <= 703) {
      // console.log(this.sideNavBar._results[0]._opened)
      // console.log(this.sideNavBar._results[0])
      // console.log(this.sideNavBar._results[0].mode)

      this.sideNavBar._results[0]._opened = false;
      this.sideNavBar._results[0].mode = "over";
      // this.elRef.nativeElement.querySelector('#sidenavbar')
      // console.log(this.elRef.nativeElement.querySelector('#sidenavbar'))
      // console.log(this.elRef.nativeElement.querySelector('#sidenavbar'))
      // console.log(this.elRef.nativeElement.getAttribute('sidebar'))
    } 
    else {
      this.sideNavBar._results[0].mode = "side";
    }
  }

  detectMobile (size) {
    if (size < 703) {
      // console.log(this.sideNavBar._results[0]._opened)
      this.sideNavBar._results[0]._opened = false;
      this.sideNavBar._results[0].mode = "over";
    }
    else {
      console.log('everything cool', size)
    }
  } 

  constructor(private elRef:ElementRef) { }

  ngOnInit() {
    // console.log('Platform detection ', navigator)

  }

  ngAfterViewInit() {
    window.setTimeout( () => this.detectMobile(window.innerWidth), 1)
    
  }



}
