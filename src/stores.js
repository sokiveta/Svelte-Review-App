import { writable } from 'svelte/store';
export const FeedbackStore = writable([
  {
    id: 1,
    rating: 9,
    text: 'I highly recommend WonderTax Labs.',
  },
  {
    id: 2,
    rating: 10,
    text: 'WonderTax Labs customer service is second to none',
  },
  {
    id: 3,
    rating: 10,
    text: 'I was completely impressed with WonderTax Labs professionalism and customer service.',
  },
  {
    id: 4,
    rating: 9,
    text: 'WonderTax Labs staff is not only friendly but also highly skilled.',
  },
  {
    id: 5,
    rating: 10,
    text: 'The quality at WonderTax Labs is consistently outstanding, exceeding my expectations every time.',
  },
]);
