import { Component, OnInit } from '@angular/core';
import { Parts } from '../_Modals/parts';
import * as $ from 'jquery';
import { PagerService } from '../_Services/_Pager';
import { PartsService } from '../_Services/parts.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  PartsDetails: any[];
  errorMsg = '';
  partdesc: string;
  _partcost: string;
  _partname: string;
  partno: string;
  partqty: string;
  _partvendor: string;

  // pager
  names = [];
  pager: any = {};
  //pagedItems: any[];

  description = new RegExp('^[a-zA-Z0-9 ]+$');
  decimalamount = new RegExp(/^\d+(?:\.\d\d?)?$/);
  onlynumberamount = new RegExp(/^[0-9-+()]*$/);

  constructor(private partsService: PartsService, private PartsModal: Parts, private pagerService: PagerService) { }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.pagerService.getPager(this.names.length, page);
    this.PartsDetails = this.names.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  loadinventorydata() {
    this.partsService.GetPartsDetails().subscribe(Response => {
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
    this.loadinventorydata();
  }

  partupdate(id, block1, none1) {
    $("#partname_" + id).css("display", block1);
    $("#lblpartname_" + id).css("display", none1);
    $("#partdesc_" + id).css("display", block1);
    $("#lblpartdescription_" + id).css("display", none1);
    $("#partcost_" + id).css("display", block1);
    $("#lblpartcost_" + id).css("display", none1);
    $("#partnumber_" + id).css("display", block1);
    $("#lblpartnumber_" + id).css("display", none1);
    $("#partquantity_" + id).css("display", block1);
    $("#lblpartquantity_" + id).css("display", none1);
    $("#partvendor_" + id).css("display", block1);
    $("#lblpartvendor_" + id).css("display", none1);
    $("#divone_" + id).css("display", none1);
    $("#divtwo_" + id).css("display", block1);
  }

  recordinsert() {
    this.PartsModal.PartName = this._partname;

    this.partsService.InsertCountPartsDetails(this.PartsModal).subscribe(Response => {
      console.log(Response[0][0]);
      if (Response[0][0].count > 0) {
        alert('Inventory already exists..');
      } else {
        this.PartsModal.PartCost = this._partcost;
        this.PartsModal.PartDescription = this.partdesc;
        this.PartsModal.PartNumber = this.partno;
        this.PartsModal.PartQuant = this.partqty;
        this.PartsModal.PartVendor = this._partvendor;

        if (this.PartsModal.PartName === '' || this.PartsModal.PartName === undefined) {
          alert('Enter part name');
        } else if (!this.description.test(this.PartsModal.PartName)) {
          alert('Enter only alpha numeric value ex: abc123');
        } else if (this.PartsModal.PartDescription === '' || this.PartsModal.PartDescription === undefined) {
          alert('Enter part description');
        } else if (!this.description.test(this.PartsModal.PartDescription)) {
          alert('Enter only alpha numeric value ex: abc123');
        } else if (this.PartsModal.PartCost === '' || this.PartsModal.PartCost === undefined) {
          alert('Enter part cost');
        } else if (!this.decimalamount.test(this.PartsModal.PartCost)) {
          alert('Enter decimal for part cost ex: abc123');
        } else if (this.PartsModal.PartNumber === '' || this.PartsModal.PartNumber === undefined) {
          alert('Enter part number');
        } else if (!this.description.test(this.PartsModal.PartNumber)) {
          alert('Enter only alpha numeric value for part number ex: abc123');
        } else if (this.PartsModal.PartQuant === '' || this.PartsModal.PartQuant === undefined) {
          alert('Enter Quantity');
        } else if (!this.onlynumberamount.test(this.PartsModal.PartQuant)) {
          alert('Enter only numbers');
        } else if (this.PartsModal.PartVendor === '' || this.PartsModal.PartVendor === undefined) {
          alert('Enter vender name');
        } else if (!this.description.test(this.PartsModal.PartVendor)) {
          alert('Enter only alpha numeric value for vendor ex: abc123');
        } else {
          this.partsService.InsertPartsDetails(this.PartsModal).subscribe(Response => {
            this.loadinventorydata();
            alert('Parts added successfully..');
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
    },
      error => {
        if (error.status === 0) {
          alert(error + ' Server issue..');
        } else {
          alert(error);
        }
      });
  }

  recordupdate(id, block1, none1) {
    this.PartsModal.PartId = id;
    this.PartsModal.PartName = $("#partname_" + id).val();

    this.partsService.UpdateCountPartsDetails(this.PartsModal).subscribe(Response => {
      if (Response[0][0].count > 0) {
        alert('Inventory already exists..');
      } else {
        this.PartsModal.PartCost = $("#partcost_" + id).val();
        this.PartsModal.PartDescription = $("#partdesc_" + id).val();
        this.PartsModal.PartNumber = $("#partnumber_" + id).val();
        this.PartsModal.PartQuant = $("#partquantity_" + id).val();
        this.PartsModal.PartVendor = $("#partvendor_" + id).val();

        if (this.PartsModal.PartName === '' || this.PartsModal.PartName === undefined) {
          alert('Enter part name');
        } else if (!this.description.test(this.PartsModal.PartName)) {
          alert('Enter only alpha numeric value ex: abc123');
        } else if (this.PartsModal.PartDescription === '' || this.PartsModal.PartDescription === undefined) {
          alert('Enter part description');
        } else if (!this.description.test(this.PartsModal.PartDescription)) {
          alert('Enter only alpha numeric value ex: abc123');
        } else if (this.PartsModal.PartCost === '' || this.PartsModal.PartCost === undefined) {
          alert('Enter part cost');
        } else if (!this.decimalamount.test(this.PartsModal.PartCost)) {
          alert('Enter decimal for part cost ex: abc123');
        } else if (this.PartsModal.PartNumber === '' || this.PartsModal.PartNumber === undefined) {
          alert('Enter part number');
        } else if (!this.description.test(this.PartsModal.PartNumber)) {
          alert('Enter only alpha numeric value for part number ex: abc123');
        } else if (this.PartsModal.PartQuant === '' || this.PartsModal.PartQuant === undefined) {
          alert('Enter Quantity');
        } else if (!this.onlynumberamount.test(this.PartsModal.PartQuant)) {
          alert('Enter only numbers');
        } else if (this.PartsModal.PartVendor === '' || this.PartsModal.PartVendor === undefined) {
          alert('Enter vender name');
        } else if (!this.description.test(this.PartsModal.PartVendor)) {
          alert('Enter only alpha numeric value for vendor ex: abc123');
        } else {
          this.partsService.UpdatePartsDetails(this.PartsModal).subscribe(Response => {
            this.partupdate(id, block1, none1);
            this.loadinventorydata();
            
            alert('Parts updated successfully..');
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
    },
      error => {
        if (error.status === 0) {
          alert(error + ' Server issue..');
        } else {
          alert(error);
        }
      });
  }

  deleterecord(id) {
    this.PartsModal.PartId = id;

    this.partsService.DeletePartsDetails(this.PartsModal).subscribe(Response => {
      alert('Parts deleted successfully..');

      this.loadinventorydata();
    },
      error => {
        if (error.status === 0) {
          alert(error + ' Server issue..');
        } else {
          alert(error);;
        }
      });
  }
}
