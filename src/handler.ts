export async function socket(event) {
    const { connectionId, routeKey } = event.requestContext;

    switch (routeKey) {
        case '$connect':
            console.log('Connect', connectionId);
        break;
        case '$disconnect':
            console.log('Disconnect', connectionId);
        break;
        default:
            console.log(routeKey);
    }

    return { statusCode: 200 };
}