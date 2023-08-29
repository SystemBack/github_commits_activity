import AddIcon from "../../../icons/AddIcon";

function RepositoriesSearched({repositories, handleAddRepository}) {
    if (!repositories.length) return;

    const crateRepositoryItem = (item) => {
        return (
            <li key={item.id} className="px-2 sm:py-4 hover:bg-stone-900 my-1 rounded-lg">
                <div className="flex items-center">
                    <div className="flex-1 min-w-0">
                        <p className="text-base text-gray-900 truncate dark:text-white">
                            {item.full_name}
                        </p>
                    </div>
                    <div className="inline-flex items-center">
                        <button onClick={() => handleAddRepository(item)} className="rounded-lg bg-teal-400 text-white p-1 opacity-60 hover:opacity-100">
                            <AddIcon />
                        </button>
                    </div>
                </div>
            </li>
        );
    }

    return (
        <div className="flow-root bg-gray-700">
            <ul role="list">
                {repositories.map((item) => crateRepositoryItem(item))}
            </ul>
        </div>
    )
}

export default RepositoriesSearched;
