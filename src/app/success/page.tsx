import { Container, Flex, Stack, Title } from "@mantine/core"
import ImageSet from "./components/view"

function Page() {
    return (
        <Flex justify={'center'} mt={'lg'} style={{ textAlign: 'center' }} align={'center'} direction={'column'} h={'90vh'}>
            <Container size={'xs'}>
                <Stack gap={'lg'}>
                    <ImageSet />
                    <Title c={'green'}>คำตอบของคุณส่งถึงเราแล้ว ✅</Title>
                </Stack>
            </Container >
        </Flex>)
}

export default Page