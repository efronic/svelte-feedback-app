<script>
	// let firstName = 'Efron';
	// let lastName = 'Afar';
	// let color = 'black';
	// let show = true;
	// let users = [
	// 	{ id: 1, name: 'Efron' },
	// 	{ id: 2, name: 'Sarah' },
	// 	{ id: 3, name: 'Bob' }
	// ];
	// const toggle = () => {
	// 	color = color === 'black' ? 'green' : 'black';
	// 	show = !show;
	//     users = [...users, { id: 4, name: 'New User' }]
	// };
	// $: fullName = `${firstName} ${lastName}`;
	import FeedbackList from '../components/FeedbackList.svelte';
	import FeedbackStats from '../components/FeedbackStats.svelte';

	let feedback = [
		{
			id: 'f1',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			rating: '5'
		},
		{
			id: 'f2',
			text: 'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
			rating: '4.2'
		},
		{
			id: 'f3',
			text: 'et dolore magnaco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
			rating: '1.9'
		}
	];
	$: count = feedback.length;
	$: average = feedback.reduce((acc, curr) => acc + parseInt(curr.rating), 0) / count;
	const deleteFeedback = (/** @type {any} */ e) => {
		const itemId = e.detail;
		feedback = feedback.filter((item) => item.id !== itemId);
	};
</script>

<!-- <h1 style="color: {color}">Hello {fullName}</h1> -->
<main class="container">
	<FeedbackStats {count} {average} />
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
<!-- {#if show}
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{:else}
	<p>Not showing</p>
{/if}
{#each users as user}
	<p>{user.id}: {user.name}</p>
{/each}
<button on:click={toggle}>Change color</button> -->
