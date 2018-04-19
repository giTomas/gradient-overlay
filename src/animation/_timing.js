
export const linear = fr => fr
export const quad = fr => Math.pow(fr, 2)
export const circ = fr =>  1 - Math.sin(Math.acos(fr))
export const back = (fr, x=5) => (Math.pow(fr, 2) * ((x + 1) * fr - x));
export const bounce = fr => {

}
