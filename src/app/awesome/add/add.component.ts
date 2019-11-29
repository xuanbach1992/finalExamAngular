import {Component, OnInit} from '@angular/core';
import {AwesomeService} from '../../server/awesome.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addAwesomeForm = this.formBuilder.group({
    tag: [''],
    url: [''],
    descriptions: [''],
  });

  constructor(private formBuilder: FormBuilder,
              private awesomeService: AwesomeService,
              private router: Router) {
  }

  ngOnInit() {
  }

  create() {
    const newAwesome = this.addAwesomeForm.value;
    this.awesomeService.addSuccess(newAwesome).subscribe(res => {
      return this.router.navigate(['/awesome']);
    });
  }
}
