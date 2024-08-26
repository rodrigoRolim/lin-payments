class LoginClient {
  login() {}
}
class LoginCompany {
  login() {}
}
class LoginFactory {
  createLoginType() {
    throw new Error('This method should be overridden')
  }
}
class LoginClientFactory extends LoginFactory {
  createLoginType() {
    return new LoginClient()
  }
}
class LoginCompanyFactory extends LoginFactory {
  createLoginType() {
    return new LoginCompany()
  }
}