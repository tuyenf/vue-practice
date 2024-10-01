import {getImage} from '@/utils/global'
import type {App} from 'vue'

export const Utils = {
  install: (app: App) => {
    app.provide('getImage', getImage)
  },
}