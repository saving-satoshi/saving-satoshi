export class Base64String {
  private encodedValue: string

  /**
   * Constructs a Base64String instance.
   * @param value The string value to be encoded, or an already encoded base64 string.
   * @param isEncoded Optional flag indicating whether the provided string is already base64 encoded.
   */
  constructor(value: string, isEncoded: boolean = false) {
    if (isEncoded) {
      this.encodedValue = value
    } else {
      this.encodedValue = Buffer.from(value).toString('base64')
    }
  }

  getEncoded(): string {
    return this.encodedValue
  }

  getDecoded(): string {
    return Buffer.from(this.encodedValue, 'base64').toString('utf-8')
  }
}
