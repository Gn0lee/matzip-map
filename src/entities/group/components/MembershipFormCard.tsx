import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Input,
	Textarea,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Stack,
	Button,
	Heading,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateGroup } from 'src/entities/group/hooks/mutation';

const schema = z.object({
	name: z.string().min(1, '이름은 필수입니다'),
	description: z.string().min(1, '소개글은 필수입니다'),
});

type FormValues = z.infer<typeof schema>;

export default function MembershipFormCard() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
	});

	const { mutate, isPending } = useCreateGroup();

	const onSubmit: SubmitHandler<FormValues> = data => {
		mutate(data, {
			onSuccess: () => {
				reset();
			},
		});
	};

	return (
		<Card>
			<CardHeader>
				<Heading as="h4" size="md">
					새 모임 만들기
				</Heading>
			</CardHeader>
			<CardBody>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Stack spacing={4}>
						<FormControl isInvalid={errors.name !== undefined}>
							<FormLabel htmlFor="name">이름</FormLabel>
							<Input id="name" placeholder="이름을 입력하세요" {...register('name')} />
							<FormErrorMessage>{errors.name?.message}</FormErrorMessage>
						</FormControl>
						<FormControl isInvalid={errors.description !== undefined}>
							<FormLabel htmlFor="description">소개글</FormLabel>
							<Textarea id="description" placeholder="소개글을 입력하세요" {...register('description')} />
							<FormErrorMessage>{errors.description?.message}</FormErrorMessage>
						</FormControl>
					</Stack>
				</form>
			</CardBody>
			<CardFooter>
				<Button colorScheme="blue" onClick={handleSubmit(onSubmit)} disabled={isPending}>
					모임 만들기
				</Button>
			</CardFooter>
		</Card>
	);
}
