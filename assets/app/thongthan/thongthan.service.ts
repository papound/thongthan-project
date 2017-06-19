import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Branch } from "./branch.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class ThongthanService {
    private branches: Branch[] = [];

    constructor(private http: Http, private errorService: ErrorService) {
    }

    getBranches() {
        return this.http.get('http://localhost:3000/thongthan')
            .map((response: Response) => {
                const branches = response.json().obj;
                let transformedBranches: Branch[] = [];
                for (let branch of branches) {
                    transformedBranches.push(new Branch(
                        branch.Name,
                        branch.Price,
                        branch.Unit)
                    );
                }
                this.branches = transformedBranches;
                return transformedBranches;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}