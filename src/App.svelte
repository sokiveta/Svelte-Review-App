<script>
	import FeedbackForm from './components/FeedbackForm.svelte';
	import FeebdackList from './components/FeedbackList.svelte';
	import FeedbackStats from './components/FeedbackStats.svelte';
</script>

<main class="container">
	<img src="images/logo.png" alt="logo" class="responsive" />
	<FeedbackForm />
	<FeedbackStats />
	<FeebdackList />
</main>