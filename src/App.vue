<template>
	<div id="app">
		<header class="header">
			<h1 class="header__tit text-center">農村地方美食小吃特色料理</h1>
		</header>
		<Loader v-show="shouldShowLoader" />
		<main class="main mx-auto container">
			<Table
				:parent-data="sortedData[btnIndex]"
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
	import Table from "@/components/Table";
	import Pagination from "@/components/Pagination";
	import Loader from "@/components/Loader";
	export default {
		name: "App",
		components: {
			Table,
			Pagination,
			Loader,
		},
		data() {
			return {
				data: [],
				sortedData: [],
				len: 0,
				perPage: 10,
				btnIndex: 0,
				shouldShowLoader: true,
			};
		},
		async created() {
			await this.getData();
			this.sortData(this.data);
			this.len = Math.ceil(this.data.length / this.perPage);
			this.toggleLoader();
		},
		methods: {
			async getData() {
				try {
					const api =
						"https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx";
					const res = await this.$http.get(api);
					this.data = res.data;
				} catch (e) {
					console.log("資料連結失敗:\n", e);
				}
			},
			sortData(arr) {
				arr.forEach((item, i) => {
					if (i % this.perPage === 0) {
						this.sortedData.push([]);
					}
					const index = Math.floor(i / this.perPage);
					this.sortedData[index].push(item);
				});
			},
			updateIndex(e) {
				this.btnIndex = e.target.value - 1;
			},
			toggleLoader() {
				this.shouldShowLoader = !this.shouldShowLoader;
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
	.main {
		display: flex;
		margin: {
			top: 10px;
		}
	}
</style>
