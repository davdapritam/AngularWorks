import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimageComponent } from './addimage.component';

describe('AddimageComponent', () => {
  let component: AddimageComponent;
  let fixture: ComponentFixture<AddimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
