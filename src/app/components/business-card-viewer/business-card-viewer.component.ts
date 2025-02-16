import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-business-card-viewer',
  imports: [NgIf],
  templateUrl: './business-card-viewer.component.html',
  styleUrl: './business-card-viewer.component.css'
})
export class BusinessCardViewerComponent implements OnInit {
  cardData: any = null;

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService
  ) {}

  async ngOnInit(): Promise<void> {
    const cardId = this.route.snapshot.paramMap.get('id');
    if (cardId) {
      this.cardData = await this.firestoreService.getBusinessCard(cardId);
    }
  }
}