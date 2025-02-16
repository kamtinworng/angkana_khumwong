'use client'
import { Button, Text, Stack, Title, Blockquote, List } from "@mantine/core"
import { IconArrowRight, IconInfoCircle } from "@tabler/icons-react"
import { useTimeout } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ImageSet from "./components/view";

function Page() {
    const router = useRouter()


    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { start } = useTimeout(() => setIsLoading(false), 10000);


    useEffect(() => {
        start()
    }, [start])



    return (
        <Stack gap={'lg'}>
            <ImageSet />
            <Title order={2}>ลองยืดเส้นยืดสายดูสิ</Title>
            <Text>คุณลองยืดเส้นยืดสาย หรือ ลุกขึ้นเดินไปมา</Text>
            <Button onClick={() => router.push('./step5')} loading={isLoading} rightSection={<IconArrowRight />}>รู้สึกมีแรงมากขึ้นแล้ว</Button>
            <Blockquote color="blue" icon={<IconInfoCircle />} >
                ประโยชน์ที่ได้จากการยืดเส้นยืดสาย
                <List style={{ textAlign: 'start' }}>
                    <List.Item>ทำให้ร่างกายทำงานได้ดี เพราะกล้ามเนื้อไม่ตึง</List.Item>
                    <List.Item>ป้องกันและลดอาการบาดเจ็บของกล้ามเนื้อจากการทำงานและกิจกรรมต่างๆ</List.Item>
                    <List.Item>ช่วยปรับปรุงและพัฒนาบุคลิกภาพ ท่าทาง (ซึ่งเป็นการป้องกันอาการปวดหลัง ปวดคอได้ดี)</List.Item>
                    <List.Item>คนที่มีอาการปวดๆเมื่อยๆ เป็นประจำ จะช่วยรักษาและบรรเทาอาการลงได้</List.Item>
                    <List.Item>คนที่อาการปวดหายแล้ว จะช่วยฟื้นฟูเนื้อเยื่อหลังการบาดเจ็บและป้องกันการบาดเจ็บซ้ำ หรือเกิดความผิดปกติในอนาคต</List.Item>
                </List>
            </Blockquote>
        </Stack >
    )
}

export default Page