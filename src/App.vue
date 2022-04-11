<template>
	<div id="app">
		<header class="header">
			<h1 class="header__tit text-center">農村地方美食小吃特色料理</h1>
		</header>
		<main class="main mx-auto container">
      <Table />
    </main>
	</div>
</template>

<script>
import Table from '@/components/Table.vue'
	export default {
		name: "App",
		components: {
      Table
    },

	};
</script>

<style lang="scss" scoped>
	.header {
		padding: {
			top: 15px;
			bottom: 15px;
		}
		&__tit {
			font: {
				size: 2rem;
				weight: 600;
			}
		}
	}
</style>
