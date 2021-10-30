import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerhomePage } from './customerhome.page';

describe('CustomerhomePage', () => {
  let component: CustomerhomePage;
  let fixture: ComponentFixture<CustomerhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
