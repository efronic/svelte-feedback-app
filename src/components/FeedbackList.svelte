<script lang="ts">
	import { each } from 'svelte/internal';
	import FeedbackItem from '../components/FeedbackItem.svelte';
	import type { FeedbackType } from '../types/types';
	export let feedback: FeedbackType[] = [];
</script>

{#each feedback as fb (fb.id)}
	<FeedbackItem item={fb} on:delete-feedback />
{/each}
