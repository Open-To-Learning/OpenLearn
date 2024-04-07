import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent implements OnInit {
   cookies:string = "";
  ngOnInit(): void {
    
  }
}
