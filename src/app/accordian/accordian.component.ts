import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordianComponent implements OnInit {

  constructor() { }
  inputAccordianData: any;
  inputAccordianConfig: any;
  expandCollapseAllStatus = false;

  @Input('accordianData')
  set accordianData(val: any) {
    this.inputAccordianData = val.map(item => {
      item.expanded = true;
      return item;
    });
  }
  get accordianData(): any {
    return this.inputAccordianData;
  }

  @Input('accordianConfig')
  set accordianConfig(val: any) {
    this.inputAccordianConfig = val;
    this.upadateUIAsPerConfig(val);
  }
  get accordianConfig(): any {
    return this.inputAccordianConfig;
  }

  ngOnInit() {

  }
  upadateUIAsPerConfig(config) {
    switch (config && config.expand) {
      case 'NONE':
        this.inputAccordianData = this.inputAccordianData.map(item => {
          item.expanded = false;
          return item;
        });
        break;
      case 'FIRST':
        this.inputAccordianData = this.inputAccordianData.map((item, index) => {
          if (index === 0) {
            item.expanded = true;
          } else {
            item.expanded = false;
          }
          return item;
        });
        break;
      case 'ALL':
        this.inputAccordianData = this.inputAccordianData.map((item) => {
          item.expanded = true;
          return item;
        });
        this.expandCollapseAllStatus = true;
        break;
    }
  }
  expandCollapse() {
    this.expandCollapseAllStatus = this.accordianData.map(item => {
      if (!item.expanded) {
        return false;
      }
    });
  }
  changeExpandCollapseStatus() {
    if (this.expandCollapseAllStatus) {
      this.inputAccordianData = this.accordianData.map(item => {
        item.expanded = true;
        return item;
      });
    } else {
      this.inputAccordianData = this.accordianData.map(item => {
        item.expanded = false;
        return item;
      });
    }
  }

}
