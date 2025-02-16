'use client'
import { Button, Text, Stack, Title, Blockquote } from "@mantine/core"
import { IconArrowRight, IconInfoCircle } from "@tabler/icons-react"
import { useTimeout } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ImageSet from "./components/view";

function Page() {
    const router = useRouter()


    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { start } = useTimeout(() => setIsLoading(false), 5000);


    useEffect(() => {
        start()
    }, [start])



    return (
        <Stack gap={'lg'}>
            <ImageSet />
            <Title order={2}>ลองดื่มน้ำให้สดชื่นก่อน</Title>
            <Text>หยิบขวดน้ำหรือแก้วน้ำใกล้ตัวคุณแล้วดื่มมันมันดู</Text>
            <Button onClick={() => router.push('./step4')} loading={isLoading} rightSection={<IconArrowRight />}>สดชื่นมาก</Button>
            <Blockquote color="blue" icon={<IconInfoCircle />} >
                การดื่มน้ำระหว่างทำงานช่วยให้สมองทำงานได้ดีขึ้น
                เพิ่มสมาธิ ความจำ และลดความเครียด อีกทั้งยังช่วยป้องกันอาการปวดหัว
                ทำให้รู้สึกสดชื่นและลดอาการเมื่อยล้าของกล้ามเนื้อ
                และการดื่มน้ำยังส่งผลดีต่อผิวพรรณ ทำให้ชุ่มชื้นและดูมีสุขภาพดี
                ซึ่งจะทำให้ร่างกายและสมองทำงานได้อย่างมีประสิทธิภาพตลอดวัน
            </Blockquote>
        </Stack >
    )
}

export default Page