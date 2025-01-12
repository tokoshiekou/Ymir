export interface IOptions {
  label: string
  value: number | string
  level: number
  btnName: string
  handleBtn(): void
}

export type SelectOptions = Pick<IOptions, 'label' | 'value'>

export type SettingOptions = Pick<
  IOptions,
  'label' | 'level' | 'handleBtn' | 'value' | 'btnName'
>
