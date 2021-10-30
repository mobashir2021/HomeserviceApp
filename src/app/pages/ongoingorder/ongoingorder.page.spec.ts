import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OngoingorderPage } from './ongoingorder.page';

describe('OngoingorderPage', () => {
  let component: OngoingorderPage;
  let fixture: ComponentFixture<OngoingorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OngoingorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
