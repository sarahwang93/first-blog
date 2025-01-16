import { NgStyle } from '@angular/common';
import { Component, computed, input, Input, Signal } from '@angular/core';
import { FirstblogService } from '../firstblog.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() isBold: boolean = true;
  @Input({required: true}) blogContent: string = "";
  nameInfo = input.required<string>();

  path = computed(() => {
    return '/src/assets/headphoto/' + this.nameInfo
  })

  constructor(private firstBlogService: FirstblogService){}

  get fontWeightStyle(): string{ 
    if (this.isBold){
      return 'bold';
    } else{
      return 'normal';
    }
  }

  ngOnInit() {
    this.blogContent = this.firstBlogService.getBlogContent();
  }
}
