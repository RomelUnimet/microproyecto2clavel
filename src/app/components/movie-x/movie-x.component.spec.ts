import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieXComponent } from './movie-x.component';

describe('MovieXComponent', () => {
  let component: MovieXComponent;
  let fixture: ComponentFixture<MovieXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
