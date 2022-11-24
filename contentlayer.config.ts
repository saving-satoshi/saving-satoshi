import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files'

/** @type {import('contentlayer/source-files').ComputedFields} */

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

const Introduction = defineDocumentType( () => ({
  name: 'Introduction',
  filePathPattern: '**/introductions/*.mdx',
  fields: {
    title: { 
      type: 'string',
      description: 'Section title',
      required: true 
    },
    image: { 
      type: 'string', 
      description: 'Associated image',
      required: true 
    }
  },
  computedFields
}))

const Lesson = defineDocumentType( () => ({
  name: 'Lesson',
  filePathPattern: '**/lessons/*.mdx',
  fields: {
    title: { 
      type: 'string',
      description: 'Lesson/Challenge title',
      required: true 
    },
    // TODO add this type as nested
    contentType: {
      type: 'enum',
      description: 'Content type to be shown',
      options: ['lesson', 'challenge', 'end'],
      default: 'lesson',
    },
    image: { 
      type: 'string', 
      description: 'Associated image',
      required: false 
    }
  },
  computedFields
}))

const Chapter = defineDocumentType( () =>({
  name: 'Chapter',
  filePathPattern: '**/chapters/*.mdx',
  fields: {
      title: { 
        type: 'string',
        description: 'Chapter title',
        required: true 
      },
      image: { 
        type: 'string', 
        description: 'Associated image',
        required: true 
      },
      position: { 
        type: 'number',
        description: 'Chapter index',
        required: true 
      },
      lessons: {
        type: 'list',
        of: Lesson,
        required: false,
      },
      intro: {
        type: 'list',
        of: Introduction,
        required: true,
      },
  }, 
  computedFields
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Lesson, Introduction, Chapter,],
})
