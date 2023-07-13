import { Link } from 'react-router-dom';

const SampleNav = () => {
    return (
        <div className="bg-gray-800">
            {/* 동영상 배경 */}
            <div className="relative h-0 pb-16/9">
                <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src="src/go.mp4" type="video/mp4" />
                </video>
            </div>

            {/* 내비게이션 메뉴 */}
            <div className="p-3 flex justify-center text-2xl">
                <div className="text-gray-300 p-3 font-extrabold">
                    <Link to="/">Main</Link>
                </div>
                <div className="text-gray-300 p-3 font-extrabold">
                    <Link to="/about">About</Link>
                </div>
                <div  className="text-gray-300 p-3 font-extrabold">
                    <Link to="/products/list">Products</Link>
                </div>
                <div className="text-gray-300 p-3 font-extrabold">
                    <Link to="/board/list">Board</Link>
                </div>
            </div>
        </div>
    );
}

export default SampleNav;
