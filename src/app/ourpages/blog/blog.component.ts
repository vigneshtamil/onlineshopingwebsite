import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
blogcatlist: [];
ddlrecent:[];
blogrecent:[];
ddlpopular:[];
blogpop:[];
  constructor(public blog:BlogService,private route :ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    console.log(this.blog.blogid);
    this.route.queryParams.subscribe(res=>{
      this.id=res.id
    })
    var sendata={
      _id:this.id
    }
    this.blog.blogservice(sendata).subscribe(res=>{
      this.blogdata=res
      console.log(this.blogdata)
    })
    this.bindddlcategory()
    this.recentblog()
    this.popularblog()
  }
  bindddlcategory() {
    this.blog.blogcatlistservice().subscribe(res => {
      if (res) {
        this.ddlcategory = res;
        console.log( this.ddlcategory );
        var senddata = {
          "category": res[5]._id
        }
        this.blog.blogcattopenlist(senddata).subscribe(res => {
          this.blogcatlist = res.blog
        })
      }
    })
  }
  openbloglist(_id) {
    this.router.navigate(['home1/bloglist/'],{queryParams:{id:_id}})
    var senddata = {
      "category": _id
    }
    this.blog.blogcattopenlist(senddata).subscribe(res => {
      this.blogcatlist = res.blog

    })
  }
  recentblog(){
    this.blog.blogrecent().subscribe(res=>{
        if(res){
          this.ddlrecent=res
          var data={
            "recent":res._id
          }
          this.blog.blgrec(data).subscribe(res => {
            this.blogrecent = res.blog
  
          })
        } 
    })
  }
  recentbloglist(_id){
    this.router.navigate(['home1/blog/'],{queryParams:{id:_id}})
    var data={
      "recent":_id
    }
    this.blog.blgrec(data).subscribe(res => {
      this.blogrecent = res.blog
      this.ngOnInit();
})
  }
  popularblog(){
    this.blog.blogpopular().subscribe(res=>{
      if(res){
        this.ddlpopular=res
        var dat={
          "popular":res._id
        }
        this.blog.blogpop(dat).subscribe(res=>{
        this.blogpop=res.blog
        })
      }
    })
  }
  blogpoplist(_id){
    this.router.navigate(['home1/blog/'],{queryParams:{id:_id}})
    var dat={
      "popular":_id
    }
    this.blog.blogpop(dat).subscribe(res=>{
      this.blogpop=res.blog
      this.ngOnInit();
  })
}
}
