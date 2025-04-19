
export const Print = (m, ok = true) => {

    if (ok) {
        console.log("\n --------------------");
        console.log();

        console.log("\n 😎✅ ", m);
        console.log();
        console.log("\n --------------------");

    }
    else {
        console.log("\n --------------------");
        console.log();
        console.log("\n ❌ ", m);
        console.log();
        console.log("\n --------------------");

    }
}