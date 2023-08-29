import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';
import CustomTooltip from './components/CustomTooltip';

function Charts({ repositories, commits }) {
    if(repositories === undefined ) return;

    const generateData = () => {
        const repoData = {};
        const data = [];
        repositories.map(repo => {
            if (commits?.[repo.id] !== undefined && commits[repo.id].length > 0) {
                commits[repo.id].map((item) => {
                    const weekName = 'Week of ' + (moment.unix(item.week).format('MMM D, YY'));
                    if (repoData[weekName] === undefined) {
                        repoData[weekName] = {};
                    }
                    repoData[weekName][repo.full_name] = item.total;
                });
            }
        });

        for(const index in repoData) {
            data.push({...repoData[index], ...{name: index}})
        }

        return data;
    }

    const createLine = (repo: object) => {
        if( commits[repo.id] === undefined ) return;

        return (
            <Line key={repo.id} type="monotone" dataKey={repo.full_name} stroke={repo.color} />
        );
    }

    const data = generateData();

    return (
        <div className="
                basis-2/3
                flex
                h-[500px]
                max-h-[500px]
                rounded-l-lg
                bg-slate-100
                flex-col
            ">
                <div className='text-2xl'>Commits for last year.</div>

                <LineChart width={850} height={450} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    { repositories.map((repo) => createLine(repo)) }
                    <CartesianGrid stroke="#ccc" />
                    <XAxis hide={true} />
                    <YAxis />
                </LineChart>
        </div>
    )
}

export default Charts;
