// eslint-disable-next-line @typescript-eslint/no-var-requires
const shows = require('@/shows.json');

export async function GET() {
	return Response.json(shows);
}
