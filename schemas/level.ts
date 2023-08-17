import {defineType} from 'sanity'

export default defineType({
  title: 'Level',
  name: 'level',
  type: 'document',
  fields: [
    {
      title: 'Level count',
      name: 'level',
      type: 'number',
    },
  ],
})
