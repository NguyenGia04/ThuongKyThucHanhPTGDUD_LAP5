import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar p-4 border-r-2">
            <div className="flex items-center h-[10%] w-full">
                <img src="Image 1858.png" alt="Logo" className="" />
            </div>


            <ul className="text-gray-700 font-medium space-y-2 h-[45%] w-full">
                <li>
                    <Link to="/" className="flex items-center gap-3 px-4 py-2 rounded-md">
                        <img src="Squares four 1.png" alt="Dashboard" className="w-5 h-5" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className="flex items-center gap-3 px-4 py-2 rounded-md">
                        <img src="Folder.png" alt="Projects" className="w-5 h-5" />
                        <span>Projects</span>
                    </Link>
                </li>
                <li>
                    <Link to="/teams" className="flex items-center gap-3 px-4 py-2 rounded-md">
                        <img src="Groups.png" alt="Teams" className="w-5 h-5" />
                        <span>Teams</span>
                    </Link>
                </li>
                <li>
                    <Link to="/analytics" className="flex items-center gap-3 px-4 py-2 rounded-md">
                        <img src="Pie chart.png" alt="Analytics" className="w-5 h-5" />
                        <span>Analytics</span>
                    </Link>
                </li>
                <li>
                    <Link to="/messages" className="flex items-center gap-3 px-4 py-2 rounded-md">
                        <img src="Chat.png" alt="Messages" className="w-5 h-5" />
                        <span>Messages</span>
                    </Link>
                </li>
                <li>
                    <Link to="/integrations" className="flex items-center gap-3 px-4 py-2 rounded-md">
                        <img src="Code.png" alt="Integrations" className="w-5 h-5" />
                        <span>Integrations</span>
                    </Link>
                </li>
            </ul>

            <div className="flex h-[40%] w-full justify-center items-center p-6">
                <div className="bg-blue-50 rounded-2xl w-[80%] p-6">
                    <div className="flex justify-center items-center mb-4">
                        <img src="Group.png" alt="Illustration" className="h-60 w-auto" />
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-bold text-gray-700 mb-2">V2.0 is available</p>
                        <button className="bg-white text-blue-400 border border-blue-400 w-[80%] py-2 rounded">
                            Try now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
