import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files'

/** @type {import('contentlayer/source-files').ComputedFields} */

// fields to be calculated on the fly
// TODO add dates (creation, update)
const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
}

// Pages contains different pages that are not part of the main
// content (Chapters, Lessons) e.g: About, terms, privacy, contibuting, etc.
const Pages = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: '**/pages/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'page title',
      required: true,
    },
    subtitle: {
      type: 'string',
      description: 'page subtitle',
      required: false,
    },
  },
  computedFields,
}))

// Special document that contains all the parts needed for
// chapter introductions (A title, a related image URL and some descriptive text)
const Introduction = defineDocumentType(() => ({
  name: 'Introduction',
  filePathPattern: '**/introductions/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Section title',
      required: true,
    },
    image: {
      type: 'string',
      description: 'Associated image',
      required: true,
    },
  },
  computedFields,
}))

// Lesson content
const Lesson = defineDocumentType(() => ({
  name: 'Lesson',
  filePathPattern: '**/lessons/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Lesson/Challenge title',
      required: true,
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
      required: false,
    },
  },
  computedFields,
}))

// Chapter Overview
const Chapter = defineDocumentType(() => ({
  name: 'Chapter',
  filePathPattern: '**/chapters/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Chapter title',
      required: true,
    },
    image: {
      type: 'string',
      description: 'Associated image',
      required: true,
    },
    position: {
      type: 'number',
      description: 'Chapter index',
      required: true,
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
  computedFields,
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Pages, Lesson, Introduction, Chapter],
})
