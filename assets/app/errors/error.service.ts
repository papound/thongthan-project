import { EventEmitter } from "@angular/core";

import { Error } from "./error.model";

export class ErrorService {
    errorOccurred = new EventEmitter<Error>();

    handleError(error: any) {

        var errorData = null;

        if (error.error) {
            errorData = new Error(error.title, error.error.message);
        } else {
            errorData = new Error(error.title, error.message);
        }

        this.errorOccurred.emit(errorData);
    }
}