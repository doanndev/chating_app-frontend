import router from "next/router";
import { useRouter } from 'next/navigation';

export default function Modal() {
    const router = useRouter();

    const handleLogout = async () => {
        await localStorage.removeItem("jwt_token_key");
        router.push('/auth');
    }   
    
    return (
        <div className="absolute top-2 left-16 mt-16 w-40 shadow-lg border rounded-lg">
            <div className="bg-white p-4 rounded-md">
                <ul>
                    <li className="hover:bg-gray-200 text-gray-700 cursor-pointer h-10 items-center flex rounded-lg font-bold active:bg-gray-300 border-b">
                        <h1 className="p-2">PROFILE</h1>
                    </li>
                    <li className="hover:bg-gray-200 text-gray-700 cursor-pointer h-10 items-center flex rounded-lg font-bold active:bg-gray-300 border-b">
                        <h1 className="p-2">SETTINGS</h1>
                    </li>
                    <li className="hover:bg-gray-200 text-gray-700 cursor-pointer h-10 items-center flex rounded-lg font-bold active:bg-gray-300">
                        <h1 className="p-2" onClick={handleLogout}>LOGOUT</h1>
                    </li>
                </ul>
            </div>
        </div>
    );
}
