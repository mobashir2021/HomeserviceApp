import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CancelledorderPage } from './cancelledorder.page';

describe('CancelledorderPage', () => {
  let component: CancelledorderPage;
  let fixture: ComponentFixture<CancelledorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelledorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CancelledorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
