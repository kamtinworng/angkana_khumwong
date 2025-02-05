'use client'
import { Button, Text, Stack, Title, Rating, Center, Textarea } from "@mantine/core"
import { IconMailForward } from "@tabler/icons-react"
import { useState } from "react";
import ImageSet from "./components/view";
import { useRouter } from "next/navigation";

function Page() {
    const [value, setValue] = useState(0);
    const router = useRouter()
    return (
        <Stack gap={'lg'}>
            <ImageSet />
            <Title order={2}>ยินดีด้วยคุณทำสำเร็จแล้ว</Title>
            <Text>ตอนนี้คุณพร้อมกลับไปทำงานอย่างมีคุณภาพแล้ว</Text>
            <Text>โปรดให้คะแนนกับเรา</Text>
            <Center>
                <Rating defaultValue={value} onChange={setValue} size="lg" />
            </Center>
            <Text>คำแนะนำส่งถึงเรา</Text>
            <Textarea></Textarea>
            <Button onClick={() => router.push('../success')} fullWidth leftSection={<IconMailForward />}>ส่ง</Button>
        </Stack >
    )
}

export default Page