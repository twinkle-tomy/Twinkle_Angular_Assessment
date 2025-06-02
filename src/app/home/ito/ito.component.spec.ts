import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITOComponent } from './ito.component';

describe('ITOComponent', () => {
  let component: ITOComponent;
  let fixture: ComponentFixture<ITOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ITOComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ITOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
