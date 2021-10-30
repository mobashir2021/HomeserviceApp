import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OngoingleaddetailsPage } from './ongoingleaddetails.page';

describe('OngoingleaddetailsPage', () => {
  let component: OngoingleaddetailsPage;
  let fixture: ComponentFixture<OngoingleaddetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingleaddetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OngoingleaddetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
