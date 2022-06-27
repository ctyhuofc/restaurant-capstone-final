import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {DataService} from "../services/data.service";
import {Item} from "../interfaces/item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  items!:Item[]
  addItemForm;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router:Router) {
    this.addItemForm = formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      item_type: ['', [Validators.required]],
      item_subtype: ['', [Validators.required]],
      photo_file: ['', [Validators.required]],
      price: ['', [Validators.required]],
    })
    dataService.getItems().subscribe((results) => {
      this.items = results;
    }, (err)=> {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

  get name() {
    return this.addItemForm.get('name')!;
  }

  get description() {
    return this.addItemForm.get('description')!;
  }

  get item_type() {
    return this.addItemForm.get('item_type')!;
  }

  get item_subtype() {
    return this.addItemForm.get('item_subtype')!;
  }

  get photo_file() {
    return this.addItemForm.get('photo_file')!;
  }

  get price() {
    return this.addItemForm.get('price')!;
  }

  add_item() {
    let formData = this.addItemForm.value;
    let f = new FormData();

    //Transfer of all formgroup data into the FormDate object

    for(let x in formData)
    {
      f.append(x, formData[x])
    }

    console.log(this.addItemForm.value)
    this.dataService.createItem(f).subscribe(() => {
      alert('Item has been added')
      this.addItemForm.reset()
      this.router.navigate(['employees/home']);
    })
  }
  onFileChange(event:any){
    const file = event.target.files[0];
    this.addItemForm.patchValue({
      photo_file: file
    })
  }
}
