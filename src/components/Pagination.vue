<template>
	<div class="page">
		<input
			type="button"
			:value="index + 1"
			v-for="(item, index) in parentLen"
			:key="item"
			:class="['page__btn', { 'page__btn--active': parentBtnIndex === index }]"
			:disabled="parentBtnIndex === index"
			@click="$emit('update-index', $event)"
		/>
	</div>
</template>
<script>
	export default {
		name: "Pagination",
		data() {
			return {
				nowPage: this.parentBtnindex,
			};
		},
		props: {
			parentPerPage: Number,
			parentBtnIndex: Number,
			parentLen: Number,
		},
		methods: {
			clickBtnIndex(e) {
				this.nowPage = e.target.value;
			},
		},
	};
</script>
<style lang="scss" scoped>
	.page {
		display: flex;
		flex: {
			direction: column;
		}
		margin: {
			left: 23px;
		}
		&__btn {
			position: relative;
			margin: {
				top: 6px;
				bottom: 6px;
			}
			border: 0;
			background: {
				color: transparent;
			}
			cursor: pointer;
			font: {
				size: 15px;
			}
			color: #888;
			&:hover {
				color: #666;
			}
			&--active {
				color: #666;
				font: {
					weight: 600;
				}
				&:disabled {
					cursor: default;
				}
				border: {
					right: 3px solid #0077b5;
				}
			}
		}
	}
</style>