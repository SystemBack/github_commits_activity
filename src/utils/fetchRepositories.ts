import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: import.meta.env.VITE_API_KEY
});

const fetchRepositories = async (search: string) => {
    try {
        const searchQuery = '?per_page=5&q=' + encodeURIComponent(search)
        const response = await octokit.request(`GET /search/repositories${searchQuery}`, {
            headers: {
                'X-GitHub-Api-Version': import.meta.env.VITE_API_VERSION
            }
        });

        return response.data.items;
    } catch(error) {
        console.log(error);
    }
}

const fetchCommitsByRepository = async (owner: string, repository: string, id: number) => {
    try {
        const response = await octokit.request(`GET /repos/${owner}/${repository}/stats/commit_activity`, {
            owner: owner,
            repo: repository,
            headers: {
                'X-GitHub-Api-Version': import.meta.env.VITE_API_VERSION
            }
        });

        const  data = {};
        data[id] = response.data;

        return data;
    } catch(error) {
        console.log(error);
    }
}

const fetchData = () => {
    return {
        getRepositories: (search: string) => fetchRepositories(search),
        getCommitsByRepository: (owner: string, repository: string, id: number) => fetchCommitsByRepository(owner, repository, id),
    };
}

export default fetchData;
