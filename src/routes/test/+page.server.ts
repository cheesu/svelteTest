// +page.server.ts
import { board } from '$db/tutorials';
import type { PageServerLoad } from './$types';
 
export const load: PageServerLoad = async function () {
	console.log('>>>> start');
	const data = await board
		.find(
			{}
			,{
				projection: {
					_id: String,
					title: String,
					content: String
				}
			}
		)
		.toArray();
 
	
	data.forEach((item) => {
		console.log('>>>> title : ' + item.title);
		if (item.title.length > 14) {
			item.length = item.title.length * 0.7
		} else {
			item.length = item.title.length * 0.8
		}
	})
	
	const loadData = JSON.parse(JSON.stringify(data))
	return {
		board: loadData
	};
};