<template>
	<div id="app">
		<TheHeader :parent-title="title"/>
		<Loader v-show="isLoading" />
		<main class="main mx-auto container">
			<Table
				:parent-data="sortData[btnIndex]"
				:parent-index="btnIndex"
				:parent-size="perPage"
			/>
			<Pagination
				:parent-index="btnIndex"
				:parent-size="perPage"
				:parent-len="sortData.length"
				@update="updateBtnIndex"
			/>
		</main>
	</div>
</template>

<script>
	import Table from "@/components/Table";
	import Pagination from "@/components/Pagination";
	import Loader from "@/components/Loader";
	import TheHeader from "./components/TheHeader.vue";
	export default {
		name: "App",
		components: {
			Table,
			Pagination,
			Loader,
			TheHeader,
		},
		data() {
			return {
				title: "農村地方美食小吃特色料理",
				data: [],
				perPage: 10,
				btnIndex: 0,
				isLoading: true,
			};
		},
		async created() {
			await this.getData();
			this.isLoading = !this.isLoading;
		},
		computed: {
			sortData() {
				const arr = [];
				this.data.forEach((item, i) => {
					if (i % this.perPage === 0) {
						arr.push([]);
					}
					const _index = Math.floor(i / this.perPage);
					arr[_index].push(item);
				});
				return arr;
			},
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
			updateBtnIndex(val) {
				this.btnIndex = val;
			},
		},
	};
</script>

<style lang="scss" scoped>
	
	.main {
		display: flex;
		margin: {
			top: 10px;
		}
	}
</style>
