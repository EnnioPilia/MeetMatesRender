import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconCardComponent } from './icon-card.component';

describe('IconCardComponent', () => {
  let component: IconCardComponent;
  let fixture: ComponentFixture<IconCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(IconCardComponent);
    component = fixture.componentInstance;

    component.title = 'Test card';
    component.iconPath = 'icon.svg';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit cardClick event when onCardClick is called', () => {
    spyOn(component.cardClick, 'emit');

    component.onCardClick();

    expect(component.cardClick.emit).toHaveBeenCalled();
  });
});