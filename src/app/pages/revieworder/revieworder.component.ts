import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReviewService } from '../../shared/review.service';
@Component({
  selector: 'app-revieworder',
  templateUrl: './revieworder.component.html',
  styleUrls: ['./revieworder.component.scss']
})
export class RevieworderComponent implements OnInit {
   description:'';
  @ViewChild("content", { static: false }) contentrefer;
  fileToUpload: File = null;
  spin: boolean = true;
  files = [];
  uploadForm: FormGroup;
  englishtitle:string;
  tamiltitle:string;
  ordernumber: string;
  tablelist = [];
  imageChangedEvent: any='';
  category:[];
  toastr: any;
  ddlcategory:[];
  croppedImage: any = '';
  id: string;
  croppedImagefile: any = '';
  breadCrumbItems: Array<{}>;
  //formData: any;
  constructor(
    public apiservice: ReviewService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder, private httpClient: HttpClient
  ) { }
  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      _id:[''],
      englishtitle: ['', [Validators.required]],
      tamiltitle: ['', [Validators.required]],
      description:[''],
      // ordernumber:['']
    });

  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  formsubmit() {
    var date = new Date()
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let finaldate = (year + '-' + month + '-' + day + '-' + hours + '-' + minutes + '-' + seconds)
    const formData: FormData = new FormData();
    formData.append('_id',this.uploadForm.value._id);
    formData.append('agentimage', this.fileToUpload, finaldate );
    formData.append('englishtitle',  this.uploadForm.value.englishtitle);
    formData.append('description',  this.uploadForm.value.description);
    this.apiservice.reviewadd(formData).subscribe(res => {
      if (res['status'] == 'success') {
        this.modalService.dismissAll()
        this.ngOnInit();
       }
       else {
        this.toastr.error(res['message'])
      }
    })
  }
  filter = false;
  openModal(content: any) {
    this.ordernumber = '';
    this.modalService.open(content, { size: 'xl', windowClass: 'modal-holder', backdrop: 'static', keyboard: false });

  }
  get formData() {
    return this.uploadForm.controls;
  }
  cleardata(){
    this.uploadForm.patchValue({
      _id:'',
      englishtitle:'',
      tamiltitle:'',
      category:'',
      imagepath:'',
    })
    this.description=''
  }
  fileChangeEvent(event: any): void {
    this.fileToUpload = event.target.files[0];
     console.log(this.fileToUpload);
   }
}
