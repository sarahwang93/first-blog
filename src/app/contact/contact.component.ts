import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { interval, Observable, map, merge } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  subscription!: Observable<number>;
  inputStreamData = [1,2,3,4,5,6,7,8]
  cartoonsStreamData = ['thunder cats', 'Dragon Ball Z',   'Ninja Turtles'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log("The passed id is: " + id);
  }

  startStream(){
    const streamSource = interval(3000)
    const cartoonSource = interval(1000)

    cartoonSource.pipe(
      map(output => output % 
        this.cartoonsStreamData.length
      ),
      map(index => this.cartoonsStreamData[index]),
    )

    streamSource.pipe(
      map(output => output %
        this.inputStreamData.length
      ),
      map(index => this.inputStreamData[index]),
    )
    .subscribe(ele => console.log(ele)); // this will print the data from the array every 3 seconds
  }

}
