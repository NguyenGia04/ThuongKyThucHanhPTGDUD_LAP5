import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Datatable from '../components/Datatable'

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
                <div className="flex items-center gap-3 px-6 rounded-md" style={{ marginLeft: "5px", padding: "5px" }}>
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
            <div className="h-[70%] w-full">
                <div className="flex items-center gap-3 px-6 rounded-md" style={{ marginLeft: "5px", padding: "5px" }}>
                    <img src="File text 1.png" alt="Dashboard" className="w-5 h-5 m-0.5" />
                    <span className="text-xl font-bold text-pink-500">Detailed report</span>

                    <button className='flex items-center text-pink-400 gap-2 border-2 rounded-md p-2 ' style={{ marginLeft: "60%", padding: "5px" }}>
                        <img src="Download.png" alt="Download Icon" />
                        <span>Import</span>
                    </button>

                    <button className='flex items-center text-pink-400 gap-2 border-2 rounded-md p-2' style={{ padding: "5px" }}>
                        <img src="Move up.png" alt="Move Up Icon" />
                        <span>Export</span>
                    </button>

                </div>
                <Datatable />
            </div>
        </>
    )
}

export default Dashboard
