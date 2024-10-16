import { Component } from '@angular/core';
import { OpenAIChatService } from '../core/services/openai-chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  message: string = '';
  chatHistory: { role: string, content: string }[] = [];

  constructor(private openAIChatService: OpenAIChatService) { }

  sendMessage() {
    if (this.message.trim() === '') return;

    this.chatHistory.push({ role: 'user', content: this.message });

    this.openAIChatService.sendMessage(this.chatHistory).subscribe({
      next: (res: any) => {
        const assistantResponse = res.choices[0].message.content;
        this.chatHistory.push({ role: 'assistant', content: assistantResponse });
      },
      error: (error) => {
        console.error('Erreur lors de l\'envoi du message à OpenAI', error);
        this.chatHistory.push({ role: 'assistant', content: `Erreur: ${error.message}` });
      }
    });

    this.message = '';
  }
}
