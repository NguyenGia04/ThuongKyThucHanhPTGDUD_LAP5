import { useState, useEffect } from 'react'

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

const Dashboard = () => {
    const [cardData, setCardData] = useState([])

    useEffect(() => {
        fetch('https://67f5764a913986b16fa4a74e.mockapi.io/Card')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then((data) => setCardData(data))
            .catch((error) => console.error('Error fetching API:', error))
    }, [])

    return (
        <>
            <div className="h-[30%] w-full">
                <div className="flex items-center gap-3 px-6 rounded-md">
                    <img src="Squares four 1.png" alt="Dashboard" className="w-5 h-5 m-0.5" />
                    <span className="text-xl font-bold text-pink-500">Dashboard</span>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {cardData.map((card) => (
                        <Card
                            key={card.id}
                            title={card.title}
                            value={card.value}
                            percent={card.percent}
                            iconSrc={card.iconSrc}
                            bgColor={card.bgColor}
                            textColor={card.textColor}
                        />
                    ))}
                </div>
            </div>
            <div className="h-[70%] w-full bg-amber-100"></div>
        </>
    )
}

export default Dashboard
