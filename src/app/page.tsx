'use client'
import { Container, Flex, Title, Text, Button, Alert } from "@mantine/core"
import { IconInfoCircle, IconPlayerPlay } from "@tabler/icons-react"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <Container size={'xs'}>
      <Flex h={'100vh'} direction={'column'} justify={'center'} align={'center'} gap={'md'}>
        <Title>สวัสดีค่ะ 👋</Title>
        <Text size="lg" ta={'center'}>มาผ่อนคลายความเหนื่อยล้าจากการทำงานของคุณกัน</Text>
        <Text size="md">ระบบนี้ใช้เวลาประมาณ <Text span c={'green'}>5</Text> นาที</Text>
        <Button onClick={() => router.push('./test/step1')} leftSection={<IconPlayerPlay />}>เริ่มการทดสอบ</Button>
        <Alert variant="light" color="blue" icon={<IconInfoCircle size={20} />}>
          ช่วยให้คะแนนหลังจากทำเสร็จด้วยนะคะ ขอบคุณค่ะ
        </Alert>
      </Flex>
    </Container>
  );
}
