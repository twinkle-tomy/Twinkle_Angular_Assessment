import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpdComponent } from './npd.component';

describe('NpdComponent', () => {
  let component: NpdComponent;
  let fixture: ComponentFixture<NpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
