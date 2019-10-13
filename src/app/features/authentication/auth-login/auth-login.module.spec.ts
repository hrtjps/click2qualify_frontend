import { AuthLoginModule } from './auth-login.module';

describe('AuthLoginModule', () => {
  let authLoginModule: AuthLoginModule;

  beforeEach(() => {
    authLoginModule = new AuthLoginModule();
  });

  it('should create an instance', () => {
    expect(authLoginModule).toBeTruthy();
  });
});
