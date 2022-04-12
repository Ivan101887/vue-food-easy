<template>
	<div id="app">
		<header class="header">
			<h1 class="header__tit text-center">農村地方美食小吃特色料理</h1>
		</header>
		<main class="main mx-auto container">
			<Table 
				:parent-data="data[btnIndex]"
				:parent-btn-index="btnIndex"
				:parent-per-page="perPage"
			/>
			<pagination 
				:parent-btn-index="btnIndex"
				:parent-per-page="perPage"
				:parent-len="len"
				@update-index="updateIndex"
			/>
		</main>
	</div>
</template>

<script>
	import Table from "@/components/Table.vue";
	import Pagination from "./components/Pagination.vue";
	export default {
		name: "App",
		components: {
			Table,
			Pagination,
		},
		data() {
			return {
				data: [],
				len:0,
				perPage: 10,
				btnIndex: 0,
			};
		},
		async created() {
			try {
				const api =
					"https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx";
				const res = await this.$http.get(api);
				this.sortData(res.data);
				this.len = Math.ceil(res.data.length / this.perPage);
			} catch (e) {
				console.log("資料連結失敗:\n", e);
			}
		},
		methods: {
			sortData(arr) {
				arr.forEach((item, i) => {
					if (i % this.perPage === 0) {
						this.data.push([]);
					}
					const index = Math.floor(i / this.perPage);
					this.data[index].push(item);
				});
			},
			updateIndex(e) {
				this.btnIndex = e.target.value - 1;
			}
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
	.main {
		display: flex;
		margin: {
			top: 10px;
		}
	}
</style>
