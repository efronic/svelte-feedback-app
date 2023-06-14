<script>
	import FeedbackForm from '../components/FeedbackForm.svelte';
	import { feedbacks } from '../components/stores';
	import FeedbackList from '../components/FeedbackList.svelte';
	import FeedbackStats from '../components/FeedbackStats.svelte';
</script>

<main class="container">
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList/>
</main>
