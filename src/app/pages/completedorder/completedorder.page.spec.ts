import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompletedorderPage } from './completedorder.page';

describe('CompletedorderPage', () => {
  let component: CompletedorderPage;
  let fixture: ComponentFixture<CompletedorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletedorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
