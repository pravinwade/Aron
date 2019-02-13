import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Url } from '../_Modals/url';
import { AllActionNames } from '../_Modals/all-action-names';
import { PO } from '../_Modals/PO';

@Injectable({
  providedIn: 'root'
})
export class POService {

  constructor(private http: Http) { }

  InsertPODetails(POModal: PO) {
    return this.http.post(Url.WebApiURL + AllActionNames.PurchaseOrderInsertDetails, JSON.stringify(POModal))
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  DeletePODetails(POModal: PO) {
    return this.http.post(Url.WebApiURL + AllActionNames.PurchaseOrderDetailsDelete, JSON.stringify(POModal))
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  GetPODetails() {
    return this.http.get(Url.WebApiURL + AllActionNames.PurchaseOrderDetailsGet)
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  InsertCountPODetails(POModal: PO) {
    return this.http.post(Url.WebApiURL + AllActionNames.PurchaseOrderInsertCount, JSON.stringify(POModal))
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  UpdateCountPODetails(POModal: PO) {
    return this.http.post(Url.WebApiURL + AllActionNames.PurchaseOrderUpdateCount, JSON.stringify(POModal))
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  UpdatePODetails(POModal: PO) {
    return this.http.post(Url.WebApiURL + AllActionNames.PurchaseOrderDetailsUpdate, JSON.stringify(POModal))
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  GetPOItemIdAndFixtureDetails() {
    return this.http.get(Url.WebApiURL + AllActionNames.PurchaseOrderItemIdAndFixtureDetails)
    .map(response => {
      let result;
      return result = response.json();
    });
  }

  GetPartsWithPOPartId() {
    return this.http.get(Url.WebApiURL + AllActionNames.PurchaseOrderPartsWithPartId)
    .map(response => {
      let result;
      return result = response.json();
    });
  }
}
