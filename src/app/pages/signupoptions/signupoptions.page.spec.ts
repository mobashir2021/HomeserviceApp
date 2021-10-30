import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupoptionsPage } from './signupoptions.page';

describe('SignupoptionsPage', () => {
  let component: SignupoptionsPage;
  let fixture: ComponentFixture<SignupoptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupoptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupoptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
