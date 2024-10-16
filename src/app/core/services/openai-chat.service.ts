import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class OpenAIChatService {
    private apiUrl = 'https://api.openai.com/v1/chat/completions';
    private apiKey = '';

    constructor(private http: HttpClient) {}

    sendMessage(messages: { role: string; content: string }[]): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${environment.openAIKey}`,
        });
    
        const body = {
            model: 'gpt-3.5-turbo',
            messages: messages,
        };

        return this.http.post(this.apiUrl, body, { headers });
    }
}
