import { faAdd, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "~/components/search_bar";
import constants from "~/config/constant";
import UserInterface from "~/interfaces/user";
import { RootState } from "~/redux/types";

interface ChatBoxProps {
	chats: any[]; // Adjust the type according to your actual data structure
	currentId: string;
	handleClickBox: (chatContent: any) => void;
}

export default function ChatBox(props: any) {
	let conversations = props.chats;
	let currentId = props.currentId;
	const [isFocusedSearchBar, setIsFocusedSearchBar] = useState(false);
	const [textSearchBar, setTextSearchBar] = useState('');
	const [resultSearchBar, setResultSearchBar] = useState<Partial<UserInterface>[]>([]);
	const userIdAuth = useSelector((state: RootState) => state.userIdAuth);

	const handleClick = (converId: any, userId: string, fullName: string, avatar: string) => {
		const otherUser = {
			userId: userId,
			fullName: fullName,
			avatar: avatar
		}
		props.handleClickBox(converId, otherUser);
	};
	const handleTimeDifferent = (updatedTime: string) => {
		const currentDateTime = new Date().getTime();
		const messageDateTime = new Date(updatedTime).getTime();

		const timeDifferenceInMilliseconds = currentDateTime - messageDateTime;
		const seconds = Math.floor(timeDifferenceInMilliseconds / 1000);
		let minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);
		const months = Math.floor(days / 30); // Note: This is a rough estimate
		const years = Math.floor(days / 365); // Note: This is a rough estimate

		let displayText;
		if (minutes == 0) {
			minutes++;
		}
		if (years > 0) {
			displayText = `${years} ${years === 1 ? 'y' : 'y'}`;
		} else if (months > 0) {
			displayText = `${months} ${months === 1 ? 'm' : 'm'}`;
		} else if (days > 0) {
			displayText = `${days} ${days === 1 ? 'd' : 'd'}`;
		} else if (hours > 0) {
			displayText = `${hours} ${hours === 1 ? 'h' : 'h'}`;
		} else {
			displayText = `${minutes} ${minutes === 1 ? 'm' : 'm'}`;
		}

		return displayText;
	};
	const handleDefaultConversation = (userId: string, fullName: string, avatar: string, conversation_id: string) => {
		const otherUser = {
			userId: userId,
			fullName: fullName,
			avatar: avatar
		}
		props.handleDefaultConversation(otherUser, conversation_id);
	}
	const handleFocusSearchBar = (newValue: boolean) => {
		setIsFocusedSearchBar(newValue);
	}
	const handleTextSearchBar = (newValue: string) => {
		setTextSearchBar(newValue);
	}
	const handleResultSearchBar = (newValue: Partial<UserInterface>[]) => {
		setResultSearchBar(newValue);
	};
	const handleClickItemSearch = async (otherId: string, full_name: string, avatar: string) => {
		handleFocusSearchBar(false)
		const url = `${constants.url_local_api}/conversations/search`;
		await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				user1_id: otherId,
				user2_id: userIdAuth,
			}),
		})
			.then((res) => res.json())
			.then(async (data) => {
				handleFocusSearchBar(false)
				let converId = data.data.result[0]._id
				handleClick(converId, otherId, full_name, avatar)

			});
	}
	useEffect(() => {
		if (conversations.length > 0) {
			const otherUsers: UserInterface[] = conversations[0].users.filter((user: UserInterface) => user._id !== currentId);
			if (otherUsers.length > 0) {
				const userId = otherUsers[0]._id;
				const fullName = otherUsers[0].full_name;
				const avatar = otherUsers[0].avatar;
				handleDefaultConversation(userId, fullName, avatar, conversations[0]['_id']);
			}
		}
	}, [conversations, currentId]);

	return (
		<div className="overflow-auto h-100 px-2 basis-1/4 flex flex-col border	 pb-4">
			<div className="sticky  bg-white z-10 top-0" >
				<h1 className="font-bold text-gray-800 text-2xl px-2 py-4">Chats</h1>
				<SearchBar
					onFocusedSearchBar={handleFocusSearchBar}
					onChangeTextSearchBar={handleTextSearchBar}
					onGetResultSearchBar={handleResultSearchBar}
				/>
			</div>
			{
				isFocusedSearchBar ?
					(
						<>
							<div
								// onClick={() => handleClick()}
								className={`py-2  bg-white h-16 flex w-full items-center hover:bg-gray-100 cursor-pointer  hover:rounded-lg  active:bg-gray-100`}
							>
								<div className="py-2 w-100 flex items-center">
									<div
										className="absolute h-10 w-10  left-3 mr-2  rounded-full p-1 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-opacity duration-300">
										<FontAwesomeIcon
											icon={faSearch}
											className="absolute   h-7 text-gray-700  cursor-pointer"
										/>
									</div>
									<div className="text-base font-semibold ml-2 mb-1 pl-10 text-gray-600">Search messages for {textSearchBar}</div>

								</div>
							</div>
							{
								resultSearchBar.map((item: any, index: number) => {
									console.log(item);

									return (
										<div
											key={index}

											onClick={() => handleClickItemSearch(item._id, item.full_name, item.avatar)}
											// onClick={() => handleClickItemSearch(item._id, userId, otherUsers[0]['full_name'], avatar)}

											className={`py-2  bg-white h-20 flex w-full items-center hover:bg-gray-100 cursor-pointer  hover:rounded-lg  active:bg-gray-100`}
										>
											<div className="px-2 w-100 flex items-center">
												<div className="basis-1/6 ">
													<img
														src={item.avatar}
														className="size-12 rounded-full"

													/>
												</div>
												<div className="ml-2 basis-5/6">
													<div className="text-base font-semibold mb-1 text-gray-600">
														{item.full_name}
													</div>

												</div>
											</div>
										</div>
									)
								})

							}
						</>
					) :
					(

						conversations.map((item: any, index: number) => {
							const otherUsers: UserInterface[] = item.users.filter((user: UserInterface) => user._id !== currentId);
							const userId = otherUsers[0]._id;
							const avatar = otherUsers[0].avatar;
							const full_name = otherUsers[0]['full_name'];
							const last_message = item.last_message_id;
							handleTimeDifferent(last_message.updatedAt);

							return (

								<div
									key={index}
									onClick={() => handleClick(item._id, userId, otherUsers[0]['full_name'], avatar)}
									className={`py-2  bg-white h-24 flex w-full items-center hover:bg-gray-100 cursor-pointer  hover:rounded-lg  active:bg-gray-100`}
								>
									<div className="px-2 w-100 flex items-center">

										<div className="basis-1/6">
											<img
												src={otherUsers.length > 0 ? otherUsers[0].avatar : ""}
												className="size-12 rounded-full"
											/>
										</div>
										<div className="ml-4 basis-5/6">
											<div className="text-base font-semibold	 mb-1 text-gray-600">{full_name}</div>
											<div
												className={`${last_message.unread ? "font-bold" : "font-normal"} flex items-center`}
											>
												<h1
													className={` text-sm text-gray-500 font-normal`}
												>
													{last_message.content.length > 25 // Change 50 to your desired length
														? `${last_message.content.slice(0, 25)}...`
														: last_message.content}
												</h1>
												<h1
													className={` px-3 text-sm text-gray-500 font-normal float-right`}
												>
													{handleTimeDifferent(last_message.updatedAt)}

												</h1>
											</div>
										</div>
										<div className={`size-2 rounded-full ${item.unread ? 'bg-blue-500' : 'bg-transparent'}`} />
									</div>
								</div>
							);
						})

					)
			}

			<button className="fixed bottom-6 left-12 bg-green-600 text-white rounded-full py-4 px-5 text-lg shadow-lg">
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</div>
	);
}
