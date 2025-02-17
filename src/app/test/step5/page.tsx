'use client'
import { Button, Text, Stack, Title, Rating, Center, Textarea } from "@mantine/core"
import { IconMailForward, IconMoodConfuzed, IconMoodCry, IconMoodHappy, IconMoodSad, IconMoodSmile } from "@tabler/icons-react"
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

    const getIconStyle = (color?: string) => ({
        width: 24,
        margin: 5,
        height: 24,
        color: color ? `var(--mantine-color-${color}-7)` : undefined,
    });

    const getEmptyIcon = (value: number) => {
        const iconStyle = getIconStyle();

        switch (value) {
            case 1:
                return <IconMoodCry style={iconStyle} />;
            case 2:
                return <IconMoodSad style={iconStyle} />;
            case 3:
                return <IconMoodConfuzed style={iconStyle} />;
            case 4:
                return <IconMoodSmile style={iconStyle} />;
            case 5:
                return <IconMoodHappy style={iconStyle} />;
            default:
                return null;
        }
    };

    const getFullIcon = (value: number) => {
        switch (value) {
            case 1:
                return <IconMoodCry style={getIconStyle('red')} />;
            case 2:
                return <IconMoodSad style={getIconStyle('orange')} />;
            case 3:
                return <IconMoodConfuzed style={getIconStyle('yellow')} />;
            case 4:
                return <IconMoodSmile style={getIconStyle('lime')} />;
            case 5:
                return <IconMoodHappy style={getIconStyle('green')} />;
            default:
                return null;
        }
    };


    return (
        <Stack gap={'lg'}>
            {process.env.DATABASE_URL}
            <ImageSet />
            <Title order={2}>ยินดีด้วยคุณทำสำเร็จแล้ว</Title>
            <Text>ตอนนี้คุณพร้อมกลับไปทำงานอย่างมีประสิทธิภาพแล้ว</Text>
            <Text>โปรดให้คะแนนความผ่อนคลายของคุณ จากกิจกรรมของเรา 🥰</Text>
            <Center>
                <Rating emptySymbol={getEmptyIcon} fullSymbol={getFullIcon} highlightSelectedOnly value={value} onChange={(e) => setValue(e)}
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