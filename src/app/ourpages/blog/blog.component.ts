import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../shared/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  id:string;
bloglist:[];
blogdata:any;
ddlcategory:[];
  constructor(public blog:BlogService,private route :ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.blog.blogid);

    this.route.queryParams.subscribe(res=>{
      console.log(res)
      this.id=res.id
    })
    var sendata={
      _id:this.id
    }
    this.blog.blogservice(sendata).subscribe(res=>{
      console.log(res)
      this.blogdata=res
    })
  }

 
  // bindddlcategory() {
  //   this.bloglist.blogcatlistservice().subscribe(res => {
  //     if (res) {
  //       this.ddlcategory = res;
  //       console.log(this.ddlcategory)
  //       var senddata = {
  //         "category": res[5]._id
  //       }
  //       this.bloglist.blogcattopenlist(senddata).subscribe(res => {
  //         console.log(res);
  //         this.blogcatlist = res.bloglist

  //       })
  //     }
  //   })
  // }
 

}
