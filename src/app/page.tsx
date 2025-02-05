'use client'
import { Container, Flex, Title, Text, Button } from "@mantine/core"
import { IconPlayerPlay } from "@tabler/icons-react"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <Container size={'xs'}>
      <Flex h={'100vh'} direction={'column'} justify={'center'} align={'center'} gap={'md'}>
        <Title>สวัสดี 👋</Title>
        <Text size="lg" ta={'center'}>ยืนดีต้อนรับการทดสอบกิจกรรมระหว่างทำงานของคุณ</Text>
        <Text size="md">ระบบนี้ใช้เวลาประมาณ <Text span c={'green'}>20</Text> นาที</Text>
        <Button onClick={() => router.push('./test/step1')} leftSection={<IconPlayerPlay />}>เริ่มการทดสอบ</Button>
      </Flex>
    </Container>
  );
}
