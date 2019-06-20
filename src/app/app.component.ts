import { Component , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
    expand: 'FIRST', // ALL/NONE/FIRST
    showAccordianHighlighter: true,
    accordianHighlighterBgColor: '#50AF50',
    accordianHighlighterFontColor: '#FFF'
  };
  accordianData = [{
    heading: '<b>Hello Vipin Heading 1 (Bold)</b>',
    description: '<b>Hello Vipin 1 Description</b>',
    footer: '<b>Hello Vipin Footer 1</b>'
  },
  {
    heading: '<i>Hello Vipin Heading 2 (italic)</i> ',
    description: '<i>Hello Vipin 2 Description</i>',
    footer: '<i>Hello Vipin Footer 2</i>'
  }, {
    heading: '<span style="font-size:20px">Hello Vipin Heading 3 (Font size 20px)</span>',
    description: '<span style="font-size:20px">Hello Vipin 3 Description</span>',
    footer: '<span style="font-size:20px">Hello Vipin Footer Heading 3</span>'
  }, {
    heading: 'Hello Vipin Heading 4  (With Icon) <i class="fa fa-user-circle" style="font-size:24px;"></i>',
    description: 'Hello Vipin 4 Description (With Icon) <i class="fa fa-user-circle" style="font-size:24px;"></i>',
    footer: 'Hello Vipin Footer 4 (With Icon) <i class="fa fa-user-circle" style="font-size:24px;"></i>'
  }, {
    heading: 'Hello Vipin Heading 5 ( Normal without HTML Tag )',
    description: 'Hello Vipin 5 Description',
    footer: 'Hello Vipin Footer 5'
  }];
}
