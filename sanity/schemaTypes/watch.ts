import { defineField, defineType } from 'sanity';

export const watch = defineType({
  name: 'watch',
  title: 'Watches',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Watch Name',
      type: 'string',
      description: 'e.g., Rolex Submariner Date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reference',
      title: 'Reference Number',
      type: 'string',
      description: 'e.g., 126610LN',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Sold', value: 'sold' },
          { title: 'Reserved', value: 'reserved' },
        ],
      },
      initialValue: 'available',
    }),
    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'string',
      options: {
        list: [
          { title: 'Submariner', value: 'submariner' },
          { title: 'Daytona', value: 'daytona' },
          { title: 'GMT-Master II', value: 'gmt-master' },
          { title: 'Datejust', value: 'datejust' },
          { title: 'Day-Date', value: 'day-date' },
          { title: 'Explorer', value: 'explorer' },
          { title: 'Sea-Dweller', value: 'sea-dweller' },
          { title: 'Yacht-Master', value: 'yacht-master' },
          { title: 'Sky-Dweller', value: 'sky-dweller' },
          { title: 'Air-King', value: 'air-king' },
        ],
      },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'Year of production',
    }),
    defineField({
      name: 'caseDiameter',
      title: 'Case Diameter',
      type: 'string',
      description: 'e.g., 41mm',
    }),
    defineField({
      name: 'dialColor',
      title: 'Dial Color',
      type: 'string',
      description: 'e.g., Black, Blue, Green',
    }),
    defineField({
      name: 'material',
      title: 'Material',
      type: 'string',
      options: {
        list: [
          { title: 'Stainless Steel', value: 'steel' },
          { title: 'Yellow Gold', value: 'yellow-gold' },
          { title: 'White Gold', value: 'white-gold' },
          { title: 'Rose Gold', value: 'rose-gold' },
          { title: 'Two-Tone', value: 'two-tone' },
          { title: 'Platinum', value: 'platinum' },
        ],
      },
    }),
    defineField({
      name: 'condition',
      title: 'Condition',
      type: 'string',
      options: {
        list: [
          { title: 'Unworn', value: 'unworn' },
          { title: 'Excellent', value: 'excellent' },
          { title: 'Very Good', value: 'very-good' },
          { title: 'Good', value: 'good' },
        ],
      },
    }),
    defineField({
      name: 'box',
      title: 'Box Included',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'papers',
      title: 'Papers Included',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'reference',
      media: 'images.0',
    },
  },
});




