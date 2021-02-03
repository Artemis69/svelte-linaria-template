<script>
	export let name;

	import * as styles from './App';
</script>

<main class={styles.main}>
	<h1 class={styles.heading}>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial" class={styles.link}>Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>