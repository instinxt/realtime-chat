import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";

const ChatLoading = () => {
	const SkeletonList = ({ count }) => {
		const skeletons = [];

		for (let i = 0; i < count; i++) {
			skeletons.push(<Skeleton key={i} height="45px" />);
		}

		return <>{skeletons}</>;
	};
	return (
		<Stack>
			<SkeletonList count={12} />
		</Stack>
	);
};

export default ChatLoading;
