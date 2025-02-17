'use client'
import { Button, Text, Stack, Title, Blockquote } from "@mantine/core"
import { IconArrowRight, IconInfoCircle } from "@tabler/icons-react"
import { useInterval, } from "@mantine/hooks";
import { useEffect, useState } from "react";
import Tree from "./components/view";
import { useRouter } from "next/navigation";

function Page() {
    const router = useRouter()
    const [seconds, setSeconds] = useState(20);
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
            <Text>มองหาสีเขียวรอบๆโต๊ะของคุณ หรือ มองออกไปนอกหน้าต่าง ให้เห็น <Text span c={'green'}>สีเขียวๆ</Text></Text>
            <Text>
                {
                    seconds < 1 ? (
                        'คุณพร้อมทำบททดสอบต่อแล้ว'
                    ) : (
                        <>รออีก <Text span c="green">{seconds}</Text> วินาที นะคะ</>
                    )
                }
            </Text>
            <Button onClick={() => router.push('./step3')} loading={loading} rightSection={<IconArrowRight />}>รู้สึกดีแล้ว</Button>
            <Blockquote color="blue" icon={<IconInfoCircle />} >
                เมื่อใช้คอมพิวเตอร์หรือใช้งานหน้าจอโทรศัพท์เป็นเวลานาน ควรพักสายตาทุก ๆ 20 นาที โดยใช้วิธีการมองออกไปไกล ๆ ซึ่งจะช่วยลดการเพ่งของสายตาที่ใช้งานอย่างหนักได้ การเพ่งสายตาเป็นระยะเวลานาน อาจส่งผลต่อสุขภาพในด้านอื่น ๆ ได้อีก เช่น อาการปวดศรีษะ น้ำตาไหล ตาพร่ามัว และมีอาการตาแห้งตามมา
            </Blockquote>
        </Stack >
    )
}

export default Page