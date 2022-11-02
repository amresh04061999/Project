import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../Services/http.service';
import { PageService } from '../Services/page.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  public artistList: any = []
  public p: any
  selected: any
  selectedData: any
  options: any
  public d: FormGroup

  someData = [{ value: "ABC", id: "123" },
  { value: "ABC", id: "12" },
  { value: "DEF", id: "23" },
  { value: "DEF", id: "1233" },
  { value: "ABC", id: "13" },
  { value: "DEF", id: "1" },
  { value: "DEF", id: "34" },
  { value: "ABC", id: "56" },
  { value: "ABC", id: "13" },
  { value: "DEF", id: "123" },
  { value: "HIJ", id: "113" }]

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any = [];
  constructor(private artistService: HttpService,
    private _pageServices: PageService, private fb: FormBuilder) {
    this.d = this.fb.group({
      tag: ('')
    })
    this.selectedData = this.someData

    this.options = ['singer', 'dancer']
  }
  ngOnInit(): void {
    this.getArtistDetails()

  }
  public getArtistDetails() {
    this.artistService.getartist().subscribe(res => {
      this.artistList = res
      console.log(this.artistList)
      this.setPage(1);
    })

  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this._pageServices.getPager(this.artistList.length, page);

    // get current page of items
    this.pagedItems = this.artistList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  // filter
  onSelect(val: any) {
    console.log(val);
    this.pagedItems = this.artistList.filter((x: any) => x.type === val)
    console.log(this.pagedItems)
  }

}
