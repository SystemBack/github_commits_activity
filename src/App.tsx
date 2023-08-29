import { useEffect, useState } from 'react';
import './App.css'
import Charts from './components/charts/Charts';
import Search from './components/search/Search';
import fetchData from './utils/fetchRepositories';
import UtilService from './utils/UtilService';

function App() {
    const [repositories, setRepositories] = useState([]);
    const [repositoriesFound, setRepositoriesFound] = useState([]);
    const [commits, setCommits] = useState({});
    const resource = fetchData();
    const { getColor } = UtilService();

    useEffect(() => {
        Promise.all(
            repositories.map(repo => {
                return resource.getCommitsByRepository(repo.owner.login, repo.name, repo.id)
            })
        ).then(data => {
            data.map(res => {
                const keys = Object.keys(res);
                console.log(res);

                if(res[keys[0]].length > 0) {
                    setCommits({...commits, ...res});
                }
            });
        });
    }, [repositories]);

    const handleSearchedItems = (repos) => {
        setRepositoriesFound(repos);
    }

    const handleAddRepository = (repo) => {
        const newList = repositoriesFound.filter((item) => item.id !== repo.id);
        setRepositoriesFound(newList);
        const repeatedRepo = repositories.filter((item) => item.id === repo.id);
        if (repeatedRepo.length > 0) return;

        repo['color'] = getColor();
        setRepositories([...repositories, repo]);
    }

    const handleRemoveRepository = (repo) => {
        const newList = repositories.filter((item) => item.id !== repo.id);
        setRepositories(newList);
        delete commits[repo.id];
        setCommits(commits);
    }

    return (
        <div className='
                m-auto
                flex
                min-h-screen
                w-full
                items-center
                px-[40px]
            '>
                <Charts repositories={repositories} commits={commits}/>

                <Search
                    repositories={repositories}
                    repositoriesFound={repositoriesFound}
                    handleRemoveRepository ={handleRemoveRepository}
                    handleSearchedItems={handleSearchedItems}
                    handleAddRepository={handleAddRepository}
                    commits={commits}
                />

        </div>
    )
}

export default App;
