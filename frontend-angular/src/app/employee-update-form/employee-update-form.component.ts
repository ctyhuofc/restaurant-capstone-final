import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from "../services/data.service";
import {Item} from "../interfaces/item";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employee-update-form',
  templateUrl: './employee-update-form.component.html',
  styleUrls: ['./employee-update-form.component.css']
})
export class EmployeeUpdateFormComponent implements OnInit {
  items!: Item[]
  updateItemForm;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private activatedRoute: ActivatedRoute, private router:Router) {
    this.updateItemForm = formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      item_type: ['', [Validators.required]],
      item_subtype: ['', [Validators.required]],
      photo_file: ['', [Validators.required]],
      price: ['', [Validators.required]],
    })
    dataService.getItems().subscribe((results) => {
      this.items = results;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params?.['id'])
    this.dataService.getItemById(this.activatedRoute.snapshot.params?.['id']).subscribe((result: any) => {
      console.log(result)
      this.updateItemForm = new FormGroup({
        name: new FormControl(result['name']),
        description: new FormControl(result['description']),
        item_type: new FormControl(result['item_type']),
        item_subtype: new FormControl(result['item_subtype']),
        photo_file: new FormControl(result['photo_file']),
        price: new FormControl(result['price']),
      })
    })
  }


  get name() {
    return this.updateItemForm.get('name')!;
  }

  get description() {
    return this.updateItemForm.get('description')!;
  }

  get item_type() {
    return this.updateItemForm.get('item_type')!;
  }

  get item_subtype() {
    return this.updateItemForm.get('item_subtype')!;
  }

  get photo_file() {
    return this.updateItemForm.get('photo_file')!;
  }

  get price() {
    return this.updateItemForm.get('price')!;
  }

  updateItem() {
    let formData = this.updateItemForm.value;
    let f = new FormData();

    //Transfer of all formgroup data into the FromData object

    for (let x in formData) {
      f.append(x, formData[x])
    }

    console.log(this.updateItemForm.value)
    this.dataService.updateItem(this.activatedRoute.snapshot.params?.['id'], f).subscribe( (results) => {
      alert('Item has been updated')
      this.updateItemForm.reset()
      this.router.navigate(['employees/home']);
    }, (err) => {
      alert('Update Item Failed');
      console.log(err)
    })
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.updateItemForm.patchValue({
      photo_file: file
    })
  }
  loadData() {
    this.updateItemForm.setValue({})
  }

}

