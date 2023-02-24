import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private readonly apiUrlFeed = 'https://api.nasa.gov/neo/rest/v1/feed';
  private readonly apiUrlApod = 'https://api.nasa.gov/planetary/apod';
  private readonly apiKey = 'BdbSdQLWDduE3Q4iz4EI6iP41IvBlECkraEktYQU';

  constructor(private http: HttpClient) { }

  getNeoFeed(startDate: string, endDate: string) {
    const url = `${this.apiUrlFeed}?start_date=${startDate}&end_date=${endDate}&api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getApod(date: string) {
    const url = `${this.apiUrlApod}?date=${date}&api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}