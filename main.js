function encode(input) {
    const BOS_ID = 256;
    const EOS_ID = 257;
    const tokenIds = [];

    tokenIds.push(BOS_ID);

    for (let i = 0; i < input.length; i++) {
        const asciiCode = input.charCodeAt(i);
        tokenIds.push(asciiCode);
    }

    tokenIds.push(EOS_ID);
    console.log(tokenIds);
    return tokenIds;
}

function decode(tokenIds) {
    const BOS_ID = 256;
    const EOS_ID = 257;

    const chars = [];
    for (const id of tokenIds) {
        if (id === BOS_ID || id === EOS_ID) continue;
        if (id < 0 || id > 255) {
            throw new Error(`Invalid token id: ${id}`);
        }
        chars.push(String.fromCharCode(id));
    }
    const text = chars.join("");
    console.log(text);
    return text;
}
module.exports = { encode, decode };

// const text = "hi how are you";
// const ids = encode(text);
// decode(ids);