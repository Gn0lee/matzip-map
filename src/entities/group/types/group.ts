export interface GroupData {
	id: string;
	name: string;
	description: string;
}

export interface MembershipData {
	id: number;
	role: 'OWNER' | 'MEMBER';
	group_id: string;
	group_name: string;
	group_description: string;
}
