import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  accordianConfig = {
    showHeader: true,
    showBody: true,
    showFooter: false,
    headerBgColor: '#3A9DDE',
    headerFontColor: '#FFF',
    bodyBgColor: '#F5F5F5',
    bodyFontColor: '#333',
    footerBgColor: '#3A9DDE',
    footerFontColor: '#333',
    collapse: 'FIRST', // ALL/NONE/FIRST
    showAccordianHighlighter: true,
    accordianHighlighterBgColor: '#50AF50',
    accordianHighlighterFontColor: '#FFF'
  };
  accordianData = [{
    heading: '<b>hello Vipin1</b>',
    description: 'hello Vipin 1 Description',
    footer: 'hello vipin Footer 1'
  },
  {
    heading: 'hello Vipin 2',
    description: 'hello Vipin 2 Description',
    footer: 'hello vipin Footer 2'
  }, {
    heading: 'hello Vipin 3',
    description: 'hello Vipin 3 Description',
    footer: 'hello vipin Footer 3'
  }, {
    heading: 'hello Vipin 4',
    description: 'hello Vipin 4 Description',
    footer: 'hello vipin Footer 4'
  }, {
    heading: 'hello Vipin 5',
    description: 'hello Vipin 5 Description',
    footer: 'hello vipin Footer 5'
  }];
}
