import Image from 'next/image'

export default function Spinner() {
        return(
        <Image
            src="/spinner.svg"
            height={50}
            width={50}
            className="rotate"
        />
    )
}