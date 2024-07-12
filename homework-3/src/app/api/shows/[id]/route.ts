import { IShow } from "@/typings/show";

const showsJson = require('@/shows.json');

export async function GET(_request: Request, { params }: { params: { id: string } }) {
	if (params.id) {
		const show = showsJson.shows.find((show: IShow) => show.id === params.id);

		if (show) {
			return Response.json(show);
		}
	}

	return null;
}
