import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationcustomerPage } from './notificationcustomer.page';

describe('NotificationcustomerPage', () => {
  let component: NotificationcustomerPage;
  let fixture: ComponentFixture<NotificationcustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationcustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationcustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
