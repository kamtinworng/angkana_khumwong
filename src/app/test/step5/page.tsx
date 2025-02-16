'use client'
import { Button, Text, Stack, Title, Rating, Center, Textarea } from "@mantine/core"
import { IconMailForward } from "@tabler/icons-react"
import { useState } from "react";
import ImageSet from "./components/view";
import { useRouter } from "next/navigation";
import { addRating } from "./action";
import { notifications } from "@mantine/notifications";

function Page() {
    const router = useRouter()
    const [value, setValue] = useState(0)
    const [feedback, setFeeback] = useState('')

    const submit = async () => {
        const result = await addRating({ rating: value, feedback: feedback })
        if (result?.status === 200) {
            notifications.show({
                message: result.message,
                title: 'สำเร็จ',
                color: 'green'
            })
            router.push('../success')
        } else {
            notifications.show({
                message: result?.message,
                title: 'ไม่สำเร็จ',
                color: 'red'
            })
        }
    }

    return (
        <Stack gap={'lg'}>
            <ImageSet />
            <Title order={2}>ยินดีด้วยคุณทำสำเร็จแล้ว</Title>
            <Text>ตอนนี้คุณพร้อมกลับไปทำงานอย่างมีประสิทธิภาพแล้ว</Text>
            <Text>โปรดให้คะแนนกับเรา</Text>
            <Center>
                <Rating value={value} onChange={(e) => setValue(e)}
                    size="lg" />
            </Center>
            <Text>คำแนะนำส่งถึงเรา</Text>
            <Textarea
                value={feedback}
                onChange={(e) => { setFeeback(e.currentTarget.value) }}
            ></Textarea>
            <Button
                type="submit"
                disabled={value < 1}
                onClick={submit}
                fullWidth leftSection={<IconMailForward />}>ส่ง</Button>
        </Stack >

    )
}

export default Page