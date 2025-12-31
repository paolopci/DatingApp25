import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-member-list',
  imports: [],
  templateUrl: './member-list.html',
  styleUrl: './member-list.css',
})
export class MemberList implements OnInit {
  private http = inject(HttpClient);
  protected members = signal<any[]>([]);

  async ngOnInit() {
    this.getMembers().then((members) => this.members.set(members));
  }

  private async getMembers() {
    try {
      const response = lastValueFrom(this.http.get<any[]>('https://localhost:5001/api/members'));
      return await response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
