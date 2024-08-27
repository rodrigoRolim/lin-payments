export class UseValidator {
  constructor() {
    this.error = ''
  }

  isRequired(value, message) {
    this.error = !value ? message : ''

    return this
  }
  isEmail(value, message) {
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    this.error = !value && !emailRegex.test(this.value) ? message : ''

    return this
  }
}
