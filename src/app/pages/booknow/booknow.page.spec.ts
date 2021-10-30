import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BooknowPage } from './booknow.page';

describe('BooknowPage', () => {
  let component: BooknowPage;
  let fixture: ComponentFixture<BooknowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooknowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BooknowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
