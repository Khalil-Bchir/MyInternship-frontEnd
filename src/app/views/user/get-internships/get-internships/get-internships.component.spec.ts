import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInternshipsComponent } from './get-internships.component';

describe('GetInternshipsComponent', () => {
  let component: GetInternshipsComponent;
  let fixture: ComponentFixture<GetInternshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInternshipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetInternshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
