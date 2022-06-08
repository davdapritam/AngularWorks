import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent implements OnInit {
  
  file1: File = null;
  file2: File = null;
  file3: File = null;
  file4: File = null;
  
  imageForm!: FormGroup;
  
  name!:string;
  profile!:string;
  profileError:boolean=true;
  profileErr:string;
  profileSize!:number;
  image1!:string;
  image2!:string;
  image3!:string;
  image4!:string;
  currentTime:any;
  id:any;
  
  constructor(private formBuilder: FormBuilder, private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.id)
    
    this.imageForm = this.formBuilder.group({
      'product[0]' : new FormControl(null),
      'product[1]' : new FormControl(null),
      'product[2]' : new FormControl(null),
      'product[3]' : new FormControl(null)
    })
    
  }
  
  OnChange1(event: any){
    this.file1=event.target.files[0];
    const types=['image/png','image/jpeg','image/jpg'];
    if(types.includes(this.file1.type))
    {
      const reader=new FileReader();
      reader.onload=()=>{
        this.image1=reader.result as string;
      }
      reader.readAsDataURL(this.file1);

      this.profileError=false;
      this.currentTime = new Date().getTime();
      this.profile="asdadasdsad"+this.currentTime.toString()+'_'+this.file1.name;
      console.log(this.profile)
      this.profileSize=event.target.files[0].size/1024/1024;
      if(this.profileSize>1)//1mb
      {
        this.profileError=true;
        this.profileErr="Profile Image is greater than 1 mb. Please select other";
      }
    }else{
      this.profileError=true;
      this.profileErr="Selected File is not .png/.jpg/.jpeg"
    }
  }
  
  
  OnChange2(event: any){
    this.file2=event.target.files[0];
    const types=['image/png','image/jpeg','image/jpg'];
    if(types.includes(this.file2.type))
    {
      const reader=new FileReader();
      reader.onload=()=>{
        this.image2=reader.result as string;
      }
      reader.readAsDataURL(this.file2);

      this.profileError=false;
      this.profile=this.file2.name;
      this.profileSize=event.target.files[0].size/1024/1024;
      if(this.profileSize>1)//1mb
      {
        this.profileError=true;
        this.profile="Profile Image is greater than 1 mb. Please select other";
      }
    }else{
      this.profileError=true;
      this.profile="Selected File is not .png/.jpg/.jpeg"
    }
  }
  
  OnChange3(event: any){
    this.file3=event.target.files[0];
    const types=['image/png','image/jpeg','image/jpg'];
    if(types.includes(this.file3.type))
    {
      const reader=new FileReader();
      reader.onload=()=>{
        this.image3=reader.result as string;
      }
      reader.readAsDataURL(this.file3);

      this.profileError=false;
      this.profile=this.file3.name;
      this.profileSize=event.target.files[0].size/1024/1024;
      if(this.profileSize>1)//1mb
      {
        this.profileError=true;
        this.profile="Profile Image is greater than 1 mb. Please select other";
      }
    }else{
      this.profileError=true;
      this.profile="Selected File is not .png/.jpg/.jpeg"
    }
  }
  
  OnChange4(event: any){
    this.file4=event.target.files[0];
    const types=['image/png','image/jpeg','image/jpg'];
    if(types.includes(this.file4.type))
    {
      const reader=new FileReader();
      reader.onload=()=>{
        this.image4=reader.result as string;
      }
      reader.readAsDataURL(this.file4);

      this.profileError=false;
      this.profile=this.file4.name;
      this.profileSize=event.target.files[0].size/1024/1024;
      if(this.profileSize>1)//1mb
      {
        this.profileError=true;
        this.profile="Profile Image is greater than 1 mb. Please select other";
      }
    }else{
      this.profileError=true;
      this.profile="Selected File is not .png/.jpg/.jpeg"
    }
  }
  
  OnUpload(data: any){
    console.log(data)
    
  }
  
}
