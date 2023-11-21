import '@testing-library/jest-dom/extend-expect'
import { setup } from '@resultadosdigitais/front-hub/react/jest'
import 'jest-styled-components'
import fronthubConfig from '../front-hub.config'

global.XMLHttpRequest = undefined

setup(fronthubConfig)
