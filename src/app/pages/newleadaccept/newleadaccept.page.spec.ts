import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewleadacceptPage } from './newleadaccept.page';

describe('NewleadacceptPage', () => {
  let component: NewleadacceptPage;
  let fixture: ComponentFixture<NewleadacceptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewleadacceptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewleadacceptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
