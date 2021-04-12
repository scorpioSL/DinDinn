export class QueryResultsResponse {
    statusCode: number;
    descritpion: string;
    results: any;
    status: 'SUCCESS' | 'FAILURE';
    error: any;

    constructor(statusCode: number, status: 'SUCCESS' | 'FAILURE') {
        this.statusCode = statusCode;
        this.status = status;
    }

    set setDescription(description) {
        this.descritpion = description;
    }

    set setResults(results) {
        this.results = results;
    }

    set setError(error) {
        this.error = error;
    }
}