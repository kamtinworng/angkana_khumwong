import { Center, Image } from "@mantine/core"

function ImageSet() {
    return (
        <Center>
            <Image src={'/walk-gif.gif'} alt="image" w={400} fit="contain" />
        </Center>
    )
}
export default ImageSet