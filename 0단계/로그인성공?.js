const fs = require("fs");
const input = fs.readFileSync("./0단계/로그인성공?.txt").toString().split("\n");

const id_pw = JSON.parse(input[0]);
const db = JSON.parse(input[1]);

const solution = (id_pw, db) => {
    for (user of db) {
        if (user[0] === id_pw[0] && user[1] === id_pw[1]) return "login";
        else if (user[0] === id_pw[0] && user[1] !== id_pw[1]) return "wrong pw";
    }

    return "fail";
};

const solution2 = (id_pw, db) => {
    const [id, pw] = id_pw;
    const map = new Map(db);

    return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
};

console.log(solution2(id_pw, db));
