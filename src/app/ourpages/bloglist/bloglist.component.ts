
import { BlogService } from '../../shared/blog.service';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
// @Pipe({ name: 'safeHtml' })
export class BloglistComponent implements OnInit {
  ddlcategory: [];
  blogcatlist: [];
  blogviewcount:any
  ddlrecent:[];
  blogrecent:[];
  constructor(public bloglist: BlogService, private router: Router) { }
  // transform(value) {
  //   return this.sanitized.bypassSecurityTrustHtml(value);
  // }

  ngOnInit(): void {
    this.bindddlcategory()
    this.recentblog()
    
  }
  bindddlcategory() {
    this.bloglist.blogcatlistservice().subscribe(res => {
      if (res) {
        this.ddlcategory = res;
        console.log(this.ddlcategory)
        var senddata = {
          "category": res._id
        }
        this.bloglist.blogcattopenlist(senddata).subscribe(res => {
          console.log(res);
          this.blogcatlist = res.bloglist

        })
      }
    })
  }
  openbloglist(_id) {
    var senddata = {
      "category": _id
    }
    this.bloglist.blogcattopenlist(senddata).subscribe(res => {
      console.log(res);
      this.blogcatlist = res.bloglist

    })
  }
  openList(_id){
    if(_id==''){
      alert("No record Found")
    }
    else{
      this.bloglist.blogid=_id
      this.router.navigate(['home1/blog/'],{queryParams:{id:_id}})

      var send={
        _id:_id
      }
      this.bloglist.blogview(send).subscribe(res=>{
        this.blogviewcount=res
        if(res.status == "1")
        {
         
        }

      })
    }
  }
  recentblog(){
    this.bloglist.blogrecent().subscribe(res=>{
        if(res){
          this.ddlrecent=res
          console.log(this.ddlrecent)
          var data={
            "recent":res._id
          }
          this.bloglist.blgrec(data).subscribe(res => {
            console.log(res);
            this.blogrecent = res.bloglist
  
          })
        } 
    })
  }
  recentbloglist(_id){
    this.router.navigate(['home1/blog/'],{queryParams:{id:_id}})
    var data={
      "recent":_id
    }
    this.bloglist.blgrec(data).subscribe(res => {
      console.log(res);
      this.blogrecent = res.bloglist

})
  }
}
