const Color = require("color");

export default function AtomsColors({ data }) {
    const rgbColor = (clr) => Color(clr).rgb().string();
    const cmykColor = (clr) => Color(clr).cmyk().round().array();
    const darkenColor = (clr, val) => Color(clr).darken(val).hex();

    return (
        <>
            <div className="p-4 bg-white">
                <div>
                    <h4 className="mb-1 text-lg uppercase">{data.name}</h4>
                    <p className="font-firacode mb-1">
                        RGB: {rgbColor(data.hex)}
                    </p>
                    <p className="font-firacode mb-0">
                        <span>CMYK: </span>
                        {cmykColor(data.hex).map((item) => (
                            <span
                                key={item}
                                className="after:content-[',_'] last:after:content-none"
                            >
                                {item}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <div
                    className="p-4"
                    style={{
                        backgroundColor: data.hex,
                    }}
                >
                    <h5 className="mb-1 text-base uppercase">Default</h5>
                    <p className="mb-0">{data.hex}</p>
                </div>
                <div
                    className="p-4"
                    style={{
                        backgroundColor: `${darkenColor(data.hex, 0.15)}`,
                    }}
                >
                    <h5 className="mb-1 text-base uppercase">Hover</h5>
                    <p className="mb-0">{darkenColor(data.hex, 0.15)}</p>
                </div>
                <div
                    className="p-4"
                    style={{
                        backgroundColor: `${darkenColor(data.hex, 0.3)}`,
                    }}
                >
                    <h5 className="mb-1 text-base uppercase">Active</h5>
                    <p className="mb-0">{darkenColor(data.hex, 0.3)}</p>
                </div>
            </div>
        </>
    );
}
