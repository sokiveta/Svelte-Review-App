import { writable } from 'svelte/store';
export const FeedbackStore = writable([
  {
    id: 1,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis nec nunc ultricies aliquam.',
  },
  {
    id: 2,
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis nec nunc ultricies aliquam.',
  },
  {
    id: 3,
    rating: 7,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis nec nunc ultricies aliquam.',
  },
  {
    id: 4,
    rating: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis nec nunc ultricies aliquam.',
  },
  {
    id: 5,
    rating: 7,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis nec nunc ultricies aliquam.',
  },
]);
