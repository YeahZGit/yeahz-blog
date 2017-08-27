export default function(comment) {
	for(let i = 0; i < comment.length; i ++)
		for(let j = 0; j < comment[i].replies.length; j ++) {
			if(comment[i].replies[j].reply_to == comment[i]._id) {
				comment[i].replies[j].reply_to_name = comment[i].username;
				continue;
			}
			for(let l = 0; l < comment[i].replies.length; l ++) {
				if(comment[i].replies[j].reply_to == comment[i].replies[l]._id) {
					comment[i].replies[j].reply_to_name = comment[i].replies[l].username;
					break;
				}
			}
		}
	return comment;
}

