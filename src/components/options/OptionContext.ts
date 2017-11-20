import Option from './Option'

export interface OptionState {
  key: string
  options: Array<string>
  defaultValue?: string
  available: number
}

export type OptionContextState = { [index: string]: OptionState }

export default class OptionContext {
  private stateChangeListeners = new Set<Function>()
  private valueChangeListeners = new Set<Function>()
  private _state: OptionContextState = {}
  private _data: { [index: string]: string } = {}
  private readonly _options: Array<Option>

  get options () {
    return this._options
  }

  get state () {
    return this._state
  }

  constructor (options: Array<Option>) {
    this._options = options
    for (const option of options) {
      this._state[option.key] = {
        key: option.key,
        available: 0,
        options: []
      }
    }
  }

  addStateChangeListener (listener: () => void) {
    this.stateChangeListeners.add(listener)
  }

  removeStateChangeListener (listener: () => void) {
    this.stateChangeListeners.delete(listener)
  }

  addValueChangeListener (listener: (key: string, value: string) => void) {
    this.valueChangeListeners.add(listener)
  }

  removeValueChangeListener (listener: (key: string, value: string) => void) {
    this.valueChangeListeners.delete(listener)
  }

  optionEnter (key: string) {
    // TODO:
    const optionState = this.getOptionState(key)!
    this.setState({
      [key]: {
        ...optionState,
        available: optionState.available + 1
      }
    })
  }

  optionExit (key: string) {
    const optionState = this.getOptionState(key)!
    this.setState({
      [key]: {
        ...optionState,
        available: optionState.available - 1
      }
    })
  }

  getOptionState (key: string): OptionState | null {
    return this.state[key] || null
  }

  getValue (key: string): string | null {
    const optionState = this.getOptionState(key)!
    if (!optionState) {
      return null
    }
    const value = this._data[key]
    if (value) {
      return value
    }
    return optionState.defaultValue || null
  }

  setValue (key: string, value: string) {
    for (const listener of Array.from(this.valueChangeListeners)) {
      listener(key, value)
    }
  }

  // set single source of truth
  setData (data: { [index: string]: string }) {
    this._data = data
    this.notifyListener()
  }

  setDefaultValue (key: string, defaultValue: string) {
    const optionState = this.getOptionState(key)!
    this.setState({
      [key]: {
        ...optionState,
        defaultValue
      }
    })
  }

  setOptions (key: string, options: Array<string>) {
    this.setState({
      [key]: {
        ...this.state[key],
        key,
        options
      }
    })
  }

  private setState (state: OptionContextState) {
    this._state = {
      ...this.state,
      ...state
    }
    this.notifyListener()
  }

  private notifyListener () {
    for (const listener of Array.from(this.stateChangeListeners)) {
      listener()
    }
  }
}
