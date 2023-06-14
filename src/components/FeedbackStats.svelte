<script lang="ts">
    import { feedbacks } from '../components/stores';
	$: count = $feedbacks.length;
	$: average = $feedbacks.reduce((acc, curr) => acc + parseInt(curr.rating), 0) / count;
</script>

<div class="feedback-stats">
	<h4>{count} Reviews</h4>
	<h4>Average Rating: {average ? average.toFixed(2) : 0}</h4>
</div>

<style>
	.feedback-stats {
		display: flex;
		justify-content: space-between;
		margin: 20px 0;
	}
</style>
