import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeniedleadsPage } from './deniedleads.page';

describe('DeniedleadsPage', () => {
  let component: DeniedleadsPage;
  let fixture: ComponentFixture<DeniedleadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeniedleadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeniedleadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
