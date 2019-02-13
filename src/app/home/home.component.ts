import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['Home', 'PO']);

    $(".setbtn").click(function () {
      $(".setbtn").addClass('color').removeClass('selectcolor').removeClass('active');
      $(this).addClass('selectcolor').removeClass('color');
    });
  }
}
