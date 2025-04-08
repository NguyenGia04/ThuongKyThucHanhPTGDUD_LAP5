const Card = ({ title, value, percent, iconSrc, bgColor, textColor }) => {
    return (
        <div className={`rounded-2xl justify-between h-35 relative ${bgColor}`}>
            <div className="absolute top-4 right-4">
                <img src={iconSrc} alt={`${title} icon`} className="w-12 h-12" />
            </div>

            <div className="flex flex-col items-start">
                <span className={`font-medium mb-2 ${textColor}`} style={{ marginLeft: '10px', marginTop: '10px' }}>
                    {title}
                </span>
                <h1 className={`text-3xl font-bold ${textColor}`} style={{ marginLeft: '10px' }}>
                    {value}
                </h1>
                <div className="flex items-center gap-2" style={{ marginLeft: '10px' }}>
                    <p className="text-green-500 font-semibold text-lg flex items-center">
                        {percent}
                    </p>
                    <span className="text-gray-500 text-sm">Period of change</span>
                </div>
            </div>
        </div>
    )
}

export default Card;