import { Component, OnInit } from '@angular/core';
import { POService } from '../_Services/po.service';
import { PO } from '../_Modals/PO';
import * as $ from 'jquery';
import { PagerService } from '../_Services/_Pager';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  errorMsg: String;
  PODetails: any[];
  POItemIdWithDetails;
  PartIdWithDetails;
  pono: String;
  _pocost: String;
  _poprice: String;
  porecdt: Date;
  poestshipdt: Date;
  poactshipdt: Date;

  // pager
  names = [];
  pager: any = {};

  ponumber = new RegExp('^[a-zA-Z0-9]+$');
  amount = new RegExp(/^\d+(?:\.\d\d?)?$/);

  constructor(private pOService: POService, private PoModal: PO, private pagerService: PagerService) { }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.pagerService.getPager(this.names.length, page);
    this.PODetails = this.names.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  loadpodata() {
    this.pOService.GetPODetails().subscribe(Response => {
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
    this.loadpodata();

    this.pOService.GetPOItemIdAndFixtureDetails().subscribe(Response => {
      this.POItemIdWithDetails = Response[0];
    },
      error => {
        if (error.status === 0) {
          alert(error + ' Server issue..');
        } else {
          alert(error);
        }
      });

    this.pOService.GetPartsWithPOPartId().subscribe(Response => {
      this.PartIdWithDetails = Response[0];
    },
      error => {
        if (error.status === 0) {
          alert(error + ' Server issue..');
        } else {
          alert(error);
        }
      });
  }

  poinsert() {
    let itemsId = $("#ddlFixtureId").val();
    let PartsId = $("#ddlPartId").val();
    this.PoModal.POCost = $("#pocost").val();
    this.PoModal.POEstShipDate = this.poestshipdt;
    this.PoModal.PONumber = $("#ponumber").val();
    this.PoModal.POPrice = $("#poprice").val();
    this.PoModal.PORecDate = this.porecdt;
    this.PoModal.POPartsId = PartsId;
    this.PoModal.POItemsId = itemsId;

    if (itemsId === '0') {
      alert('Select Fixture Name');
    } else if (PartsId === '0') {
      alert('Select Part Name');
    } else if (this.PoModal.PONumber === '' || this.PoModal.PONumber === '0') {
      alert('Enter PO Number');
    } else if(!this.ponumber.test(this.PoModal.PONumber)) {
      alert('Enter only alphabates ex: abc123');
    } else if (this.PoModal.POCost === '' || this.PoModal.POCost === '0') {
      alert('Enter cost');
    } else if(!this.amount.test(this.PoModal.POCost)) {
      alert('Enter only decimal values ex: 8.12');
    } else if (this.PoModal.POPrice === '' || this.PoModal.POPrice === '0') {
      alert('Enter price');
    } else if(!this.amount.test(this.PoModal.POPrice)) {
      alert('Enter only decimal values ex: 8.12');
    } else if (this.PoModal.PORecDate === undefined) {
      alert('Select REC date');
    } else if (this.PoModal.POEstShipDate === undefined) {
      alert('Select EST Ship date');
    } else {
      this.pOService.InsertPODetails(this.PoModal).subscribe(Response => {
        this.loadpodata();

        alert('Purchase order updated successfully..');
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

  poupdate(id, block1, none1) {
    $("#ponumber_" + id).css("display", block1);
    $("#lblponumber_" + id).css("display", none1);
    $("#pocost_" + id).css("display", block1);
    $("#lblpocost_" + id).css("display", none1);
    $("#poprice_" + id).css("display", block1);
    $("#lblpoprice_" + id).css("display", none1);
    $("#porecdt_" + id).css("display", block1);
    $("#lblporecdt_" + id).css("display", none1);
    $("#poestdt_" + id).css("display", block1);
    $("#lblpoestdt_" + id).css("display", none1);
    // $("#poactdt_" + id).css("display", block1);
    // $("#lblpoactdt_" + id).css("display", none1);
    $("#divone_" + id).css("display", none1);
    $("#divtwo_" + id).css("display", block1);
  }

  recordupdate(id, PONo, block1, none1) {
    this.PoModal.PONumber = PONo;
    this.PoModal.PurchaseOrderId = id;

    this.pOService.UpdateCountPODetails(this.PoModal).subscribe(Response => {
      if (Response[0][0].count > 0) {
        alert('Purchase order already exists..');
      } else {
        this.PoModal.POCost = $("#pocost_" + id).val();
        this.PoModal.POEstShipDate = $("#poestdt_" + id).val();
        this.PoModal.PONumber = $("#ponumber_" + id).val();
        this.PoModal.POPrice = $("#poprice_" + id).val();
        this.PoModal.PORecDate = $("#porecdt_" + id).val();
        this.PoModal.PurchaseOrderId = id;

        if (this.PoModal.PONumber === '' || this.PoModal.PONumber === '0') {
          alert('Enter PO Number');
        } else if (!this.ponumber.test(this.PoModal.PONumber)) {
          alert('Enter only alphabates ex: abc123');
        } else if (this.PoModal.POCost === '' || this.PoModal.POCost === '0') {
          alert('Enter cost');
        } else if (!this.amount.test(this.PoModal.POCost)) {
          alert('Enter only decimal values ex: 8.12');
        } else if (this.PoModal.POPrice === '' || this.PoModal.POPrice === '0') {
          alert('Enter price');
        } else if (!this.amount.test(this.PoModal.POPrice)) {
          alert('Enter only decimal values ex: 8.12');
        } else if ($("#porecdt_" + id).val() === '') {
          alert('Select REC date');
        } else if ($("#poestdt_" + id).val() === '') {
          alert('Select EST Ship date');
        } else {
          this.pOService.UpdatePODetails(this.PoModal).subscribe(Response => {
            this.poupdate(id, block1, none1);
            this.loadpodata();
  
            alert('Purchase order updated successfully..');
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
    this.PoModal.PurchaseOrderId = id;

    this.pOService.DeletePODetails(this.PoModal).subscribe(Response => {
      alert('Purchase order deleted..');

      this.loadpodata();
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
