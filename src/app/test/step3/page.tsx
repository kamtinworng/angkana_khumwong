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
            <Title order={2}>ลองดื่มน้ำให้สดชื่นก่อนน่ะ</Title>
            <Text>หยิบขวดน้ำหรือแก้วน้ำใกล้ตัวคุณแล้วดื่มมันมันดู</Text>
            <Button onClick={() => router.push('./step4')} loading={isLoading} rightSection={<IconArrowRight />}>สดชื่นมาก</Button>
            <Blockquote color="blue" cite="– อังคณา คุ้มวงษ์" icon={<IconInfoCircle />} >
                เมื่อใช้คอมพิวเตอร์หรือใช้งานหน้าจอโทรศัพท์เป็นเวลานาน ควรพักสายตาทุก ๆ 20 นาที โดยใช้วิธีการมองออกไปไกล ๆ การมองในระยะไกลจะช่วยลดการเพ่งของสายตาที่ใช้งานอย่างหนักได้ การเพ่งสายตาเป็นระยะเวลานาน อาจส่งผลต่อสุขภาพในด้านอื่น ๆ ได้อีก เช่น อาการปวดศรีษะ น้ำตาไหล ตาพร่ามัว และมีอาการตาแห้งตามมางออกกำลังกายทั้งการยืดเหยียด และการออกกำลังกายเพื่อสร้างความแข็งแรงให้กลุ่มกล้ามเนื้อหลักที่ใช้ในการทำงานอย่างสม่ำเสมอ เพื่อลดโอกาสการกลับมาเป็นใหม่ หรือให้กลับมาเป็นใหม่ช้าที่สุด
            </Blockquote>
        </Stack >
    )
}

export default Page