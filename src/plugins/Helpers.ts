export class Helpers {
    static lazyload(path: string) {
        return () => import(/* @vite-ignore */ `/src/views/${path}.vue`)
    }
}
