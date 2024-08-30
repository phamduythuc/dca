export interface Token {
  ave_price_dca_display?: number,
  current_price?: number
  current_price_class?: string
  id?: string
  initial_tokens?: number | any
  initial_tokens_display?: string
  investment_capital?: number
  name_token?: any
  original_purchase_price?: number | any
  price_dca?: number | null |undefined
  ave_price_dca: number | null | undefined
  price_dca_display?: number
  status?: number
  token_dca_display?: string
  tokens_dca?: number | null | undefined
  total_capital?: number
  updateAt?: any
}
export interface DCA {
  tokens_dca?:  number
  price_current_dca? :number
  updateAt? : any
}
