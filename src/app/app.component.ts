import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'w6-image-gallery-assignment';

  data: any = {
    subject: 'Image Gallery Assignment',
    name: 'Kexin Sun',
    studentNumber: '101478446',
    images: [
      {
        path: "./assets/images/Quebec.jpeg",
        caption: "Experience the timeless beauty and European charm of Canada’s historic gem, Quebec City."
      },
      {
        path: "./assets/images/Tofino.jpeg",
        caption: "Nature’s Untamed Paradise: Tofino offers a sanctuary for adventurers and nature lovers alike."
      },
      {
        path: "./assets/images/Prince-Edward-Island.jpeg",
        caption: "Step into the pages of a storybook as you venture into the idyllic landscapes of Prince Edward Island."
      },
      {
        path: "./assets/images/Jasper-National-Park-Alberta.jpg",
        caption: "Discover the awe-inspiring grandeur of Jasper National Park."
      },
      {
        path: "./assets/images/Niagara-Falls-Ontario.jpg",
        caption: "Experience the sheer power and beauty of one of the world’s most famous natural spectacles, Niagara Falls."
      },
      {
        path: "./assets/images/Victoria-British-Columbia.jpg",
        caption: "Victoria, the capital city of British Columbia, where old-world allure meets modern delights."
      },
      {
        path: "./assets/images/Gros-Morne-National-Park.jpg",
        caption: "Embark on an unforgettable journey into the heart of nature’s masterpiece at Gros Morne National Park."
      },
      {
        path: "./assets/images/Old-Montreal-Quebec.jpg",
        caption: "Discover iconic landmarks like the stunning Notre-Dame Basilica in Old Montreal, Quebec."
      },
      {
        path: "./assets/images/The-Yukon.jpg",
        caption: "Yukon promises an unforgettable journey into the heart of Canada’s wild spirit."
      },
      {
        path: "./assets/images/The-Bay-of-Fundy-New-Brunswick.jpg",
        caption: "The Bay of Fundy is also a sanctuary for diverse marine life, including whales, seals, and seabirds."
      }
    ]
  }

  ngOnInit() {

  }

  imageIndex: number = 0;

  selectImage(index: number) {
    this.imageIndex = index;
  }

  previousImageButton() {
    if (this.imageIndex > 0) {
      this.imageIndex--;
    }
  }

  nextImageButton() {
    if (this.imageIndex < this.data.images.length - 1) {
      this.imageIndex++;
    }
  }

  isFirstImage(): boolean {
    return this.imageIndex === 0;
  }

  isLastImage(): boolean {
    return this.imageIndex === this.data.images.length - 1;
  }

  showCurrentImageIndex(): number {
    return this.imageIndex + 1;
  }

  setActiveImage(n: number): void {
    console.log(n);
    this.data.images.forEach((item: any) => item.active = false);
    this.data.images[n].active = true;

  }


}
