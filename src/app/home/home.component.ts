import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  modelRef: NgbModalRef;
  dataList = [];
  private hitData : boolean;
  searchFilter: any = {title: ''};
  rowData;

  constructor(private modalService: NgbModal,
              private homeService: HomeService) { 
                this.hitData = true;
  }

  ngOnInit() {
    this.getData();

    //get data after every 10 seconds
    IntervalObservable.create(10000)
    .takeWhile(() => this.hitData) 
    .subscribe(() => {
      this.getData();
    });
  }

  // get Data from API
  getData(){
    this.homeService.getData().subscribe((data)=>{
      this.dataList = data['hits'];
    },
    (error)=>{
      console.log(error);
    })
  }

  // open Modal
  open(content, data){
    this.rowData = data;
    this.modelRef = this.modalService.open(content, { windowClass: ' org-modal terminalForm', size: 'lg' });  
  }

  ngOnDestroy(){
    //on component destroy stopping interval/api hits
    this.hitData = false;
  }
}
