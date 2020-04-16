export function formatDate(timestamp) {
    return new Date(timestamp * 1000).toLocaleDateString("ZH-CN", {
        hour: 'numeric',
        minute: 'numeric'
    })
}