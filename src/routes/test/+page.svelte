<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	 $: ({ board,titleList } = data);

	
	data.board.forEach((item:any) => {
		//console.log('>>>> ' + item.title)
		//console.log('>>>> ' + item.content)
	});
    
	function clickP(){
		alert("test");
	}

</script>

<div class="text-column">
	<h1>테스트 페이지</h1>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<p on:click={clickP}>
		몽고디비 데이터 연동 테스트
	</p>

	{#each titleList as t }
			<p>{t}</p>
	{/each}

	<ul>
		{#each board as item}
        <li>{item.title} <br/>  content : {item.content}</li>
    {/each}
	</ul>

	<pre>타입스크립트 처음 써보는데 드럽게 어렵네요</pre>

	<p>
		에베베베베베베
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div>