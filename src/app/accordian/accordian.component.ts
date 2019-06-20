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
    if (config && config.expand === 'NONE') {
      const accordianData = this.inputAccordianData;
      this.inputAccordianData = accordianData.map(item => {
        item.expanded = false;
        return item;
      });
    }
    if (config && config.expand === 'FIRST') {
      const accordianData = this.inputAccordianData;
      this.inputAccordianData = accordianData.map((item, index) => {
        if (index === 0) {
          item.expanded = true;
        } else {
          item.expanded = false;
        }
        return item;
      });
    }
    if (config && config.expand === 'ALL') {
      const accordianData = this.inputAccordianData;
      this.inputAccordianData = accordianData.map((item, index) => {
        item.expanded = true;
        return item;
      });
      this.expandCollapseAllStatus = true;
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
