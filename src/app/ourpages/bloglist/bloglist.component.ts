
import { BlogService } from '../../shared/blog.service';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
// @Pipe({ name: 'safeHtml' })
export class BloglistComponent implements OnInit {
  ddlcategory:[];
  blogcatlist:[];
  constructor(public bloglist:BlogService) { }
  // transform(value) {
  //   return this.sanitized.bypassSecurityTrustHtml(value);
  // }

  ngOnInit(): void {
    this.bindddlcategory()
  }

 bindddlcategory() {
    this.bloglist.blogcatlistservice().subscribe(res => {
     if(res)
     {
this.ddlcategory=res;
console.log(this.ddlcategory)
var senddata={
  "category":res[5]._id
}
this.bloglist.blogcattopenlist(senddata).subscribe(res=>{
console.log(res);
this.blogcatlist=res.bloglist

})
     }
    })
  }
  openbloglist(_id){
    var senddata={
      "category":_id
  }
  this.bloglist.blogcattopenlist(senddata).subscribe(res=>{
console.log(res);
this.blogcatlist=res.bloglist

  })
  }
}
