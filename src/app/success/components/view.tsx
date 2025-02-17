import { Center, Image } from "@mantine/core"

function ImageSet() {
    return (
        <Center>
            <Image src={'/success-gif.gif'} alt="image" w={300} fit="contain" />
        </Center>
    )
}
export default ImageSet