<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';

	let { children } = $props();

	function onclick() {
		toggleMode()
	}
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ModeWatcher />
{@render children()}
<Button {onclick}>Dark</Button>
