import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AwesomeService} from '../../server/awesome.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IAwesome} from '../iawesome';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updateAweSomeForm = this.formBuilder.group({
    tag: [''],
    url: [''],
    descriptions: [''],
  });
  index = this.ActiveRouter.snapshot.paramMap.get('id');

  constructor(private formBuilder: FormBuilder,
              private awesomeService: AwesomeService,
              private ActiveRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.awesomeService.findById(+this.index).subscribe((res: IAwesome) => {
      this.updateAweSomeForm.patchValue({
        tag: res.tag,
        url: res.url,
        descriptions: res.descriptions,
      });
    });
  }

  delete() {
    if (confirm('Are you sure?')) {
      this.awesomeService.deleteSuccess(+this.index).subscribe((result: IAwesome) => {
        return this.router.navigate(['/awesome']);
      });
    }
  }

  update() {
    const NewAwesome = this.updateAweSomeForm.value;
    this.awesomeService.updateSuccess(+this.index, NewAwesome).subscribe((res: IAwesome) => {
      return this.router.navigate(['/awesome']);
    });
  }
}
