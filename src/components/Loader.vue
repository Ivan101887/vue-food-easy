<template>
	<div class="loader">
		<img
			src="@/assets/image/load.gif"
			alt="loading gif"
			class="loader__img mx-auto"
			width="200"
			height="200"
		/>
	</div>
</template>
<script>
	export default {
		name: "Loader",
	};
</script>
<style lang="scss" scoped>
	.loader {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: {
			color: rgba(0, 0, 0, 0.7);
		}
		&__img {
			display: block;
		}
	}
</style>