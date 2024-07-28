export async function fetcher<T>(input: string | URL | globalThis.Request, init?: RequestInit): Promise<T> {
	try {
        const userData = JSON.parse(localStorage.getItem('userData') || '');
		const response = await fetch(input, {
            headers: {
                "Accept": "application/json",
                "access-token": userData.accessToken,
                "client": userData.client,
                "uid": userData.email,
                "token-type": "bearer"
            },
            ...init
        });
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		return response.json();
	} catch (error) {
		throw new Error(`Response status: ${error}`);
	}
}