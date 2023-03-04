import wasmInit from "./pkg/my_wasm_project.js";

const runWasm = async () => {
    const wasmModule = await wasmInit("./pkg/my_wasm_project_bg.wasm");
    const addResult = wasmModule.add_numbers(10, 11);

    document.body.textContent = `Hello World! addResult: ${addResult}`;
};

runWasm();
