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
 
	let titles : any[] = [];
	data.forEach((item) => {
		console.log('>>>> title : ' + item.title);
		item.length = item.title.length

        titles.push(item.title);
	})
	
	const loadData = JSON.parse(JSON.stringify(data))
	return {
		board: loadData,
        titleList : titles
	};
};