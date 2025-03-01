import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;


  ngOnInit():void {
    this.title = "SnapFace";
    this.description = "The best social media platform for sharing your face snaps!";
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }

  onSnap() {
    this.snaps++;
  }

}
