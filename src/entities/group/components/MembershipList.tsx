import { useQuery } from '@tanstack/react-query';

import { membershipOptions } from 'src/entities/group/queries/group';

export default function MembershipList() {
	const { data, isLoading, isError } = useQuery(membershipOptions);

	if (isLoading) {
		return <div>로딩 중...</div>;
	}

	if (isError) {
		return <div>에러 발생</div>;
	}

	if (data?.length === 0) {
		return <div>가입한 모임이 없습니다.</div>;
	}

	return <div>{data?.map(membership => <div key={membership.id}>{membership.group_name}</div>)}</div>;
}
