import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSEARCHComponent } from './child-search.component';

describe('ChildSEARCHComponent', () => {
  let component: ChildSEARCHComponent;
  let fixture: ComponentFixture<ChildSEARCHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildSEARCHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSEARCHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
