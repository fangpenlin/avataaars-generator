import Option from './Option'

export interface OptionState {
  key: string
  options: Array<string>
  value?: string
  defaultValue?: string
  available: number
}

export type OptionContextState = { [index: string]: OptionState }

export default class OptionContext {
  private listeners = new Set<Function>()
  private _state: OptionContextState = {}
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

  addListener (listener: () => void) {
    this.listeners.add(listener)
  }

  removeListener (listener: () => void) {
    this.listeners.delete(listener)
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

  setValue (key: string, value: string, defaultValue: boolean = false) {
    const optionState = this.getOptionState(key)!
    if (optionState.value === value) {
      return
    }
    this.setState({
      [key]: {
        ...optionState,
        key,
        value,
        defaultValue: defaultValue ? value : optionState.defaultValue
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
    for (const listener of Array.from(this.listeners)) {
      listener()
    }
  }
}
