import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  cards: {
    pk: number;
    name: string;
    point: string;
    display_img_url: string;
    quantity: number;
    valid_until: string;
    low_quantity: number;
  }[] = [
    {
      pk: 987,
      name: 'Reward Name',
      point: '150',
      display_img_url:
        'assets/img/photo-1.avif',
      quantity: 17,
      valid_until: '2024-12-31',
      low_quantity: 10,
    },
    {
      pk: 988,
      name: 'Daily Farms',
      point: '155',
      display_img_url: 'assets/img/photo-2.avif',
      quantity: 16,
      valid_until: '2024-10-31',
      low_quantity: 9,
    },
    {
      pk: 989,
      name: 'Coffee Day',
      point: '140',
      display_img_url: 'assets/img/photo-3.avif',
      quantity: 84,
      valid_until: '2024-12-31',
      low_quantity: 19,
    },
    {
      pk: 990,
      name: 'Rose Day',
      point: '130',
      display_img_url: 'assets/img/photo-4.avif',
      quantity: 14,
      valid_until: '2024-11-31',
      low_quantity: 13,
    },
    {
      pk: 991,
      name: 'Teddy Day',
      point: '140',
      display_img_url: 'assets/img/photo-5.avif',
      quantity: 15,
      valid_until: '2024-12-31',
      low_quantity: 12,
    },
    {
      pk: 992,
      name: 'E-gift',
      point: '180',
      display_img_url: 'assets/img/photo-6.avif',
      quantity: 18,
      valid_until: '2024-08-31',
      low_quantity: 12,
    },
    {
      pk: 993,
      name: 'Swiggy',
      point: '190',
      display_img_url: 'assets/img/photo-7.avif',
      quantity: 15,
      valid_until: '2024-09-11',
      low_quantity: 8,
    },
  ];

  filteredCards = [...this.cards]; // Initially show all cards

  onSearch(event: KeyboardEvent): void {
    const input = (event.target as HTMLInputElement).value.toLowerCase().trim();
    if (event.key === 'Enter') {
      this.filteredCards = this.cards.filter(card => card.name.toLowerCase().includes(input));
    } else {
      this.filteredCards = this.cards;
    }
  }
}
