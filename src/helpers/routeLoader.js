export const page = path => () => import(`@/views/${path}.vue`)
export const component = path => () => import(`@/components/${path}.vue`)
