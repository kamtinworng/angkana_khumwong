'use client'
import { Button, Text, Stack, Title, Blockquote } from "@mantine/core"
import { IconArrowRight, IconInfoCircle } from "@tabler/icons-react"
import { useInterval, } from "@mantine/hooks";
import { useEffect, useState } from "react";
import Tree from "./components/view";
import { useRouter } from "next/navigation";

function Page() {
    const router = useRouter()
    const [seconds, setSeconds] = useState(60);
    const interval = useInterval(() => setSeconds((s) => s - 1), 1000);

    const [loading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        interval.start();
        if (seconds < 1) {
            setIsLoading(false)
        }
        return interval.stop;
    }, [seconds]);

    return (
        <Stack gap={'lg'}>
            <Tree />
            <Title order={2}>ลองพักสายตาดูสิ</Title>
            <Text>แค่ปิดตา หรือ มองออกไปนอกหน้าต่าง ให้เห็น <Text span c={'green'}>สีเขียวๆ</Text></Text>
            <Text>
                {
                    seconds < 1 ? (
                        'คุณพร้อมทำบททดสอบต่อแล้ว'
                    ) : (
                        <>รออีก <Text span c="green">{seconds}</Text> น่ะ</>
                    )
                }
            </Text>
            <Button onClick={() => router.push('./step3')} loading={loading} rightSection={<IconArrowRight />}>รู้สึกดีแล้ว</Button>
            <Blockquote color="blue" cite="– อังคณา คุ้มวงษ์" icon={<IconInfoCircle />} >
                เมื่อใช้คอมพิวเตอร์หรือใช้งานหน้าจอโทรศัพท์เป็นเวลานาน ควรพักสายตาทุก ๆ 20 นาที โดยใช้วิธีการมองออกไปไกล ๆ การมองในระยะไกลจะช่วยลดการเพ่งของสายตาที่ใช้งานอย่างหนักได้ การเพ่งสายตาเป็นระยะเวลานาน อาจส่งผลต่อสุขภาพในด้านอื่น ๆ ได้อีก เช่น อาการปวดศรีษะ น้ำตาไหล ตาพร่ามัว และมีอาการตาแห้งตามมางออกกำลังกายทั้งการยืดเหยียด และการออกกำลังกายเพื่อสร้างความแข็งแรงให้กลุ่มกล้ามเนื้อหลักที่ใช้ในการทำงานอย่างสม่ำเสมอ เพื่อลดโอกาสการกลับมาเป็นใหม่ หรือให้กลับมาเป็นใหม่ช้าที่สุด
            </Blockquote>
        </Stack >
    )
}

export default Page