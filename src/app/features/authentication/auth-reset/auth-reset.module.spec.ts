import { AuthResetModule } from './auth-reset.module';

describe('AuthResetModule', () => {
  let authResetModule: AuthResetModule;

  beforeEach(() => {
    authResetModule = new AuthResetModule();
  });

  it('should create an instance', () => {
    expect(authResetModule).toBeTruthy();
  });
});
