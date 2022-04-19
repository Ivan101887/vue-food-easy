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
				v-for="(item, index) in parentData"
				:key="item.Name"
				:class="['spotTable__tr', { 'js-bg__grey': index % 2 !== 0 }]"
			>
				<td class="text-center text-grey spotTable__td">
					{{ parentSize * parentIndex + index + 1 }}
				</td>
				<td class="spotTable__td text-nowrap">{{ item.City }}</td>
				<td class="spotTable__td">
					<div class="spotTable__smBox">
						<img
							class="spotTable__img"
							:alt="item.Name"
							:src="item.PicURL"
							width="91"
							height="54"
							@mouseenter="imgHoveredIndex = index"
							@mouseout="imgHoveredIndex = -1"
						/>
						<img
							v-if="imgHoveredIndex === index"
							class="spotTable__img spotTable__img--lg"
							:src="item.PicURL"
							:alt="item.Name"
							width="348"
							height="237"
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
				imgHoveredIndex: -1,
			};
		},
		props: {
			parentData: Array,
			parentIndex: Number,
			parentSize: Number,
		},
	};
</script>
<style lang="scss" scoped>
	.spotTable {
		min-width: 50%;
		font: {
			size: 15px;
		}
		&__smBox {
			position: relative;
			width: 78px;
		}

		&__img {
			display: block;
			width: 100%;
			height: auto;
			&--lg {
				position: absolute;
				z-index: 1;
				width: 300px;
				padding: 10px;
				top: 0;
				left: calc(100% + 16px);
				background: {
					color: #fff;
				}
				box: {
					shadow: 0 0 5px rgba(0, 0, 0, 0.5);
				}
			}
		}
		&__link {
			color: #0077b5;
			&:hover {
				text: {
					decoration: none;
				}
			}
		}
		&__thead {
			background: {
				color: #f8f8f8;
			}
			border: {
				bottom: solid 2px #ccc;
			}
		}
		&__td,
		&__th {
			border: solid 1px #ddd;
			vertical-align: middle;
		}
		&__td {
			padding: 13px 10px;
			line-height: 1.25rem;
		}

		&__th {
			padding: 10px;
			line-height: 1.25rem;
			color: #707070;
		}
		&__tbody:hover {
			.spotTable {
				&__tr:hover {
					background: {
						color: #eff4f7;
					}
				}
			}
		}
	}
</style>