import {visionTool} from '@sanity/vision'
import {defineConfig, isDev} from 'sanity'
import {deskTool} from 'sanity/desk'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {schemaTypes} from './schemas'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'portfolio-1771',
  title: 'portfolio',

  projectId: 'e1wjuld3',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
