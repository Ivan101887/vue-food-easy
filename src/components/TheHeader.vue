<template>
	<header class="header">
		<h1 class="header__tit text-center">{{ parentTitle }}</h1>
	</header>
</template>
<script>
	export default {
		name: "the-header",
		props: {
			parentTitle: {
				type: String,
				required: true,
			},
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