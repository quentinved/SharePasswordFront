import { createStandaloneToast } from "@chakra-ui/react"

export function copyToClipboard (result, detailToast) {
    const toast = createStandaloneToast()
    console.log("debug", detailToast)
    navigator.clipboard.writeText(result)
    toast(detailToast)
}