import { IPagination } from "./IPagination";

export class Pagination implements IPagination {
    totalPages: number;
    totalResult: number;

    constructor(pageCount: number, totalResutlCount: number) {
        this.totalPages = pageCount;
        this.totalResult = totalResutlCount;
    }
}