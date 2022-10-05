export default function sendToDataLayer(eventName, rest) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: eventName,
        ...rest
    })
}