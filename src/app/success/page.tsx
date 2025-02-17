'use client'
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Container, Flex, Stack, Title, Text, Button } from "@mantine/core";
import ImageSet from "./components/view";
import { IconReload } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

function Page() {
    const [showConfetti, setShowConfetti] = useState(true);
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => setShowConfetti(false), 7000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Flex justify={'center'} style={{ textAlign: 'center' }} align={'center'} direction={'column'} h={'90vh'}>
            {showConfetti && <Confetti />}
            <Container size={'xs'}>
                <Stack gap={'lg'}>
                    <ImageSet />
                    <Title order={3} c={'green'}>คำตอบของคุณส่งถึงเราแล้ว ✅</Title>
                    <Text fs="italic" >ขอบคุณค่ะ ❤️</Text>
                    <Button fullWidth leftSection={<IconReload size={16} />} onClick={() => router.push('./')}>ทำใหม่อีกรอบ</Button>
                </Stack>
            </Container>
        </Flex>
    );
}

export default Page;
