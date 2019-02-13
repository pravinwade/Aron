import { Injectable } from '@angular/core';
import { Url } from '../_Modals/url';
import { Http } from '@angular/http';
import { AllActionNames } from '../_Modals/all-action-names';
import { Fixtures } from '../_Modals/Fixtures';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {

  constructor(private http: Http) { }

  InsertFixturesDetails(fixturesModal: Fixtures) {
    return this.http.post(Url.WebApiURL + AllActionNames.FixturesInsertDetails, JSON.stringify(fixturesModal))
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  DeleteFixturesDetails(fixturesModal: Fixtures) {
    return this.http.post(Url.WebApiURL + AllActionNames.FixturesDetailsDelete, JSON.stringify(fixturesModal))
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  GetFixturesDetails() {
    return this.http.get(Url.WebApiURL + AllActionNames.FixturesDetailsGet)
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  InsertCountFixturesDetails(fixturesModal: Fixtures) {
    return this.http.post(Url.WebApiURL + AllActionNames.FixturesInsertCount, JSON.stringify(fixturesModal))
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  UpdateCountFixturesDetails(fixturesModal: Fixtures) {
    return this.http.post(Url.WebApiURL + AllActionNames.FixturesUpdateCount, JSON.stringify(fixturesModal))
      .map(response => {
        let result;
        return result = response.json();
      });
  }

  UpdateFixturesDetails(fixturesModal: Fixtures) {
    return this.http.post(Url.WebApiURL + AllActionNames.FixturesDetailsUpdate, JSON.stringify(fixturesModal))
      .map(response => {
        let result;
        return result = response.json();
      });
  }
}
