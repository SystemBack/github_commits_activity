import moment from "moment";
import RemoveIcon from "../../../icons/RemoveIcon";
import StarIcon from "../../../icons/StarIcon";
import UtilService from "../../../utils/UtilService";

function Repositories({ repositories, handleRemoveRepository, commits }) {
    const { numberFormat } = UtilService();

    const createRepositoriesList = (item) => {
        return (
            <li
                key={item.id}
                className={`px-2 my-1  border-l-[6px] rounded-xl  ${commits[item.id] === undefined ? 'bg-gray-700' : 'bg-black'}`}
                style={{borderColor: item.color}}
            >
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={item.owner?.avatar_url} alt={item.owner?.login || item.name} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            <a href={item.html_url} target="_blank" >{item.full_name}</a>
                        </p>
                        <div className="text-sm text-gray-500 truncate dark:text-gray-400 flex flex-row justify-between">
                            <div className="flex flex-auto">
                                <StarIcon /> <span className="text-base">{numberFormat(item.stargazers_count)}</span>
                            </div>
                            <div className="flex text-right">
                                <span className="font-bold">Last update</span>: {moment(item.updated_at).fromNow()}
                            </div>
                        </div>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <button onClick={() => handleRemoveRepository(item)} className="rounded-lg bg-red-700 p-1">
                            <RemoveIcon />
                        </button>
                    </div>
                </div>
            </li>
        )
    }

    return (
        <div className="flow-root">
            <ul role="list" className="">
                {repositories.map((item) => createRepositoriesList(item))}
            </ul>
        </div>
    )
}

export default Repositories;
