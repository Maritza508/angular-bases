import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhaleComponent } from './whale.component';

describe('WhaleComponent', () => {
  let component: WhaleComponent;
  let fixture: ComponentFixture<WhaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhaleComponent]
    });
    fixture = TestBed.createComponent(WhaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
