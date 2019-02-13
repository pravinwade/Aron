import { Component, OnInit } from '@angular/core';
import { FixturesService } from '../_Services/fixtures.service';
import { Fixtures } from '../_Modals/Fixtures';
import * as $ from 'jquery';
import { PagerService } from '../_Services/_Pager';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {
  errorMsg: String;
  FixturesDetails: any[];
  _fixturename: string;
  _fixturescost: string;
  _fixturespn: string;

  // pager
  names = [];
  pager: any = {};

  name = new RegExp('^[a-zA-Z0-9 -]+$');
  cost = new RegExp(/^\d+(?:\.\d\d?)?$/);

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.pagerService.getPager(this.names.length, page);
    this.FixturesDetails = this.names.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  constructor(private fixturesService: FixturesService, private FixturesModal: Fixtures, private pagerService: PagerService) { }

  loadfixturesdata() {
    this.fixturesService.GetFixturesDetails().subscribe(Response => {
      this.names = Response[0];
      this.setPage(1);
    },
      error => {
        if (error.status === 0) {
          alert(error + ' Server issue..');
        } else {
          alert(error);
        }
      });
  }

  ngOnInit() {
    this.loadfixturesdata();
  }

  fixturesupdate(id, block1, none1) {
    $("#fixturename_" + id).css("display", block1);
    $("#lblfixturename_" + id).css("display", none1);
    $("#fixturescost_" + id).css("display", block1);
    $("#lblfixturescost_" + id).css("display", none1);
    $("#fixturespn_" + id).css("display", block1);
    $("#lblfixturespn_" + id).css("display", none1);
    $("#divone_" + id).css("display", none1);
    $("#divtwo_" + id).css("display", block1);
  }

  deleterecord(id) {
    this.FixturesModal.FixtureId = id;

    this.fixturesService.DeleteFixturesDetails(this.FixturesModal).subscribe(Response => {
      console.log(this.FixturesModal);
      alert('Fixture deleted successfully..');

      this.loadfixturesdata();
    },
      error => {
        if (error.status === 0) {
          alert(error + ' Server issue..');
        } else {
          alert(error);
        }
      });
  }

  insertfixturedetails() {
    this.FixturesModal.FixtureName = $("#fixturename").val();
    this.FixturesModal.FixtureCost = $("#fixturescost").val();
    this.FixturesModal.FixturePn = $("#fixturespn").val();

    if (this.FixturesModal.FixtureName === undefined || this.FixturesModal.FixtureName === '') {
      alert('Enter name');
    } else if (!this.name.test(this.FixturesModal.FixtureName)) {
      alert('Enter only alphabates for name');
    } else if (this.FixturesModal.FixtureCost === undefined || this.FixturesModal.FixtureCost === '' || this.FixturesModal.FixtureCost === '0') {
      alert('Enter cost');
    } else if (!this.cost.test(this.FixturesModal.FixtureCost)) {
      alert('Enter decimal for cost');
    } else if (this.FixturesModal.FixturePn === undefined || this.FixturesModal.FixturePn === '') {
      alert('Enter PN');
    } else if (!this.name.test(this.FixturesModal.FixturePn)) {
      alert('Enter only alphabates for fn');
    } else {
      this.fixturesService.InsertCountFixturesDetails(this.FixturesModal).subscribe(Response => {
        if (Response[0][0].count > 0) {
          alert('Fixture already exist..');
        } else {
          this.fixturesService.InsertFixturesDetails(this.FixturesModal).subscribe(Response => {
            console.log(this.FixturesModal);
            alert('Fixture added successfully..');

            this.loadfixturesdata();
          },
            error => {
              if (error.status === 0) {
                alert(error + ' Server issue..');
              } else {
                alert(error);
              }
            });
        }

        this.loadfixturesdata();
      },
        error => {
          if (error.status === 0) {
            alert(error + ' Server issue..');
          } else {
            alert(error);
          }
        });
    }
  }

  recordupdate(id, block1, none1) {
    this.FixturesModal.FixtureId = id;
    this.FixturesModal.FixtureCost = $("#fixturescost_" + id).val();
    this.FixturesModal.FixtureName = $("#fixturename_" + id).val();
    this.FixturesModal.FixturePn = $("#fixturespn_" + id).val();

    if (this.FixturesModal.FixtureName === undefined || this.FixturesModal.FixtureName === '') {
      alert('Enter name');
    } else if (!this.name.test(this.FixturesModal.FixtureName)) {
      alert('Enter only alphabates for name');
    } else if (this.FixturesModal.FixtureCost === undefined || this.FixturesModal.FixtureCost === '' || this.FixturesModal.FixtureCost === '0') {
      alert('Enter cost');
    } else if (!this.cost.test(this.FixturesModal.FixtureCost)) {
      alert('Enter decimal for cost');
    } else if (this.FixturesModal.FixturePn === undefined || this.FixturesModal.FixturePn === '') {
      alert('Enter PN');
    } else if (!this.name.test(this.FixturesModal.FixturePn)) {
      alert('Enter only alphabates for fn');
    } else {
      this.fixturesService.UpdateCountFixturesDetails(this.FixturesModal).subscribe(Response => {
        if (Response[0][0].count > 0) {
          alert('Purchase order already exist..');
        } else {
          this.fixturesService.UpdateFixturesDetails(this.FixturesModal).subscribe(Response => {
            console.log(this.FixturesModal);
            alert('Purchase order updated..');

            this.loadfixturesdata();
            this.fixturesupdate(id, block1, none1);
          },
            error => {
              if (error.status === 0) {
                alert(error + ' Server issue..');
              } else {
                alert(error);
              }
            });
        }
      },
        error => {
          if (error.status === 0) {
            alert(error + ' Server issue..');
          } else {
            alert(error);
          }
        });
    }
  }
}
