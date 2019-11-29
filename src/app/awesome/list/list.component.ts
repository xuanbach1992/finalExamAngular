import {Component, OnInit} from '@angular/core';
import {AwesomeService} from '../../server/awesome.service';
import {IAwesome} from '../iawesome';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private listAwesome: IAwesome [] = [];

  constructor(private awesomeService: AwesomeService) {
  }

  ngOnInit() {
    this.awesomeService.getAll().subscribe(data => {
      this.listAwesome = data;
    });
  }
}
