import { CollectionConfig } from 'payload'

export const Journals: CollectionConfig = {
  slug: 'journals',
  fields: [
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
    },
    {
      name: 'picture',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
  ],
  hooks: {
    //before the document is saved
    beforeChange: [
      async ({ data, operation }) => {
        if (operation === 'create') {
          data.createdAt = new Date()
        }
      },
    ],
  },
}
