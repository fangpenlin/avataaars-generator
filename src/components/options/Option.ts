export default class Option {
  private _key: string
  private _label: string

  get key (): string {
    return this._key
  }

  get label (): string {
    return this._label
  }

  constructor ({ key, label }: { key: string; label: string }) {
    this._key = key
    this._label = label
  }
}
