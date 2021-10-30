import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewbillPage } from './newbill.page';

describe('NewbillPage', () => {
  let component: NewbillPage;
  let fixture: ComponentFixture<NewbillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewbillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
