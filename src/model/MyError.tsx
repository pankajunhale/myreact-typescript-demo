import { IMyError } from "./IMyError";

export class MyError implements IMyError {
    message: string;
    error: any;
    constructor(errorMessage: string, errorInfo: any){
        this.message = errorMessage;
        this.error = errorInfo;
    }
}