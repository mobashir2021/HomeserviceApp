import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApprovePartnerPage } from './approve-partner.page';

describe('ApprovePartnerPage', () => {
  let component: ApprovePartnerPage;
  let fixture: ComponentFixture<ApprovePartnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovePartnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovePartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
