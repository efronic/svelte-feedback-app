<script lang="ts">
	import { feedbacks } from '../components/stores';
	import { fade, scale } from 'svelte/transition';
	import FeedbackItem from '../components/FeedbackItem.svelte';
</script>

{#each $feedbacks as fb (fb.id)}
	<div in:scale out:fade={{ duration: 500 }}>
		<FeedbackItem item={fb} />
	</div>
{/each}
