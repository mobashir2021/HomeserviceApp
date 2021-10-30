import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiveratingPage } from './giverating.page';

describe('GiveratingPage', () => {
  let component: GiveratingPage;
  let fixture: ComponentFixture<GiveratingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveratingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiveratingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
