import { MembershipData } from 'src/entities/group/types/group';

export const MEMBERSHIP_ROLE_TEXT: Record<MembershipData['role'], string> = {
	OWNER: '모임장',
	MEMBER: '멤버',
} as const;
