import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartnerhomePage } from './partnerhome.page';

describe('PartnerhomePage', () => {
  let component: PartnerhomePage;
  let fixture: ComponentFixture<PartnerhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
