export default function AtomsColor({ data }) {
    return (
        <div className="flex flex-row space-x-4">
            <div
                className="h-10 w-10 rounded-full"
                style={{ background: `rgb(${data.rgb})` }}
            ></div>
            <div>
                <h4 className="mb-1 text-lg uppercase">{data.name}</h4>
                <p className="mb-1 font-firacode">HEX: {data.hex}</p>
                <p className="mb-0 font-firacode">RGB: {data.rgb}</p>
                <p>CMYK</p>
            </div>
        </div>
    );
}
