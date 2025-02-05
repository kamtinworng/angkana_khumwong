'use client'
import { Box, Container, Flex, Title, Text } from "@mantine/core"
import { useInterval } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const [seconds, setSeconds] = useState(0);
    const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

    useEffect(() => {
        if (pathname === '/test/step5') {
            interval.stop();
            return interval.toggle;

        } else {
            interval.start();
            return interval.stop;
        }
    }, [seconds, interval, pathname]);

    return (
        <Box>
            <Flex justify={'end'} m={'lg'}>
                <Title order={5}>เวลาที่ใช้ไป: <Text span c={'blue'}>{seconds}</Text> วินาที</Title>
            </Flex>
            <Flex justify={'center'} style={{ textAlign: 'center' }} align={'center'} direction={'column'} h={'90%'}>
                <Container size={'xs'} >
                    {children}
                </Container>
            </Flex>
        </Box>
    )
}