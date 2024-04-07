import { NgFor } from '@angular/common';
import { Component} from '@angular/core';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

interface Video {
  name: string,
  url: string
}

interface CourseModule {
  name: string,
  videos: Video[],
  expanded: boolean
}
@Component({
  selector: 'app-course-player',
  standalone: true,
  imports: [
    VgBufferingModule,
    VgControlsModule,
    VgCoreModule,
    VgOverlayPlayModule,
    NgFor,
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule
  ],
  templateUrl: './course-player.component.html',
  styleUrl: './course-player.component.scss'
})
export class CoursePlayerComponent {
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  courses :CourseModule[] = [
    {
      name: "Module 1",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 2",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 3",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 4",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 5",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 6",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 7",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 8",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 9",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
  ]
}
