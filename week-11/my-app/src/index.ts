export interface Env {

}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log("Request Body", request.body);
		console.log("Request Headers", request.headers);
		console.log("Request Method",request.method);

		if (request.method === 'GET') {
			return Response.json({
				message: 'You sent a get request',
			});
		} else {
			return Response.json({
				message: 'You did not send a get request',
			});
		}
	},
};

