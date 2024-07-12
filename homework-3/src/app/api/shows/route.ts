import { IShow } from "@/typings/show";

/* // eslint-disable-next-line @typescript-eslint/no-var-requires
 */
const shows: Array<IShow> = require('@/shows.json');

export async function GET() {
	return Response.json(shows);
}
