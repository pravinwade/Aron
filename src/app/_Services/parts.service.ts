import { Injectable } from '@angular/core';
import { AllActionNames } from '../_Modals/all-action-names';
import { Url } from '../_Modals/url';
import { Http } from '@angular/http';
import { Parts } from '../_Modals/parts';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor(private http: Http) { }

  InsertPartsDetails(partsModel: Parts) {
    return this.http.post(Url.WebApiURL + AllActionNames.PartsInsertDetails, JSON.stringify(partsModel))
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  DeletePartsDetails(partsModel: Parts) {
    return this.http.post(Url.WebApiURL + AllActionNames.PartsDetailsDelete, JSON.stringify(partsModel))
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  GetPartsDetails() {
    return this.http.get(Url.WebApiURL + AllActionNames.PartsDetailsGet)
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  InsertCountPartsDetails(partsModel: Parts) {
    return this.http.post(Url.WebApiURL + AllActionNames.PartsInsertCount, JSON.stringify(partsModel))
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  UpdateCountPartsDetails(partsModel: Parts) {
    return this.http.post(Url.WebApiURL + AllActionNames.PartsUpdateCount, JSON.stringify(partsModel))
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  UpdatePartsDetails(partsModel: Parts) {
    return this.http.post(Url.WebApiURL + AllActionNames.PartsDetailsUpdate, JSON.stringify(partsModel))
      .map(response => {
        let result;
        return result = response.json();
      });
  }
}
