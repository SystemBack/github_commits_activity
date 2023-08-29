function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        const createLabel = (item: object) => {
            return (
                <p key={item.name} className="italic">
                    <span className="font-bold" style={{color: item.color}}>{item.name}:</span> {item.value} commits
                </p>
            );
        }

        return (
            <div className="text-sm bg-stone-50 p-3 rounded-md drop-shadow-lg">
                <p className="font-bold uppercase">{payload?.[0].payload.name || label}</p>
                {payload.map((item: object) => createLabel(item))}
            </div>
        )
    }
}

export default CustomTooltip;
