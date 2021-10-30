import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutgoingleadsPage } from './outgoingleads.page';

describe('OutgoingleadsPage', () => {
  let component: OutgoingleadsPage;
  let fixture: ComponentFixture<OutgoingleadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutgoingleadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutgoingleadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
