export async function getAccountDetails() {
    fetch('https://api.brevo.com/v3/account', {
        headers: {
            "accept": "application/json",
            "api-key": "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"
        }
    }).then((resp) => console.log(resp)).catch((err) => console.log(err))
}