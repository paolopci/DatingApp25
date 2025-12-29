import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AccountService } from './core/account.service';
import { Nav } from "./nav/nav";

@Component({
  selector: 'app-root',
  imports: [Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private http = inject(HttpClient);
  private accountService = inject(AccountService);
  protected members = signal<any[]>([]);

  protected readonly title = signal('DatingApp25 Client');
  async ngOnInit() {
    if (!this.accountService.currentUser()) {
      return;
    }
    this.getMembers().then((members) => this.members.set(members));
  }

  async getMembers() {
    try {
      const response = lastValueFrom(this.http.get<any[]>('https://localhost:5001/api/members'));
      return await response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
