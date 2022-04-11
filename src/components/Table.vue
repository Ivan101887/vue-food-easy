<template>
	<table class="spotTable" id="SpotTable">
		<thead class="spotTable__thead">
			<tr class="spotTable__tr text-bolder">
				<th class="spotTable__th text-nowrap">編號</th>
				<th class="spotTable__th text-nowrap">行政區</th>
				<th class="spotTable__th text-nowrap">圖片</th>
				<th class="spotTable__th td-md text-nowrap">名稱</th>
				<th class="spotTable__th text-nowrap">介紹</th>
			</tr>
		</thead>
		<tbody class="spotTable__tbody" id="SpotTableTbody">
			<tr
				v-for="(item, index) in data"
				:key="index"
				:class="['spotTable__tr', { 'js-bg__grey': index % 2 !== 0 }]"
			>
				<td class="text-center text-grey spotTable__td">
          {{perPage * btnIndex + index + 1}}
        </td>
				<td class="spotTable__td text-nowrap"></td>
				<td class="spotTable__td">
					<div class="spotTable__smBox">
						<img
							class="spotTable__img"
							:alt="item.Name"
							:src="item.PicURL"
							width="91"
							height="54"
						/>
					</div>
				</td>
				<td class="spotTable__td">
					<a :href="item.Url" class="spotTable__link" v-if="item.Url !== ''">{{
						item.Name
					}}</a>
					<span v-else>{{ item.Name }}</span>
				</td>
				<td class="spotTable__td">
					{{
						item.HostWords.length > 50
							? item.HostWords.substring(0, 50) + "..."
							: item.HostWords
					}}
				</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
	export default {
		name: "Table",
		data() {
			return {
				data: [],
				totalLen: 0,
				perPage: 10,
				btnIndex: 0,
			};
		},
		async created() {
			try {
				const api =
					"https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx";
				const res = await this.$http.get(api);
				this.data = res.data;
				console.log(this.data);
			} catch (e) {
				console.log("資料連結失敗:\n", e);
			}
		},
		methods: {},
	};
</script>