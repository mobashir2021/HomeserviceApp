import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewleadsPage } from './newleads.page';

describe('NewleadsPage', () => {
  let component: NewleadsPage;
  let fixture: ComponentFixture<NewleadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewleadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewleadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
