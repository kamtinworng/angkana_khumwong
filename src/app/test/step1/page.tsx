'use client'
import { Button, Text, Stack, Title, Blockquote } from "@mantine/core"
import Computer from "./components/computer"
import { IconArrowRight, IconInfoCircle } from "@tabler/icons-react"
import { useTimeout } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Page() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { start } = useTimeout(() => setIsLoading(false), 5000);
    const router = useRouter()

    useEffect(() => {
        start()
    }, [start])

    return (
        <Stack gap={'lg'}>
            <Computer />
            <Title order={2}>ลองปรับหน้าจอให้อยู่ในระดับสายตาดูก่อน</Title>
            <Text>แล้วลองนั่งหลังตรง</Text>
            <Button onClick={() => router.push('./step2')} loading={isLoading} rightSection={<IconArrowRight />}>ปรับแล้ว</Button>
            <Blockquote color="blue" icon={<IconInfoCircle />} >
                เนื่องจากเป็นวัยที่มีกิจกรรมเกี่ยวข้องโดยตรง ที่จะต้องทำงานในท่าเดิมซ้ำๆ ทำให้เป็นวัยที่พบปัญหาออฟฟิศซินโดรมได้บ่อยที่สุด และหลีกเลี่ยงสาเหตุได้ค่อนข้างยาก เพราะก็ยังคงต้องกลับมาทำงานซ้ำแบบเดิมอีก
                ดังนั้นจึงเป็นกลุ่มที่ต้องให้ความสำคัญกับการรักษาที่ผสมผสานหลายๆ วิธีเข้าด้วยกัน เช่น ปรับทั้งท่านั่ง ท่าทางที่ผิด และหลังการรักษาอาการปวดเฉียบพลัน เมื่ออาการดีขึ้นแล้ว ก็ต้องออกกำลังกายทั้งการยืดเหยียด และการออกกำลังกายเพื่อสร้างความแข็งแรงให้กลุ่มกล้ามเนื้อหลักที่ใช้ในการทำงานอย่างสม่ำเสมอ เพื่อลดโอกาสการกลับมาเป็นใหม่ หรือให้กลับมาเป็นใหม่ช้าที่สุด
            </Blockquote>
        </Stack>
    )
}

export default Page