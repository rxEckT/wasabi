# Documentation, Usability

- API documentation
    * meaning of parameters?
         - e.g., what is the "op" of store?
         - e.g., what are the properties of "memarg"?
    * when do the callbacks get called?
- "Harness generator", e.g. ```$ wasabi-harness bla.wasm analysis.js``` that
    * by convention: bla.wasm contains ```start``` functions, uses no imports
    * generates "host harness" that runs bla.wasm
    * instruments bla.wasm and includes analysis.js in host harness
- Documentation on how to run (integration style) tests

# Engineering, small Features, Tests

- Reduce memory allocations (see eval/perf/ heaptrack data) in hook_map::instr() and Hook::new()
    * more borrowing, less String
- fix wrong handling of ```call_indirect``` in Firefox: exported function object .name property is NOT the Wasm index -> BUG report and compare with Chrome!
- automatic (```cargo test```-able) integration tests for analyses 
    * using Wasm in Node.js
    * make sure null- or log-all-analysis run without exception
- proper error handling in library and binary with [failure](https://boats.gitlab.io/failure/intro.html) crate
    * implement own Error type
    * replace panics with ```Result<_, wasabi::Error>```
    * implement ```From``` and ```Error``` traits
- How to handle Wasm traps?
    * (Hacky:) replace Wasm function by Wasm -> JS -> Wasm wrapper that does 
        ```
        try { 
            original_wasm_func()
        } catch (e) {
            trap_hook()
        }
        ```
