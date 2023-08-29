import Repositories from "./components/Repositories";
import SearchInput from "./components/SearchInput";
import RepositoriesSearched from "./components/RepositoriesSearched";

function Search({
    repositories,
    repositoriesFound,
    handleRemoveRepository,
    handleSearchedItems,
    handleAddRepository,
    commits
}) {

    return (
        <div className="
                flex
                h-1/2
                max-h-[500px]
                min-h-[500px]
                sm:h-full
                basis-1/3
                bg-searchColor
                with
                rounded-r-lg
                item
                flex-col
                overflow-x-auto
                overflow-y-auto
            ">
                <SearchInput handleSearchedItems={handleSearchedItems} />

                <RepositoriesSearched repositories={repositoriesFound} handleAddRepository={handleAddRepository}/>

                <Repositories repositories={repositories} handleRemoveRepository={handleRemoveRepository} commits={commits} />
        </div>
    )
}

export default Search;
