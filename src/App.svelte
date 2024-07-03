<script>
	import FeedbackForm from './components/FeedbackForm.svelte';
	import FeebdackList from './components/FeedbackList.svelte';
	import FeedbackStats from './components/FeedbackStats.svelte';

	let feedback = [
		{
			id: 1,
			rating: 9,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis nec nunc ultricies aliquam.'
		},
		{
			id: 2,
			rating: 4,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis nec nunc ultricies aliquam.'
		},
		{
			id: 3,
			rating: 7,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis nec nunc ultricies aliquam.'
		},
		{
			id: 4,
			rating: 1,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis nec nunc ultricies aliquam.'
		},
		{
			id: 5,
			rating: 7,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis nec nunc ultricies aliquam.'
		}
	];


	$: count = feedback.length;
	$: average = feedback.reduce((acc, curr) => acc + curr.rating, 0) / count;

	const addFeedback = (item) => {		
		feedback = [item.detail, ...feedback]
	};

	const deleteFeedback = (item) => {
		const itemId = item.detail
		feedback = feedback.filter((fb) => fb.id !== itemId)
	};
</script>

<main class="container">
	<FeedbackForm on:add-feedback={addFeedback} />
	<FeedbackStats {count} {average} />
	<FeebdackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
