import { createStandaloneToast } from "@chakra-ui/react"

export function copyToClipboard (result, detailToast) {
    const toast = createStandaloneToast()
    navigator.clipboard.writeText(result)
    toast(detailToast)
}