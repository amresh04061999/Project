import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Services/http.service';
import { PageService } from '../Services/page.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
public artistList:any=[]
public p:any  


 // pager object
 pager: any = {};

 // paged items
 pagedItems: any=[];
  constructor( private artistService:HttpService,
    private _pageServices:PageService) { 
  }
  ngOnInit(): void {
    this.getArtistDetails()
  }  
  public getArtistDetails(){
    this.artistService.getartist().subscribe(res=>{
      this.artistList=res
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
}
