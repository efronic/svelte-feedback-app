<script>
	// @ts-nocheck
	import { feedbacks } from './stores';
	import { v4 as uuidv4 } from 'uuid';
	import Button from './Button.svelte';
	import Card from './Card.svelte';
	import RatingSelect from './RatingSelect.svelte';

	let btnDisabled = true;
	let text = '';
	let rating = 0;
	// @ts-ignore
	let message;
	let min = 10;
	const handleInput = () => {
		if (text.trim().length <= min) {
			message = `Text must be at list ${min} characters.`;
			btnDisabled = true;
		} else {
			message = null;
			btnDisabled = false;
		}
	};
	const handleSelect = (e) => {
		rating = e.detail;
	};
	const handleSubmit = (e) => {
		if (text.trim().length > min) {
			const feedback = {
				id: uuidv4(),
				text,
				rating: +rating
			};
			feedbacks.update((items) => [feedback, ...items]);
			text = '';
		}
	};
</script>

<Card>
	<form on:submit|preventDefault={handleSubmit}>
		<RatingSelect on:rating-selected={handleSelect} />
		<div class="input-group">
			<input
				type="text"
				bind:value={text}
				on:input={handleInput}
				placeholder="Tell us something that keeps you coming back"
			/>
		</div>
		{#if message}
			<div class="message">{message}</div>
		{/if}
		<Button disabled={btnDisabled} type="submit">Send</Button>
	</form>
</Card>

<style>
	header {
		max-width: 400px;
		margin: auto;
	}

	header h2 {
		font-size: 22px;
		font-weight: 600;
		text-align: center;
	}

	.input-group {
		display: flex;
		flex-direction: row;
		border: 1px solid #ccc;
		padding: 8px 10px;
		border-radius: 8px;
		margin-top: 15px;
	}

	input {
		flex-grow: 2;
		border: none;
		font-size: 16px;
	}

	input:focus {
		outline: none;
	}

	.message {
		padding-top: 10px;
		text-align: center;
		color: rebeccapurple;
	}
</style>
