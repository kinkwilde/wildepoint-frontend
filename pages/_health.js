export default function PageIndex({ response }) {
    return <p>{response}</p>;
}

export async function getServerSideProps(context) {
    const responseStatus = context.res.statusCode;

    return {
        props: {
            response: responseStatus,
        },
    };
}
