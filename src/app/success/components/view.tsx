import { Center, Image } from "@mantine/core"

function ImageSet() {
    return (
        <Center>
            <Image src={'/mail.svg'} alt="image" w={300} fit="contain" />
        </Center>
    )
}
export default ImageSet