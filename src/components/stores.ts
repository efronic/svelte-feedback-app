import { writable, type Writable } from 'svelte/store';
import type { FeedbackType } from '../types/types';

export const feedbacks: Writable<FeedbackType[]> = writable([
	{
		id: 'f1',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		rating: '5'
	},
	{
		id: 'f2',
		text: 'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
		rating: '6'
	},
	{
		id: 'f3',
		text: 'et dolore magnaco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
		rating: '10'
	}
]);
