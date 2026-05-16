import { StatusColorPipe } from './statusColor.pipe';

describe('StatusColorPipe', () => {
  let pipe: StatusColorPipe;

  beforeEach(() => {
    pipe = new StatusColorPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  describe('activity statuses', () => {
    it('should map "ouvert" to success', () => {
      expect(pipe.transform('ouvert')).toBe('status-success');
    });

    it('should map "complet" to warning', () => {
      expect(pipe.transform('complet')).toBe('status-warning');
    });

    it('should map "annulé" to error', () => {
      expect(pipe.transform('annulé')).toBe('status-error');
    });

    it('should map "terminé" to neutral', () => {
      expect(pipe.transform('terminé')).toBe('status-neutral');
    });
  });

  describe('participation statuses', () => {
    it('should map "accepté" to success', () => {
      expect(pipe.transform('accepté')).toBe('status-success');
    });

    it('should map "en attente" to warning', () => {
      expect(pipe.transform('en attente')).toBe('status-warning');
    });

    it('should map "refusé" to error', () => {
      expect(pipe.transform('refusé')).toBe('status-error');
    });
  });

  describe('edge cases', () => {
    it('should be case insensitive', () => {
      expect(pipe.transform('OUVERT')).toBe('status-success');
    });

    it('should return default color for unknown value', () => {
      expect(pipe.transform('foo')).toBe('status-default');
    });

    it('should return default color for null', () => {
      expect(pipe.transform(null)).toBe('status-default');
    });

    it('should return default color for undefined', () => {
      expect(pipe.transform(undefined)).toBe('status-default');
    });
  });
});