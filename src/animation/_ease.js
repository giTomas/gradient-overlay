export const easeIn = timing => fr => timing(fr)
export const easeOut = timing => fr => 1 - timing(1 - fr)
export const easeOutIn = timing => fr => (
  fr <= 0.5 ? (timing(2 * fr) / 2) : ((2 - timing(2 * (1 - fr))) / 2)
)
