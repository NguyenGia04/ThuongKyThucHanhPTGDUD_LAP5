const Header = () => {
    return (
        <div className="header">
            {/* Tiêu đề Dashboard */}
            <span className="text-3xl font-bold text-pink-500">Dashboard</span>

            {/* Phần bên phải */}
            <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative flex items-center bg-gray-100 rounded-md px-3 w-100 h-10">
                    <img src="Search.png" alt="Search" className="w-4 h-4 mr-2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none w-full text-gray-700"
                    />
                </div>

                {/* Icons */}
                <img src="Bell 1.png" alt="Bell" className="" />
                <img src="Question 1.png" alt="Help" className="" />

                {/* Avatar */}
                <img src="Avatar 313.png" alt="Avatar" className="" />
            </div>
        </div>
    );
};


export default Header;
